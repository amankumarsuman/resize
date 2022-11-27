import React from "react";
import { render } from "react-dom";
import { Rnd } from "react-rnd";

const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "solid 1px #ddd",
  background: "#f0f0f0"
};

export class ResizeClassComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      width: 200,
      height: 200,
      x: 10,
      y: 10
    };
    this.state2 = {
      width: 500,
      height: 200,
      x: 50,
      y: 50
    };
  }

  render() {
    return (
      <div>
<div>

      <Rnd
        style={style}
        size={{ width: this.state.width, height: this.state.height }}
        position={{ x: this.state.x, y: this.state.y }}
        onDragStop={(e, d) => {
          this.setState({ x: d.x, y: d.y });
        }}
        onResizeStop={(e, direction, ref, delta, position) => {
          this.setState({
            width: ref.style.width,
            height: ref.style.height,
            ...position
          });
        }}
      >
        rnd
      </Rnd>
</div>
      <div>
      <Rnd
        style={style}
        size={{ width: this.state2.width, height: this.state2.height }}
        position={{ x: this.state2.x, y: this.state2.y }}
        onDragStop={(e, d) => {
          this.setState2({ x: d.x, y: d.y });
        }}
        onResizeStop={(e, direction, ref, delta, position) => {
          this.setState2({
            width: ref.style.width,
            height: ref.style.height,
            ...position
          });
        }}
      >
        Rnd
      </Rnd>
      </div>
      </div>
    );
  }
}


