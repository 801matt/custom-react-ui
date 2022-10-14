import styled from "styled-components";
import {
  queued,
  inProgress,
  completed,
  errors,
  Ellipse,
} from "../../../../styled-constants";

const StyledStatusKey = styled.section`
  h3.scan-requests-status {
    font-size: 16px;
    line-height: 23px;
    margin-top: 12px;
  }

  .scan-requests-status--items {
    width: 320px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .scan-requests-status--item {
    display: flex;
    align-items: center;
  }

  .scan-requests-status--item-name {
    margin-left: 8px;
    font-size: 12px;
    font-weight: 600;
    line-height: 15px;
  }
`;

const StatusKey = () => {
  return (
    <StyledStatusKey className="pl-32 pr-32">
      <h3 className="scan-requests-status">Status</h3>
      <div className="scan-requests-status--items">
        <div className="scan-requests-status--item">
          <Ellipse backgroundColor={queued} />
          <div className="scan-requests-status--item-name">Queued</div>
        </div>
        <div className="scan-requests-status--item">
          <Ellipse backgroundColor={inProgress} />
          <div className="scan-requests-status--item-name">In progress</div>
        </div>
        <div className="scan-requests-status--item">
          <Ellipse backgroundColor={completed} />
          <div className="scan-requests-status--item-name">Completed</div>
        </div>
        <div className="scan-requests-status--item">
          <Ellipse backgroundColor={errors} />
          <div className="scan-requests-status--item-name">Errors</div>
        </div>
      </div>
    </StyledStatusKey>
  );
};

export default StatusKey;
