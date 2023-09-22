import ReactAudioPlayer from 'react-audio-player';
import { FaHeadphonesAlt } from 'react-icons/fa';
import Object from '@/components/object';
import React from 'react';

export default function Home() {

  const [secondPosition, setSecondPosition] = React.useState('-1, 0, -1');

  const [instructions, setInstructions] = React.useState('animate-fade');

  React.useEffect(() => {
    // setTimeout(() => {
    //   setInstructions('animate-fadeout');
    // }, 3500);
  }, []);

  return (
    <div className="scrollbar-hide relative bg-sky-950 container mx-auto h-screen overflow-hidden">
      <div className="absolute top-20 left-1/3">
        <Object model={'diver'} objPosition={secondPosition} color={'0xFFFF00'} />
      </div>
      <ReactAudioPlayer
        src="/underwater.mp3"
        autoPlay={true}
        loop
        volume={1}
      />
      <div className={`absolute bottom-20 left-1/2 transform -translate-x-1/2 justify-center flex-col items-center ${instructions} flex`}>
        <FaHeadphonesAlt color='#ffffff95' size={40} />
        <p className="text-white text-1xl opacity-80">Esse site usa áudio</p>
        <p className="text-white text-1xl opacity-80">Use fones de ouvido para melhor experiência</p>
      </div>
    </div>
  )
}
