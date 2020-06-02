import React, { Component } from "react";
import ShowProgress from "./showProgress";
import HttpService from "./../services/httpService";
import axios from "axios";

const apiEndPoint = "http://pb-api.herokuapp.com/bars";

class ProgressBar extends Component {
  state = {
    bars: [],
    buttons: [],
    limit: 0,
    selectedBar: 0,
  };

  async componentDidMount() {
    //const data = await HttpService.getBars();
    const { data } = await axios.get(apiEndPoint);

    this.setState({
      bars: data.bars,
      buttons: data.buttons,
      limit: data.limit,
    });
  }

  render() {
    const limit = this.state.limit;
    return (
      <div className="card text-center mx-auto col-lg-9 col-md-6 col-sm-3 my-3">
        <div className="card-header">Progress Bars Demo</div>
        <div className="card-body">
          {this.state.bars.map((bar, index) => {
            //   const calculatedValue = parseInt((bar * 100) / limit);
            return (
              <ShowProgress
                bar={bar}
                limit={limit}
                index={index}
                displayProgressBar={this.displayProgressBar}
              />
            );
          })}

          <div className="row mx-auto my-3 mt-4">
            <div className="col mx-auto">
              <select id="selectedBar" onChange={this.handleSelection}>
                {this.state.bars.map((bar, index) => (
                  <option value={index} key={index}>
                    ProgressBar {index + 1}
                  </option>
                ))}
              </select>
            </div>
            <div className="col mx-auto">
              {this.state.buttons.map((button) => (
                <button
                  style={{ marginLeft: "10px" }}
                  className="btn-primary"
                  onClick={() => this.handleButtonClick(button)}
                  key={button}
                >
                  {button}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  handleButtonClick = (buttonVal) => {
    const limit = this.state.limit;
    const selectedBar = this.state.selectedBar;
    let updatedBars = [];
    const bars = [...this.state.bars];
    bars.map((bar, index) => {
      if (selectedBar == index) {
        const addOnVal = bar + buttonVal;
        if (addOnVal > 0 && addOnVal < limit) {
          bar = addOnVal;
        } else if (addOnVal < 0) {
          bar = 0;
        } else if (addOnVal > limit) {
          bar = limit;
        }
      }
      updatedBars.push(bar);
    });
    this.setState({ bars: updatedBars });
  };

  displayProgressBar = (bar) => {
    const progBar = bar <= 100 ? "progress-bar" : "progress-bar bg-danger";
    console.log("progBar", progBar);
    return progBar;
  };

  handleSelection = (selectionVal) => {
    this.setState({ selectedBar: selectionVal.target.value });
  };
}

export default ProgressBar;
