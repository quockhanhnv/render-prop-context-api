import React from 'react';
import './App.css';
import Counter from './components/Counter';
import NumberProvider from './components/NumberProvider'; 
import NumberContext from './contexts/NumberContext';

function App() {
  return (
    <NumberProvider>
      <div className="App">
          <NumberContext.Consumer>
            {({number, updateNumber}) => <div>
                                          <h2>{ number }</h2>
                                          <button onClick={updateNumber}>Random Number</button>
                                        </div>}
          </NumberContext.Consumer>
      
        {/* version 1 */}
        {/* <Counter render={value => <div>{value}</div>} /> */}

        {/* version 2 */} 
        {/* <Counter>
          { value => <div>{value}</div> }
        </Counter> */}


        <Counter>
          { state => <div>{state.count}</div> }
        </Counter>
        {/* hoặc lấy count từ state bằng destructuring */}
        <Counter>
          { ({ count }) => <div>{count}</div> }
        </Counter>
      </div>
    </NumberProvider>
  );
}

export default App;
