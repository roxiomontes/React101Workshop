import React from "react";

import { Price } from "./price";
import { data } from "../data";

export class Portfolio extends React.Component {
  render() {
    const prices = data.map((dataPoint, index) => {
      const price = dataPoint.ticker.price;
      const time = dataPoint.timestamp;
      return <Price key={`${index}-${time}`} price={price} time={time} />;
    });
    return <div>{prices}</div>;
  }
}
