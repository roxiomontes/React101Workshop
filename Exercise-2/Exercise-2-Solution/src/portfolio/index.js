import React from "react";

import { data } from "../data";
import { Price } from "./price";

export class Portfolio extends React.Component {
  render() {
    const price0 = data[0].ticker.price;
    const time0 = data[0].timestamp;
    const price1 = data[1].ticker.price;
    const time1 = data[1].timestamp;
    return (
      <div>
        <Price price={price0} time={time0} />
        <Price price={price1} time={time1} />
      </div>
    );
  }
}
