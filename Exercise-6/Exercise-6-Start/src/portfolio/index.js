import React from "react";

import { Price } from "./price";
import { data } from "../data";
import { ProfitLoss } from "./profitLoss";

export class Portfolio extends React.Component {
  state = {
    numBitcoins: 4
  };

  handleChange = evt => {
    this.setState({ numBitcoins: evt.target.value });
  };

  render() {
    const prices = data.map((dataPoint, index) => {
      const price = dataPoint.ticker.price;
      const time = dataPoint.timestamp;
      return <Price key={`${index}-${time}`} price={price} time={time} />;
    });
    return (
      <div>
        <div>
          Bitcoins owned:{" "}
          <input
            type="text"
            value={this.state.numBitcoins}
            onChange={this.handleChange}
          />
        </div>
        <ProfitLoss
          numBitcoins={this.state.numBitcoins}
          price={data[0].ticker.price}
          startingPrice={data[data.length - 1].ticker.price}
        />
        {prices}
      </div>
    );
  }
}
