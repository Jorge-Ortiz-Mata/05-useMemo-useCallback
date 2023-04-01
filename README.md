# 05 - React and TypeScript App.

## React.memo(MyComponent).
****

When updating a state in a parent component, all of their children will be re-evaluated as well. React.memo allows us to not re-evaluate a child component if a props didn't change.

### Child Component.

```typescript
const Demo = ({initializeParent}:DemoProps) => {

  return (
    <div>
      ...
    </div>
  )
}

export default React.memo(Demo);
```

**Notes:**

It works with booleans, strings and numbers.
It doesn't work with arrays, objects or functions.

### Button Component.

```typescript
const Button = ({initializeParent}:DemoProps) => {

  const handleClick = ():void => {
    console.log('Do some changes...');
  }

  return (
    <button onClick={handleClick}>Click me</button>
  )
}

export default React.memo(Button);
```

## useCallback Hook.
****

useCallback Hook allows us to store a function across multiple components. This means that it points to same registry, so that prevents the re-evaluation of any component using arrays, objects or functions.

### Button.tsx

```typescript
import React from 'react';

interface ButtonProps {
  onPress: () => void
}

const Button = ({onPress}:ButtonProps) => {

  console.log('OK')

  return(
    <button onClick={onPress}>Click me</button>
  )
}

export default React.memo(Button);
```

### App.js

```typescript
import { useState, useCallback } from 'react';
import Demo from './components/Demo/Demo';
import Button from './components/Button';

function App() {
  const [initialize, setInitialize] = useState(false);

  const handleClick = useCallback(() => {
    setInitialize(prevState => !prevState);
  }, []);

  console.log('App Component');

  return (
    <div>
      <h1>Hello World</h1>
      <Button onPress={handleClick} />
      <Demo initializeParent={initialize} />
    </div>
  );
}

export default App;
```
