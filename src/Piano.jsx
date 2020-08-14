import React, { Component } from "react";

export default class Piano extends Component {
  constructor(props) {
    super(props);
    this.state = {
      whiteKeys: ["C", "D", "E", "F", "G", "A", "B"],
      blackKeys: ["C#", "D#", "F#", "G#", "A#"],
    };
  }
  componentDidMount() {
    this.state.whiteKeys.map((item) => console.log(item));
    let whiteKeys = document.querySelectorAll(".white"),
      blackKeys = document.querySelectorAll(".black");
    [...whiteKeys].map(
      (item, idx) => (item.innerHTML = this.state.whiteKeys[idx])
    );
    [...blackKeys].map(
      (item, idx) => (item.innerHTML = this.state.blackKeys[idx])
    );
    console.log(whiteKeys);
  }
  thisKey = (e) => {
    console.log(e.currentTarget);
  };

  render() {
    return (
      <div>
        <h1>PIANO</h1>
        <div className="white-keys">
          <span onClick={this.thisKey} className="white"></span>
          <span onClick={this.thisKey} className="white"></span>
          <span onClick={this.thisKey} className="white"></span>
          <span onClick={this.thisKey} className="white"></span>
          <span onClick={this.thisKey} className="white"></span>
          <span onClick={this.thisKey} className="white"></span>
          <span onClick={this.thisKey} className="white"></span>
          <div className="black-keys">
            <span onClick={this.thisKey} className="black"></span>
            <span onClick={this.thisKey} className="black"></span>
            <span onClick={this.thisKey} className="empty"></span>
            <span onClick={this.thisKey} className="black"></span>
            <span onClick={this.thisKey} className="black"></span>
            <span onClick={this.thisKey} className="black"></span>
          </div>
        </div>
      </div>
    );
  }
}
