import Object from '@/components/object';
import React from 'react';

export default function Home() {

  const [firstPosition, setFirstPosition] = React.useState('15, 3, 0');
  const [secondPosition, setSecondPosition] = React.useState('0, 0, 3');

  return (
    <div className="scrollbar-hide relative w-screen h-screen">
      <div className="absolute bottom-0 right-0">
        {/* <Object model={'whale'} objPosition={firstPosition} color={'0x61a5c2'} wPerspective={window.innerWidth} hPerspective={window.innerHeight} /> */}
      </div>
      <div className="absolute top-0 left-0">
        <Object model={'octopus'} objPosition={secondPosition} color={'0xffffff'} />
      </div>
    </div>
  )
}
