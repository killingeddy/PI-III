import Object from '@/components/object';
import React from 'react';

export default function Home() {

  const [secondPosition, setSecondPosition] = React.useState('-1, 0, -1');

  return (
    <div className="scrollbar-hide relative bg-sky-950 container">
        <Object model={'diver'} objPosition={secondPosition} color={'0xffffff'} />
    </div>
  )
}
