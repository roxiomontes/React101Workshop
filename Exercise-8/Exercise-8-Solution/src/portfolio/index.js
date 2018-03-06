import React from "react";

import { Price } from "./price";
import { ProfitLoss } from "./profitLoss";
import LineChart from "react-linechart";
import "../../node_modules/react-linechart/dist/styles.css";

export class Portfolio extends React.Component {
  state = {
    numBitcoins: 4,
    data: [],
    startingPrice: 0
  };

  componentDidMount() {
    fetch("https://api.cryptonator.com/api/ticker/btc-usd")
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({
          data: this.state.data.concat([data]),
          startingPrice: data.ticker.price
        });
      });
    setInterval(() => {
      fetch("https://api.cryptonator.com/api/ticker/btc-usd")
        .then(res => {
          return res.json();
        })
        .then(data => {
          this.setState({
            data: this.state.data.concat([data])
          });
        });
    }, 40000);
  }

  componentDidUpdate() {}

  handleChange = evt => {
    this.setState({ numBitcoins: evt.target.value });
  };

  render() {
    const priceLine = {
      color: "red",
      points: []
    };
    const priceData = [];
    const prices = this.state.data.map((dataPoint, index) => {
      const price = dataPoint.ticker.price;
      const time = dataPoint.timestamp;
      priceLine.points.push({
        x: time,
        y: price
      });
      return <Price key={`${index}-${time}`} price={price} time={time} />;
    });
    priceData.push(priceLine);
    const price =
      this.state.data.length > 0
        ? this.state.data[this.state.data.length - 1].ticker.price
        : 0;
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
          price={price}
          startingPrice={this.state.startingPrice}
        />
        {prices}
        <LineChart width={500} height={400} data={priceData} />
      </div>
    );
  }
}
