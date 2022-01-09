import React, { useState } from "react";
const menu_list = ["카페", "맛집", "술집"];

export default function Header() {
  const [currentMenuIdx, setCurrentMenuIdx] = useState(0);
  return (
    <div
      style={{ display: "flex", justifyContent: "end", alignItems: "center" }}
    >
      {menu_list.map((menu, idx) => (
        <div
          style={{ background: idx === currentMenuIdx ? "#d5d5d5" : "white" }}
        >
          <strong>{menu}</strong>
        </div>
      ))}
    </div>
  );
}
