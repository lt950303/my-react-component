import React from 'react';
import Button from './components/button/button';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        Learn React
      </header>
      <div>组件测试</div>
      <Button>default</Button>
      <Button type='primary'>primary</Button>
      <Button type='danger'>danger</Button>
      <Button type='link' href="https://ant.design/components/button-cn">link</Button>
    </div>
  );
}

export default App;
