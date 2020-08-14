import React, { Component } from "react";
import Key from "./Key";

export default class Piano extends Component {
  constructor(props) {
    super(props);
    this.state = {
      whiteKeys: ["C", "D", "E", "F", "G", "A", "B"],
      blackKeys: ["C#", "D#", "E#", "F#", "G#", "A#"],
    };
  }
  componentDidMount() {
    // this.state.whiteKeys.map((item) => console.log(item));
    // let whiteKeys = document.querySelectorAll(".white"),
    //   blackKeys = document.querySelectorAll(".black");
    // [...whiteKeys].map(
    //   (item, idx) => (item.innerHTML = this.state.whiteKeys[idx])
    // );
    // [...blackKeys].map(
    //   (item, idx) => (item.innerHTML = this.state.blackKeys[idx])
    // );
    // console.log(whiteKeys);
  }
  thisKey = (e) => {
    console.log(e.currentTarget);
  };

  render() {
    return (
      <div>
        <h1>PIANO</h1>
        <div className="white-keys">
          {this.state.whiteKeys.map((keys) => (
            <Key keyPress={this.thisKey} keyColor="white">
              {keys}
            </Key>
          ))}
          <div className="black-keys">
            {this.state.blackKeys.map((keys) => (
              <Key keyPress={this.thisKey} keyColor="black">
                {keys}
              </Key>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
