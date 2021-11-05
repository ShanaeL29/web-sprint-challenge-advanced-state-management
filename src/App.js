import React, { Component } from "react";

import { connect } from "react-redux";

import AddForm from "./components/AddForm";
import SmurfList from "./components/SmurfList";
import Header from "./components/Header";

// import { fetchSmurfs, fetchStart, fetchSuccess, fetchFail } from "./actions";
import { fetchSmurfs } from "./actions";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.fetchSmurfs();
  }

  render() {
    return (
      <div className="App">
        <Header />

        <main>
          <SmurfList />
          <AddForm />
        </main>
      </div>
    );
  }
}

const mapStateToProps = ({ data = {} }) => ({
  data,
});

export default connect(mapStateToProps, { fetchSmurfs })(App);

// const mapActionsToProps = () => {
//   return {
//     // fetchSmurfs: fetchSmurfs,
//     fetchStart: fetchStart,
//     fetchSuccess: fetchSuccess,
//     fetchFail: fetchFail,
//   };
// };

// export default connect(mapActionsToProps, {
//   // fetchSmurfs,
//   fetchStart,
//   fetchSuccess,
//   fetchFail,
// })(App);

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component mounts.
