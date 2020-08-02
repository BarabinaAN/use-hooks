import React from 'react'
import Article from './article'
import Switcher from './switcher'
import Counter from './counter'
import { MyContext } from './context'

const App = () => {
  return (
    <div>
      <h1>Hooks</h1>
      <MyContext.Provider value='this message from context'>
        <Article />
        <Switcher />
        <Counter />
      </MyContext.Provider>
    </div>
  );
}

export default App;