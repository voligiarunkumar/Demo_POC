import React, { Suspense } from "react";
const Orders = React.lazy(() => import("Vtrac/Orders"));
const Reports = React.lazy(() => import("Vtrac/Reports"));
const Logs = React.lazy(() => import("Vtrac/Logs"));
const View = React.lazy(() => import("Documents/View"));
const Customer = React.lazy(() => import("SharedData/Customer"));
const RecievedShipment = React.lazy(() => import("Shipping/RecievedShipment"));
const ViewShipment = React.lazy(() => import("Shipping/ViewShipment"));

const SelectRoute = (props) => {
  const url = props.url;
  console.log(url);
  const component = () => {
    if (url == "/Orders") {
      return (
        <Suspense fallback={null}>
          <Orders />
        </Suspense>
      );
    }
    if (url == "/Reports") {
      return (
        <Suspense fallback={null}>
          <Reports />
        </Suspense>
      );
    }
    if (url == "/Logs") {
      return (
        <Suspense fallback={null}>
          <Logs />
        </Suspense>
      );
    }
    if (url == "/Customer") {
      return (
        <Suspense fallback={null}>
          <Customer />
        </Suspense>
      );
    }
    if (url == "/RecievedShipment") {
      return (
        <Suspense fallback={null}>
          <RecievedShipment />
        </Suspense>
      );
    }
    if (url == "/ViewShipment") {
      return (
        <Suspense fallback={null}>
          <ViewShipment />
        </Suspense>
      );
    }
    if (url == "/View") {
      return (
        <Suspense fallback={null}>
          <View />
        </Suspense>
      );
    }
  };
  return <>{component()}</>;
};
export default SelectRoute;
