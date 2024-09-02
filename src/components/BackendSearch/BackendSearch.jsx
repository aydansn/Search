import React, { useEffect, useState } from "react";

const BackendSearch = () => {
  const [currentText, setCurrentText] = useState("");
  const [myData, setMyData] = useState();
  useEffect(() => {
    fetch(`backend/all/product/${currentText}`)
      .then((res) => res.json())
      .then((data) => setMyData(data));
  }, [currentText]);
  return (
    <div>
      <input onChange={(e) => setCurrentText(e.target.value)} type="text" />
      {myData.map()}
    </div>
  );
};

export default BackendSearch;
