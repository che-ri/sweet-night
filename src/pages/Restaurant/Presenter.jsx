import React, { useEffect } from "react";
import { getList } from "../../api";

export default function Presenter({ children, list, setList, collectionName }) {
  useEffect(() => {
    getList(collectionName).then((_list) => setList(_list));
  }, []);

  return <>{children}</>;
}
