import React, { useState } from "react";
import { MENU_LIST } from "./shared/constants";

//components
import Header from "./shared/Header";
import Content from "./shared/Content";

function App() {
  const [currentMenuIdx, setCurrentMenuIdx] = useState(0);

  return (
    <div>
      <Header
        currentMenuIdx={currentMenuIdx}
        setCurrentMenuIdx={setCurrentMenuIdx}
      />
      <Content collectionName={MENU_LIST[currentMenuIdx].en} />
    </div>
  );
}

export default App;
