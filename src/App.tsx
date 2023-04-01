import { useState, useCallback } from 'react';
import './App.css';
import Demo from './components/Demo/Demo';
import Button from './components/Button';

function App() {
  const [initialize, setInitialize] = useState(false);

  const handleClick = useCallback(() => {
    setInitialize(prevState => !prevState);
  }, []);

  console.log('App Component');

  return (
    <div className="App">
      <h1>Hello World</h1>
      <Button onPress={handleClick} />
      <Demo initializeParent={initialize} />
    </div>
  );
}

export default App;
