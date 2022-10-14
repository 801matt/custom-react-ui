import React from "react";
import styled from "styled-components";
import CompletedTabled from "./CompletedTable";
import LocationScan from "./Status/StatusCards";
import Status from "./Status/StatusKey";

const StyledScanRequests = styled.div`
  max-width: 1313px;
  margin: 0 auto;
  background: #f7f9fb;
  border-radius: 16px;

  h1 {
    font-size: 18px;
    line-height: 26px;
  }
`;

// Here is your canvas. Feel free to be creative and use whichever components you see fit.
const ScanRequests = ({ locationScanOrders }) => {
  return (
    <StyledScanRequests>
      {/* Utility classes used below for element padding. See App.js */}
      <div className="scan-requests-info-page--header pt-32 pr-32 pl-32">
        <h1 className="scan-requests-info-page--title">Scan Requests</h1>
      </div>
      <Status />
      <LocationScan locationScanOrders={locationScanOrders} />
      <CompletedTabled locationScanOrders={locationScanOrders} />
    </StyledScanRequests>
    // <pre>{JSON.stringify(props.locationScanOrders, null, 2)}</pre>
  );
};

export default ScanRequests;
