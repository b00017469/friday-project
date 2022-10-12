import React, { ReactElement } from 'react';

import './App.css';
import { TestComponent } from './components';

const App = (): ReactElement => (
  <div className="App">
    <h1>Friday project</h1>
    <h3>
      {' '}
      Test
      <TestComponent />
    </h3>
  </div>
);

export default App;
