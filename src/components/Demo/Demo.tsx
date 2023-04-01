import React from 'react';

interface DemoProps {
  initializeParent: boolean
}

const Demo = ({initializeParent}:DemoProps) => {

  console.log('Changing text...');


  return (
    <div>
      {
        initializeParent
        ? 'It is true idiot'
        : 'It is false asshole'
      }
    </div>
  )
}

export default React.memo(Demo);
