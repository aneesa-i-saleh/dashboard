import React from "react";

const ChartBox = (props) => {
  let colClass = "chart-col col-" + props.cols + " " + props.float;
  return(
    <div className={colClass}>
      <h3>{props.title}</h3>
      <img src={props.image} />
    </div>
  );
  };

export default ChartBox;
