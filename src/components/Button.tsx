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
