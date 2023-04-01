import React from 'react';

interface ButtonProps {
  onPress: () => void,
  title: string
}

const Button = ({onPress, title}:ButtonProps) => {

  console.log(`Button: ${title}`);

  return(
    <button onClick={onPress}>{title}</button>
  )
}

export default React.memo(Button);
