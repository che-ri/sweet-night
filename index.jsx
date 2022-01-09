import "./Presenter.jsx";
import React, { useState } from "react";
import Presenter from "./Presenter.jsx";

export default function Cafe() {
  const [cafeList, setCafeList] = useState([]);

  return (
    <Presenter cafeList={cafeList} setCafeList={setCafeList}>
      <Table cafeList={cafeList} />
    </Presenter>
  );
}

function Table({ cafeList }) {
  return (
    <>
      {cafeList.map(({ name, address, id }) => (
        <div key={id}>
          <strong>{name}</strong>
          <p>{address}</p>
        </div>
      ))}
    </>
  );
}
