import React from 'react'
import Header from './Header'
import Main from './Main'
import Timer from 'react.timer'
import { RadioGroup, RadioButton, ReversedRadioButton } from 'react-radio-buttons'
// import YouTube from 'youtube-react';

const App = () => (
  <div>
    <Header />
    <Timer countDown startTime={30}/>
    <Main />
    <iframe width="560" height="315" src="https://www.youtube.com/embed/NfcgA1axPLo" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    <RadioGroup pointColor="green" horizontal>
      <RadioButton pointColor="green" value="apple">
        Apple
      </RadioButton>
      <RadioButton pointColor="green" value="orange">
        Orange
      </RadioButton>
      <RadioButton pointColor="green" value="melon">
        Melon
      </RadioButton>
      <ReversedRadioButton  pointColor="green" value="melon">
        Melon
      </ReversedRadioButton>
    </RadioGroup>
  </div>
)

export default App
