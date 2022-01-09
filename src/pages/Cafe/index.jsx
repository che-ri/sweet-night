import React, { useState } from "react";
import styled from "styled-components";

//components
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
    <TableWrapper>
      {cafeList.map(({ name, address, id }) => (
        <div key={id}>
          <strong>{name}</strong>
          <p>{address}</p>
        </div>
      ))}
    </TableWrapper>
  );
}

const TableWrapper = styled.div``;
