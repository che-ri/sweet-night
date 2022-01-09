import React, { useEffect } from "react";
import { getList } from "../../api";

export default function Presenter({ children, cafeList, setCafeList }) {
  useEffect(() => {
    getList("cafe").then((list) => setCafeList(list));
  }, []);

  return <>{children}</>;
}
