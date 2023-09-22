import AudioPlayer from '@/components/audioPlayer';
import { FaHeadphonesAlt } from 'react-icons/fa';
import Object from '@/components/object';
import { motion, AnimatePresence } from "framer-motion";
import React from 'react';

export default function Home() {

  const [secondPosition, setSecondPosition] = React.useState('-1, 0, -1');

  return (
    <div className="scrollbar-hide relative bg-sky-950 container mx-auto h-screen overflow-hidden">
      <div className="absolute top-20 left-1/3">
        <Object model={'diver'} objPosition={secondPosition} color={'0xFFD700'} />
      </div>
      <AudioPlayer audio={'/underwater.mp3'} autoPlay={true} loop={true} />
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 3 }}
        >
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 8 }}
          >
            <div className={`absolute bottom-20 left-1/2 transform -translate-x-1/2 justify-center flex-col items-center text-center flex`}>
              <FaHeadphonesAlt color='#ffffff' size={40} />
              <p className="text-white text-1xl">Esse site usa áudio</p>
              <p className="text-white text-1xl">Use fones de ouvido para melhor experiência</p>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
