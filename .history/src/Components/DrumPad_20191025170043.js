import React from "react";

const DrumPad = React.forwardRef((props, ref) => (
  <div
    className="drum-pad"
    id={props.id}
    onClick={() => props.clickHandler(props.id)}
    text={props.name}
  >
    {props.id}
    <audio ref={ref} src={props.src} className="clip" id={props.id}></audio>
  </div>
));

export default DrumPad;
