# React 101 Workshop #
* * *
### Goals ###
In this hands-on workshop, you will learn how to:
- Create and render React components
- Work with component data, including props and state
- Compose components into higher-order components
- Integrate REST services into  your React application

### Prerequisites ###
We will use [https://codesandbox.io](https://codesandbox.io) to code this workshop without the need of any software or library installations.

---
## Exercises ##
This hands-on workshop includes the following exercises:

- [Exercise 1: Create your first React component](#Exercise1)
- [Exercise 2: Pass custom data to a component using props](#Exercise2)
- [Exercise 3: Create multiple components](#Exercise3)
- [Exercise 4: Use State to manage how your component renders & behaves](#Exercise4)
- [Exercise 5: Use controlled components in React](#Exercise5)
- [Exercise 6: Use Open Source Components](#Exercise6)
- [Exercise 7: Use of Lifecycle Methods](#Exercise7)
- [Exercise 8: Connect to a REST service](#Exercise8)

As we move throught the workshop you will find an "Starting Point" project for each exercise. These projects will allow you to quickly get caught up with the workshop if you run into any issues during an exercise. For example, if you encounter an issue with your code during exercise 3 and the workshop moves on to exercise 4. You will be able to use exercise 4 "Starting Point" project to continue on with the workshop and overcome the issues with your previous code.

<a name="Exercise1"></a>
## Exercise 1: Create your first React component ##
Instead of starting from scratch, you will use a codesandbox.io project that we have created for you. This project will provide you the neccesary structure to start coding right away!  In this exercise you will create your first react components.

Starting point: https://codesandbox.io/s/0y2vm4mmvw

1. Open the Starting Point project, you will see html code for a simple web page. On the the index.js file change the title to "Hello San Diego JS" by editing the text on the h1 tag. You will see that a save button appears on the top menu bar, click it to save the project to your own profile. 
1. We will start by turning the title, h1 tag, into its own react component. On the left hand panel, click on the "src" folder and then click on the "New File" icon that appers on the menu right hand side to create the "header.js" file.

    Add the following code in header.js and then save the file:
    ```javascript
    import React from "react";
    class Title extends React.Component {
      render() {
        return <h1>Bitfolio</h1>;
      }
    }
    class SubTitle extends React.Component {
      render() {
        return <div>Track your bitcoin net worth</div>;
      }
    }
    export class Header extends React.Component {
      render() {
        return (
          <div>
            <Title />
            <SubTitle />
          </div>
        );
      }
    }
    ```
    This is your first react component!
1. Let's go back to index.js to import the header.js component. Add the following to the top of the file with the rest of the imports.
    ```javascript
    import { Header } from "./header";
    ```
    Now, let's replace the h1 title tag with our header component.
     ```javascript
    <div style={styles}>
        <Header />
        <h2>Start editing to see some magic happen {"\u2728"}</h2>
      </div>
      ```
    You will see that your header component now displays on the web page.
1. Let's now do the same with the footer. On the left hand panel, click on the "src" folder and then click on the "New File" icon that appers on the menu right hand side to create the "footer.js" file.
    Add the following code in footer.js and then save the file:
    ```javascript
    import React from "react";
    const styles = {
      margin: "50px"
    };
    export class Footer extends React.Component {
      render() {
        return (
          <footer style={styles}>Created just for: (your name) on 6/3/2018</footer>
        );
      }
    }
    ```
    Lets go back to index.js to import the footer.js component. Add the following to the top of the file with the rest of the imports.
    ```javascript
    import { Footer } from "./footer";
    ```
    Now, let's replace the h2  tag with our footer component.
     ```javascript
    <div style={styles}>
        <Header />
        <Footer />
      </div>
      ```
      You now have a working application with 2 react components.
<a name="Exercise2"></a> 
## Exercise 2: Pass custom data to a component using props ##
Starting point: https://codesandbox.io/s/481vm60p94

1. In this exercise we will see how components can dynamically render different outcomes based on data passed into it. We will start by creating a portfolio component to show all the data of our bitcoin earnigs.
    Hover over the "src" folder and create a new "portfolio" folder by clicking on the "New Folder" icon on the right hand menu. Inside the "portfolio" folder, create a file called "index.js". Add the following code to create a portfolio component that will get the first 2 elements of the "data.js" file which contains the price points for bitcoin over time. We will use this component to display the data in the app.
    ```javascript
    import React from "react";
    import { data } from "../data";
    export class Portfolio extends React.Component {
      render() {
        const price0 = data[0].ticker.price;
        const time0 = data[0].timestamp;
        const price1 = data[1].ticker.price;
        const time1 = data[1].timestamp;
        return (
          <div>
            ${price0} USD @ {time0} ms <br />
            ${price1} USD @ {time1} ms
          </div>
        );
      }
    }
    ```
1. Let's go back to index.js to import the portfolio component. Add the following code to the top of the file with the rest of the imports.
    ```javascript
    import { Portfolio } from "./portfolio";
    ```
    Next, we will add the portfolio component between the header and footer
    ```javascript
    <div style={styles}>
        <Header />
        <Portfolio />
        <Footer />
     </div>
      ```
1. We will now create a price component that recieves props from the portfolio component, create a new file named "price.js" inside the portfolio folder and add the following code:
    ```javascript
    import React from "react";
    export class Price extends React.Component {
      render() {
        return (
          <div>
            ${this.props.price} USD @ {this.props.time} ms
          </div>
        );
      }
    }
    ```
1. Let's go back to portfolio/index.js to import the price component. Add the following code to the top of the file with the rest of the imports.
    ```javascript
    import { Price } from "./price";
    ```
    Next, we will add the price component to the body of the portfolio component
    ```javascript
    <div>
        <Price price={price0} time={time0} />
        <Price price={price1} time={time1} />
    </div>
    ```
<a name="Exercise3"></a>
## Exercise 3: Create multiple components ##
Starting point: https://codesandbox.io/s/xpyx0k4llz
1. In this exercise we will see how to completely hide or show a component based on a prop. We will use all the elements on the data.js file and render the price component based on that data. 
    ```javascript
    import React from "react";
    
    import { Price } from "./price";
    import { data } from "../data";
    
    export class Portfolio extends React.Component {
      render() {
        const prices = data.map(dataPoint => {
          const price = dataPoint.ticker.price;
          const time = dataPoint.timestamp;
          return <Price price={price} time={time} />;
        });
        return <div>{prices}</div>;
      }
    }
    ```
<a name="Exercise4"></a>
## Exercise 4: Use State to manage how your component renders & behaves ##
Starting point: https://codesandbox.io/s/14x5xnq1z3

1. We will create a profitLoss.js component that recieves props from the portfolio component, create a new file named "profitLoss.js" inside the portfolio folder and add the following code:
    ```javascript
    import React from "react";
    
    export class ProfitLoss extends React.Component {
      render() {
        const numBitcoins = this.props.numBitcoins;
        const price = this.props.price;
        const startingPrice = this.props.startingPrice;
        const value = numBitcoins * price;
        const PL = numBitcoins * (price - startingPrice);
        return (
          <div style={{ margin: "10px", textAlign: "left" }}>
            <div>Bitcoins Owned: {numBitcoins}</div>
            <div>Total Value: {value}</div>
            <div>P/L: {PL}</div>
          </div>
        );
      }
    }
    ```
1. Let's go back to portfolio/index.js to import the profitLoss component. Add the following code to the top of the file with the rest of the imports.
    ```javascript
    import { ProfitLoss } from "./profitLoss";
    ```
    Next, we will add the profitLoss component to the body of the portfolio component
    ```javascript
    export class Portfolio extends React.Component {
      render() {
        const prices = data.map(dataPoint => {
          const price = dataPoint.ticker.price;
          const time = dataPoint.timestamp;
          return <Price price={price} time={time} />;
        });
        return (
          <div>
            <ProfitLoss
              numBitcoins={4}
              price={data[0].ticker.price}
              startingPrice={data[data.length - 1].ticker.price}
            />
            {prices}
          </div>
        );
      }
    }
    ```
1. We will now add State to the portfolio component. We will be saving the numBitcoins on the State by adding the following code before the render method.
    ```javascript
    export class Portfolio extends React.Component {
    state = {
        numBitcoins: 4
      };
    ```
    The State will be send as props to the profitLoss component, so lets replace our hardcode number to use the state.
    ```javascript
        <ProfitLoss
          numBitcoins={this.state.numBitcoins}
          price={data[0].ticker.price}
          startingPrice={data[data.length - 1].ticker.price}
        />
    ```
<a name="Exercise5"></a>
## Exercise 5: Use controlled components in React ##
Starting point: https://codesandbox.io/s/oj6rlw9y3y

1. We will add an input box to be able to enter the amount of bitcoins we have. To do this, let's add an input tag element and a handleChange event.
    ```javascript
    export class Portfolio extends React.Component {
      state = {
        numBitcoins: 4
      };
    
      handleChange = evt => {
        this.setState({ numBitcoins: evt.target.value });
      };
    
      render() {
        const prices = data.map(dataPoint => {
          const price = dataPoint.ticker.price;
          const time = dataPoint.timestamp;
          return <Price price={price} time={time} />;
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
    ```
<a name="Exercise6"></a>
## Exercise 6: Use Open Source Components ##
Starting point: https://codesandbox.io/s/ko60ryoj25

1. In this exercise we will discover how to use an open source component, the react-linechart. First, we need to prepare the data to send to the new component, in order to do that we will change the way we map the data for bitcoin prices on the portfolio/index.js
    ```javascript
    render() {
    const priceLine = {
      color: "red",
      points: []
    };
    const priceData = [];
    const prices = data.map(dataPoint => {
      const price = dataPoint.ticker.price;
      const time = dataPoint.timestamp;
      priceLine.points.push({
        x: time,
        y: price
      });
      return <Price price={price} time={time} />;
    });
    priceData.push(priceLine);
    return (
    ...
    ```
1. Once we have te data ready is time to add the react-linechart component. On the left hand panel, scroll down to the "dependencies" section and click to expand it. Scroll down until you see the "Add Dependency" button and click it. Search for "react-linechart", once you see the right component,double click it.

    We will now have to import the react-linechart component. Add the following code to the top of the portfolio/index.js file with the rest of the imports.
    ```javascript
    import LineChart from "react-linechart";
    import "../../node_modules/react-linechart/dist/styles.css";
    ```
    Next, we will add the LineChart component to the body of the portfolio component
    ```javascript
    ...
        <ProfitLoss
          numBitcoins={this.state.numBitcoins}
          price={data[0].ticker.price}
          startingPrice={data[data.length - 1].ticker.price}
        />
        {prices}
        <LineChart width={500} height={400} data={priceData} />
      </div>
      ...
    ```
<a name="Exercise7"></a>
## Exercise 7: Use of Lifecycle Methods ##
Starting point: https://codesandbox.io/s/6l34rvw5ln

1. Along with render, React Components also have lifecycle hooks where you can define some action to happen. Let's add the following code to see first hand how the componentDidMount and the componentDidUpdate methods work
    ```javascript
    export class Portfolio extends React.Component {
      state = {
        numBitcoins: 4
      };
    
      componentDidMount() {
        console.log("Portfolio component mounted");
      }
    
      componentDidUpdate() {
        console.log("Portofolio component updated");
      }
    ...
    ```
<a name="Exercise8"></a>
## Exercise 8: Connect to a REST service ##
Starting point: https://codesandbox.io/s/x7xypj8874

1. On this exercise, we will connect to rest service , this will happen on the componentDidMount method
    ```javascript
    ...
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
      ...
    ```
    And that’s it!
## Recap ##
TBD
