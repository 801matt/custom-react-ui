import { useState } from "react";
import styled from "styled-components";
import {
  queued,
  inProgress,
  completed,
  errors,
  Ellipse,
} from "../../../../styled-constants";

const StyledStatusBar = styled.div`
  .status-bar--container {
    position: relative;
    margin-top: 14px;
    width: 100%;
    height: 14px;
    border-radius: 100px;
  }

  .status-bar {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 14px;
    border-radius: 100px;
    display: flex;

    /* **INSERT EXHAUSTED EMOJI HERE XD** */
    > * {
      &:first-child:not(.single) {
        border-radius: 100px 0 0 100px;
      }
    }

    > * {
      &:last-child:not(.single) {
        border-radius: 0 100px 100px 0;
      }
    }
  }

  .status-bar--color {
    height: 15px;
  }

  .error-message {
    padding: 10px;
    position: absolute;
    top: 28px;
    right: 0;
    width: 208px;
    background: #ffffff;
    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    z-index: 999;
    display: flex;
  }

  .red-line {
    height: 68px;
    width: 4px;
    margin-right: 12px;
    background: #fb765c;
    border-radius: 4px;
  }

  .content-box {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .percentage-display {
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;
    }
    .error-message-display {
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      opacity: 0.54;
    }
  }

  .status-bar--color.single {
    border-radius: 100px;
  }

  .status-bar--percentages {
    margin-top: 8px;
    font-weight: 500;
    font-size: 10px;
    line-height: 14px;
    color: #250b0c;
    opacity: 0.54;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .status-bar--percentage {
    display: flex;
    align-items: center;
    .percentage {
      margin-left: 4px;
    }
  }
`;

const StatusBar = ({ order }) => {
  const [displayErrorMessage, setDisplayErrorMessage] = useState("none");
  const totalBinAmount = order.bins.length;
  const getStatusTypeAmount = (statusType) => {
    return order.bins.filter((bin) => bin.status === statusType).length;
  };
  const getStatusPercentage = (statusTypeAmountTotal, totalBinAmount) => {
    return Math.round((statusTypeAmountTotal / totalBinAmount) * 100);
  };

  const queuedAmount = getStatusTypeAmount("QUEUED");
  const inProgressAmount = getStatusTypeAmount("IN_PROGRESS");
  const completedAmount = getStatusTypeAmount("SUCCEEDED");
  const errorsAmount = getStatusTypeAmount("ERROR");

  const queuedPercentage = getStatusPercentage(queuedAmount, totalBinAmount);

  const inProgressPercentage = getStatusPercentage(
    inProgressAmount,
    totalBinAmount
  );

  const completedPercentage = getStatusPercentage(
    completedAmount,
    totalBinAmount
  );

  const errorsPercentage = getStatusPercentage(errorsAmount, totalBinAmount);

  // IF STATUS BAR TYPE IS 100% OF SINGLE TYPE

  const singleStatusDisplay = {};

  const updateSingleStatusDisplay = (statusTypePercentage, statusType) => {
    if (statusTypePercentage === 100) {
      let statusTypeColorFormat;
      statusType === "Queued"
        ? (statusTypeColorFormat = queued)
        : statusType === "In progress"
        ? (statusTypeColorFormat = inProgress)
        : statusType === "Completed"
        ? (statusTypeColorFormat = completed)
        : (statusTypeColorFormat = errors);
      return (
        (singleStatusDisplay.name = statusType),
        (singleStatusDisplay.color = statusTypeColorFormat)
      );
    }
  };

  updateSingleStatusDisplay(queuedPercentage, "Queued");
  updateSingleStatusDisplay(inProgressPercentage, "In progress");
  updateSingleStatusDisplay(completedPercentage, "Completed");
  updateSingleStatusDisplay(errorsPercentage, "Errors");

  const showErrorMessage = () => {
    console.log("Is now over it");
    setDisplayErrorMessage("flex");
  };

  const hideErrorMessage = () => {
    console.log("Just left it");
    setDisplayErrorMessage("none");
  };

  return (
    <StyledStatusBar>
      <div className="status-bar--container">
        <div className="status-bar">
          {singleStatusDisplay.name ? (
            <div
              style={{
                width: "100%",
                backgroundColor: singleStatusDisplay.color,
              }}
              className="status-bar--color single"
            ></div>
          ) : (
            <>
              <div
                style={{
                  width: `${queuedPercentage}%`,
                  backgroundColor: queued,
                }}
                className="status-bar--color queued"
              ></div>
              <div
                style={{
                  width: `${inProgressPercentage}%`,
                  backgroundColor: inProgress,
                }}
                className="status-bar--color in-progress"
              ></div>
              <div
                style={{
                  width: `${completedPercentage}%`,
                  backgroundColor: completed,
                }}
                className="status-bar--color completed"
              ></div>
              <div
                style={{
                  width: `${errorsPercentage}%`,
                  backgroundColor: errors,
                  position: "relative",
                }}
                className="status-bar--color errors"
                onMouseOver={showErrorMessage}
                onMouseOut={hideErrorMessage}
              >
                <div
                  style={{ display: displayErrorMessage }}
                  className="error-message"
                >
                  <div className="red-line"></div>
                  <div className="content-box">
                    <div className="percentage-display">
                      {inProgressPercentage}% errors
                    </div>
                    <div className="error-message-display">
                      Drone unable to capture data or process it
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="status-bar--percentages">
        {singleStatusDisplay.name ? (
          <div>{singleStatusDisplay.name}</div>
        ) : (
          <>
            <div className="status-bar--percentage">
              <Ellipse backgroundColor={queued} />
              <div className="percentage">{queuedPercentage}%</div>
            </div>
            <div className="status-bar--percentage">
              <Ellipse backgroundColor={inProgress} />
              <div className="percentage">{inProgressPercentage}%</div>
            </div>
            <div className="status-bar--percentage">
              <Ellipse backgroundColor={completed} />
              <div className="percentage">{completedPercentage}%</div>
            </div>
            <div className="status-bar--percentage">
              <Ellipse backgroundColor={errors} />
              <div className="percentage">{errorsPercentage}%</div>
            </div>
          </>
        )}
      </div>
    </StyledStatusBar>
  );
};

export default StatusBar;
