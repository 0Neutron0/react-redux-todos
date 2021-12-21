import React from 'react';
import {Provider} from 'react-redux';
import store from './redux/store';
import TodoThemeContainer from './components/TodoTheme/TodoThemeContainer';
import TodoWindowContainer from './components/TodoWindow/TodoWindowContainer';
import './App.css';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TodoThemeContainer />
        <TodoWindowContainer />
      </div>
    </Provider>
  );
}

export default App;
