import React from "react";

//components
import Cafe from "../pages/Cafe";
import Restaurant from "../pages/Restaurant";
import Pub from "../pages/Pub";

export default function Content({ collectionName }) {
  function Router() {
    switch (collectionName) {
      case "restaurant":
        return <Restaurant collectionName={collectionName} />;
      case "pub":
        return <Pub collectionName={collectionName} />;
      default:
        return <Cafe collectionName={collectionName} />;
    }
  }
  return (
    <div>
      <Router />
    </div>
  );
}
