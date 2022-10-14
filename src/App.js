import "./App.css";

import data from "./data";
import ScanRequests from "./components/ScanRequests";

function App() {
  return (
    <div className="App">
      <ScanRequests locationScanOrders={data.getLocationScanOrders.orders} />
    </div>
  );
}

export default App;
