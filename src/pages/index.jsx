import { motion, AnimatePresence } from "framer-motion";
import AudioPlayer from '@/components/audioPlayer';
import { FaHeadphonesAlt } from 'react-icons/fa';
import Object from '@/components/object';
import React from 'react';
import { Modal } from "@mui/material";

export default function Home() {

  const [isPlaying, setIsPlaying] = React.useState(false);
  const [modalIsOpen, setIsOpen] = React.useState(true);

  const handleAudio = () => {
    setIsPlaying(true);
    setIsOpen(false);
  }

  return (
    <div className="scrollbar-hide relative bg-sky-950 container mx-auto h-screen overflow-hidden">
      <div className="absolute top-20 left-1/3">
        <Object model={'diver'} objPosition={'-1, 0, -1'} color={'0xFFD700'} />
      </div>
      <AudioPlayer audio={'/underwater.mp3'} autoPlay={isPlaying} loop={true} />
      <Modal
        open={modalIsOpen}
        onClose={() => setIsOpen(false)}
        className="h-screen w-screen justify-center items-center flex bg-sky-400 bg-opacity-10 backdrop-filter backdrop-blur-md bg-gifbg bg-contain bg-repeat"
        hideBackdrop={true}
        disableEscapeKeyDown={true}
      >
        <div className="p-10 bg-sky-950 flex justify-between items-center flex-col relative border-0 rounded-3xl outline-none focus:outline-none">
          <div className={`justify-center flex-col items-center text-center flex`}>
            <FaHeadphonesAlt color='#ffffff' size={40} />
            <p className="text-white text-1xl">Esse site usa áudio</p>
            <p className="text-white text-1xl">Use fones de ouvido para melhor experiência</p>
          </div>
          <button onClick={() => handleAudio()} className="justify-center items-center text-center flex bg-sky-400 hover:bg-sky-500 text-white font-bold py-2 px-4 rounded-3xl">
            <p className="text-white text-1xl">Clique aqui para aventurar-se</p>
          </button>
        </div>
      </Modal>
    </div>
  )
}
