import React, { useState } from "react";
import styled from "styled-components";

//components
import Presenter from "./Presenter.jsx";

export default function Pub({ collectionName }) {
  const [list, setList] = useState([]);

  return (
    <Presenter list={list} setList={setList} collectionName={collectionName}>
      <Table list={list} />
    </Presenter>
  );
}

function Table({ list }) {
  return (
    <TableWrapper>
      <TableHeader>
        <Button>추가</Button>
      </TableHeader>
      <TableContent>
        {list.map(({ name, address, id }) => (
          <Row key={id}>
            <strong>{name}</strong>
            <p>{address}</p>
          </Row>
        ))}
      </TableContent>
    </TableWrapper>
  );
}

const TableWrapper = styled.div``;

const TableHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 20px;
  background: ${({ theme }) => theme.color.light_green};
  padding: 5px 20px;
`;

const Button = styled.button`
  padding: 10px;
  background: #fff;
  border: 1px solid ${({ theme }) => theme.color.main_gray};
  border-radius: 10px;
  &:hover {
    background: ${({ theme }) => theme.color.main_green};
  }
`;

const TableContent = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  padding: 20px;
`;

const Row = styled.div`
  border: 1px solid ${({ theme }) => theme.color.main_gray};
  border-radius: 10px;
  padding: 10px;
  background: #fff;
`;
