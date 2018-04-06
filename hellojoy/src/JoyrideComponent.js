import React, { Component } from 'react';
import Joyride from 'react-joyride';

export default class JoyrideComponent extends Component {

  constructor()
  {
    super();

    this.state = {
      joyrideOverlay: true,
      joyrideType: 'continuous',
      isReady: false,
      isRunning: false,
      stepIndex: 0,
      steps: [],
      selector: '',
    };

  }

  componentDidMount()
  {
    this.createStep('1ere aide', 'Ceci est le titre !', '.App-title', 'hover', 'bottom');
    this.createStep('2eme aide', 'Ceci est le titre1 !', '.App-hello1', 'hover', 'bottom');
    this.createStep('3eme aide', 'Ceci est le titre2 !', '.App-hello2', 'hover', 'bottom');
    this.createStep('4eme aide', 'Ceci est le titre3 !', '.App-hello3', 'hover', 'bottom');
    this.createStep('5eme aide', 'Ceci est le titre4 !', '.App-hello4', 'hover', 'bottom');
  }

  addStep(newSteps)
  {
    this.setState(currentState => {
      currentState.steps = currentState.steps.concat(newSteps);
      return currentState;
    })
  }

  createStep(title, text, selector, type, position, style)
  {
    let step = {
      title: title,
      text: text,
      selector: selector,
      type: type,
      position: position,
      isFixed: true,
      style: style    
    }    
    this.addStep(step);
  }

  render()
  {
    return (
    <Joyride
    ref="joyride"
    steps={this.state.steps}
    run={true} // or some other boolean for when you want to start it
    debug={false}
    autoStart={true}
    showBackButton={true}
    showSkipButton={true}
    showStepsProgress={true}
    type={this.state.joyrideType}
    callback={this.callback}
    />);
  }
}