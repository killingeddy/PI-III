import ObjectRotation from '@/components/object/rotationObject';
import InitialModal from '@/components/modal/inititalModal';
import AudioPlayer from '@/components/audioPlayer';
import Object from '@/components/object';
import Level from '@/components/level';
import React from 'react';

export default function Home() {

  const [isPlaying, setIsPlaying] = React.useState(false);
  const [modalIsOpen, setIsOpen] = React.useState(false);

  return (
    <div className="scrollbar-hide relative containe h-screen bg-sky-950 overflow-x-hidden">
      <AudioPlayer audio={'/underwater.mp3'} autoPlay={isPlaying} loop={true} />
      <div className="container mx-auto h-screen flex relative">
        <div className="absolute top-0 left-16 z-0 w-full h-full">
          <h1 className="text-white text-4xl font-bold mt-20 font-title">Bem-vindos a bordo do Projeto Planeta Aqua!</h1>
          <p className='text-white text-1xl w-2/4 mt-5 font-body'>
            Preparem-se para uma incrível jornada pelo vasto e misterioso mundo dos oceanos. Aqui, vamos explorar as profundezas, conhecer criaturas extraordinárias e descobrir o quão vital o mar é para nossa vida na Terra.
          </p>
          <p className='text-white text-1xl w-2/4 mt-5 font-body'>
            Navegaremos pelas águas azuis, encontraremos baleias sorridentes, peixes exóticos e corais coloridos. A cada mergulho, uma nova surpresa nos espera!
          </p>
          <p className='text-white text-1xl w-2/4 mt-5 font-body'>
            Juntos, vamos aprender sobre conservação, proteção dos oceanos e como podemos fazer a diferença. É hora de se apaixonar pelo Planeta Aqua e fazer dele um lugar mais seguro para todos os seus habitantes.
          </p>
          <p className='text-white text-1xl w-2/4 mt-5 font-body'>
            Então, coloquem seus trajes de mergulho (ou imaginários) e embarquem nesta aventura aquática emocionante. O oceano nos espera com os braços abertos.</p>
        </div>
        <div className="absolute top-0 left-96">
          <ObjectRotation model={'diver'} objPosition={'-1, 0, -1'} color={'0xFFD700'} hPerspective={850} wPerspective={1600} />
        </div>
      </div>
      <Level color={'0xFFFFFF'} model={'dolphin'} objPosition={'20, 5, 15'} timeScale={1} title={'Superficie:'} subtitle={'Onde a festa começa!'} content={'A superfície do oceano é como a pista de dança de uma grande festa no mar. Aqui, as gaivotas fazem um show aéreo, as tartarugas nadam com calma e os golfinhos fazem acrobacias emocionantes. Os peixes voadores até mesmo "voam" fora da água! Por que eles adoram ficar aqui? É onde podem pegar o sol e pegar comida fácil que flutua na água.'} />
      <Level color={'0xFFFFFF'} model={'hammer'} objPosition={'2, 0, 3'} timeScale={1} title={'Camada Epipelagica:'} subtitle={'O Playground Ensolarado'} content={'Aqui, na camada epipelágica, a luz do sol ainda brilha forte. É como um playground ensolarado para peixes como sardinhas e atuns. Tubarões martelo nadam com estilo, enquanto as águas-vivas flutuam elegantemente. Os albatrozes, como os DJs da festa, planam no ar. Tudo acontece aqui porque a comida é abundante e a luz do sol torna o ambiente perfeito para a diversão.'} />
      <Level color={'0xFFFFFF'} model={'squid'} objPosition={'20, 5, 5'} timeScale={2} title={'Camada Mesopelagica:'} subtitle={'O Mistério Profundo'} content={'Agora, descemos um pouco mais, onde o sol começa a desaparecer. A camada mesopelágica é como a parte misteriosa da festa. Lanternfishes brilham no escuro, enquanto peixes de boca negra caçam na escuridão. Lulas gigantes se escondem nas sombras, e os tubarões de profundidade têm dentes afiados para a escuridão total. Eles adoram essa camada porque podem pegar presas facilmente, sem muitos olhos curiosos.'} />
      <Level color={'0xFFFFFF'} model={'vampiresquid'} objPosition={'60, 20, 1'} timeScale={1} title={'Camada Batipelagica:'} subtitle={'O Reino da Escuridão'} content={'Aqui, mergulhamos mais fundo no oceano, e é como entrar em uma festa à meia-noite. A camada batipelágica é escura e misteriosa. Os peixes abissais são os verdadeiros reis daqui, com suas luzes piscantes para atrair presas. Quimeras se escondem nas sombras, e enguias de pelágio nadam com suas luzes próprias. É um mundo de monstros marinhos e criaturas estranhas.'} />
      <Level color={'0x7e8283'} model={'spermwhale'} objPosition={'60, 20, 1'} timeScale={1} title={'Zona Abissal:'} subtitle={'O Lugar mais Profundo'} content={'Agora, estamos nas profundezas escuras e frias do oceano. A zona abissal é como a parte mais estranha da festa, onde os convidados são realmente únicos. Peixes abissais de águas profundas têm dentes assustadores, e vermes tubulares são como alienígenas marinhos. Isópodes gigantes são como os gigantes da festa e holotúrias limpam tudo.'} />
      <InitialModal open={modalIsOpen} isOpen={setIsOpen} playing={isPlaying} isPlaying={setIsPlaying} />
    </div>
  )
}