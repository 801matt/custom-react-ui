import styled from "styled-components";

const StyledStatusCard = styled.div`
  .location-scan-card {
    margin: 12px;
    width: 100%;
    padding: 16px 0 41px;
    background: #ffffff;
    border: 1px solid #eaecee;
    border-radius: 8px;
    margin-top: 12px;
    .location-scan-card--body {
      padding: 0 24px;

      .location-scan-card--title {
        font-weight: 500;
        font-size: 10px;
        line-height: 14px;
        color: #250b0c;
        opacity: 0.32;
      }

      .location-scan-card--name {
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
      }

      .location-scan-card--status-bar {
        margin-top: 18px;
        width: 100%;
        height: 14px;
        background: #e6e5e5;
        border-radius: 100px;
      }

      .location-scan-card--status-key {
        margin-top: 8px;
      }
    }

    .location-scan-card--separator {
      margin-top: 36px;
      border: 1px solid #eaecee;
    }
  }

  @media (min-width: 678px) {
    .location-scan-card {
      width: calc(100% / 2 - 26px);
    }
  }

  @media (min-width: 1024px) {
    .location-scan-card {
      width: calc(100% / 3 - 26px);
    }
  }

  @media (min-width: 1200px) {
    .location-scan-card {
      width: calc(100% / 4 - 26px);
    }
  }
`;

const StatusCard = ({ order }) => {
  return <StyledStatusCard></StyledStatusCard>;
};

export default StatusCard;
