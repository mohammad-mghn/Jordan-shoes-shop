import React from "react";

const Detail = ({ header, value }) => {
  return (
    <div>
      <h4>{header}</h4>
      <p>{value}</p>
    </div>
  );
};

export default Detail;
