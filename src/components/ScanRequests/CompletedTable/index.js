import styled from "styled-components";

const StyledCompletedTabled = styled.section`
  h3 {
    font-weight: 700;
    font-size: 16px;
    line-height: 23px;
  }

  .completed-table {
    background: #ffffff;
    border: 1px solid #efeff2;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    overflow-x: scroll;

    table {
      min-width: 924px;
      width: 100%;
      padding: 24px 0 54px;
    }
    table tr {
      width: 100%;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #efeff2;
      th,
      td {
        padding: 12.5px 30px;
        text-align: left;
        width: 20%;
      }
      th,
      .value {
        opacity: 0.54;
      }
      td {
        font-weight: 500;
        font-size: 12px;
        line-height: 17px;
        .value {
          font-weight: 400;
          margin-left: 4px;
        }
      }
      .action {
        max-width: 65px;
      }
      .view-data {
        color: #008489;
        font-weight: 500;
        font-size: 12px;
        line-height: 17px;
      }
    }
  }
`;

const CompletedTabled = ({ locationScanOrders }) => {
  const completedScanOrders = locationScanOrders.filter(
    (order) => order.status === "SUCCEEDED"
  );

  const getNumberOfDaysBetweenTwoDates = (firstDate, secondDate) => {
    const parseFirstDate = Date.parse(firstDate);
    const parseSecondDate = Date.parse(secondDate);
    const daysBetween =
      (parseSecondDate - parseFirstDate) / (1000 * 60 * 60 * 24);

    return `${Math.floor(daysBetween)} days ago`;
  };

  const getGranularDateTimeStamp = (date) => {
    const granularizedDate = new Date(date);

    const formatGranularizedDate = granularizedDate.toLocaleTimeString(
      "en-US",
      {
        hour: "2-digit",
        minute: "2-digit",
      }
    );
    return formatGranularizedDate.replace(/^0+/, "");
  };

  return (
    <StyledCompletedTabled className="pl-32 pr-32 pb-32">
      <div className="completed--title">
        <h3>Completed</h3>
      </div>
      <div className="completed-table">
        <table>
          <thead>
            <tr>
              <th>Scan request</th>
              <th>Requested</th>
              <th>Completed</th>
              <th>Scanned</th>
              <th className="action">Action</th>
            </tr>
          </thead>
          <tbody>
            {completedScanOrders.map((order) => {
              const totalNumberOfBins = order.bins.length;
              const totalNumberOfScannedBins = order.bins.map(
                (bin) => bin.status === "SUCCEEDED"
              ).length;
              return (
                <tr key={order.id}>
                  <td>{order.userTrackingToken}</td>
                  <td>
                    <span className="key">
                      {getNumberOfDaysBetweenTwoDates(
                        order.createdAt,
                        new Date()
                      )}
                    </span>
                    <span className="value">
                      {getGranularDateTimeStamp(order.createdAt)}
                    </span>
                  </td>
                  <td>
                    <span className="key">
                      {getNumberOfDaysBetweenTwoDates(
                        order.endTime,
                        new Date()
                      )}
                    </span>
                    <span className="value">
                      {getGranularDateTimeStamp(order.endTime)}
                    </span>
                  </td>
                  <td>
                    {totalNumberOfScannedBins} of {totalNumberOfBins}
                  </td>
                  <td className="action view-data">View Data</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </StyledCompletedTabled>
  );
};

export default CompletedTabled;
