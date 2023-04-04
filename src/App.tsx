import { useState, useCallback } from 'react';
import './App.css';
import Demo from './components/Demo';
import Button from './components/Button';
import Numbers from './components/Numbers';

function App() {
  const [initialize, setInitialize] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleClick = useCallback(() => {
    setInitialize(prevState => !prevState);
  }, [isActive]);

  const handleIsActive = ():void => {
    setIsActive(prevState => !prevState);
  }

  return (
    <div className="App">
      <h1>Hello World</h1>
      <Button onPress={handleIsActive} title='Re-evaluate function' />
      <Button onPress={handleClick} title='Show Text Button' />
      <Demo initializeParent={initialize} />
      <hr />
      <h2>useMemo Hook</h2>
      <Numbers title='My name' numbers={[1, 5, 8, 9, 14, 6, 17, 20]} />
    </div>
  );
}

export default App;
