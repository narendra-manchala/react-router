import React from 'react'
import Header from './Header'
import Main from './Main'
import Timer from 'react.timer'

const App = () => (
  <div>
    <Header />
    <Timer countDown startTime={30}/>
    <Main />
  </div>
)

export default App
