import React from 'react';
import './App.css';
import DrumPad from './Components/DrumPad';

const drums = [
  {
    id: "Q",
    text: "808bd",
    src: 'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Kicks/16[kb]808bd.aif.mp3'
  },
  {
    id: "W",
    text: "808bd3",
    src: "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Kicks/152[kb]808bd3.aif.mp3"
  },
  {
    id: "E",
    text: "808bd2",
    src: "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Kicks/15[kb]808bd2.aif.mp3"
  },
  {
    id: "A",
    text: "808distbd",
    src: "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Kicks/152[kb]808distbd.aif.mp3"
  },
  {
    id: "S",
    text: "808sub",
    src: "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Kicks/67[kb]808sub.aif.mp3"
  },
  {
    id: "D",
    text: "absolute insane kikdrum",
    src: "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Kicks/69[kb]absolutely-insane-kikdrum.wav.mp3"
  },
  {
    id: "Z",
    text: "absurdistan kick",
    src: "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Kicks/34[kb]absurdistan-kick.wav.mp3"
  },
  {
    id: "X",
    text: "backwards in crash",
    src: "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Gongs%20and%20Super%20Crashes/61[kb]backwards-in-crash.aif.mp3"
  },
  {
    id: "C",
    text: "cymbals",
    src: "https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Cymbals/100[kb]curiouscym1.aif.mp3"
  }
]

class App extends React.Component {
  constructor(props) {
    super(props);
    this.references = {};
    this.state = { display: ''};
    this.keyPressRef = React.createRef();
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.getOrCreateRef = this.getOrCreateRef.bind(this);
    this.setDisplay = this.setDisplay.bind(this);
  };

  componentDidMount(){
    this.keyPressRef.current.focus();
  }

  handleClick = (id) => {
    // console.log(this.references[id].current);
    this.references[id].current.play();
    this.references[id].current.currentTime = 0;
    this.setDisplay(id);
  };

  handleKeyDown = (e) => {
    if(this.references.hasOwnProperty(e.key.toUpperCase())){
    this.references[e.key.toUpperCase()].current.play();
    this.references[e.key.toUpperCase()].current.currentTime = 0;
  }
  this.setDisplay(e.key.toUpperCase());
  };

  setDisplay(id){
    const display = drums.filter(elem=>elem.id===id)[0].text;
    console.log(display);
    //this.setState({display});
  };

   getOrCreateRef(id){
    if(!this.references.hasOwnProperty(id)){
      return this.references[id] = React.createRef();
    }
   };

  render() {
    return (
      <div 
      id="drum-machine"
        ref={this.keyPressRef}
        onKeyDown={this.handleKeyDown}
        tabIndex="0"
      >
        <div id="display">
          <p>{this.state.display}</p>
        </div>
        <div id="drum-pads">
          {drums.map((elem, i) =>
            (<DrumPad
              name={elem.text}
              ref={this.getOrCreateRef(elem.id)}
              clickHandler={this.handleClick}
              id={elem.id}
            src={elem.src}
            key={i}
          />)
        )}
        </div>
      </div>
    );
  };
};

export default App;
