import ObjectRotation from '@/components/object/rotationObject';
import InitialModal from '@/components/modal/inititalModal';
import AudioPlayer from '@/components/audioPlayer';
import Intro from '@/components/intro';
import Level from '@/components/level';
import React from 'react';

export default function Home() {

  const [isPlaying, setIsPlaying] = React.useState(false);
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const first = React.useRef(null);
  const second = React.useRef(null);
  const third = React.useRef(null);
  const fourth = React.useRef(null);
  const fifth = React.useRef(null);
  const sixth = React.useRef(null);

  const handleClick = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="scrollbar-hide relative containe h-screen bg-dblue overflow-hidden">
      <AudioPlayer audio={'/underwater.mp3'} autoPlay={isPlaying} loop={true} />
      <div ref={sixth}>
        <Intro />
      </div>
      <div className="container mx-auto h-screen flex relative overflow-hidden">
        <div className="absolute top-1/3 left-24 justify-center text-center">
          <h1 className="text-9xl text-dorange font-title m-0">Planeta Aqua</h1>
          <h1 className="text-3xl text-neutral font-body-bold uppercase m-0">Desvendando o oceano</h1>
          <button onClick={() => handleClick(first)} className="bg-dorange text-white font-body-bold uppercase text-xl px-8 py-2 rounded-full mt-8 cursor-pointer z-50">Explorar</button>
        </div>
        <div className="absolute left-1/3 bottom-0">
        <ObjectRotation model={'diver'} objPosition={'-1, 0, -1'} color={'0xFFD700'} />
        </div>
      </div>
      <div ref={first}>
        <Level color={'0xFFFFFF'} model={'dolphin'} objPosition={'20, 5, 15'} timeScale={1} title={'Superficie'} subtitle={'Onde a festa começa'} content={'A superfície do oceano é como a pista de dança de uma grande festa no mar. Aqui, as gaivotas fazem um show aéreo, as tartarugas nadam com calma e os golfinhos fazem acrobacias emocionantes. Os peixes voadores até mesmo "voam" fora da água! Por que eles adoram ficar aqui? É onde podem pegar o sol e pegar comida fácil que flutua na água.'} onClick={() => handleClick(second)} />
      </div>
      <div ref={second}>
        <Level color={'0xFFFFFF'} model={'hammer'} objPosition={'2, 0, 3'} timeScale={1} title={'Camada Epipelagica'} subtitle={'O Playground Ensolarado'} content={'Aqui, na camada epipelágica, a luz do sol ainda brilha forte. É como um playground ensolarado para peixes como sardinhas e atuns. Tubarões martelo nadam com estilo, enquanto as águas-vivas flutuam elegantemente. Os albatrozes, como os DJs da festa, planam no ar. Tudo acontece aqui porque a comida é abundante e a luz do sol torna o ambiente perfeito para a diversão.'} onClick={() => handleClick(third)} />
      </div>
      <div ref={third}>
        <Level color={'0xFFFFFF'} model={'squid'} objPosition={'20, 5, 5'} timeScale={2} title={'Camada Mesopelagica'} subtitle={'O Mistério Profundo'} content={'Agora, descemos um pouco mais, onde o sol começa a desaparecer. A camada mesopelágica é como a parte misteriosa da festa. Lanternfishes brilham no escuro, enquanto peixes de boca negra caçam na escuridão. Lulas gigantes se escondem nas sombras, e os tubarões de profundidade têm dentes afiados para a escuridão total. Eles adoram essa camada porque podem pegar presas facilmente, sem muitos olhos curiosos.'} onClick={() => handleClick(fourth)} />
      </div>
      <div ref={fourth}>
        <Level color={'0xFFFFFF'} model={'vampiresquid'} objPosition={'60, 20, 1'} timeScale={1} title={'Camada Batipelagica'} subtitle={'O Reino da Escuridão'} content={'Aqui, mergulhamos mais fundo no oceano, e é como entrar em uma festa à meia-noite. A camada batipelágica é escura e misteriosa. Os peixes abissais são os verdadeiros reis daqui, com suas luzes piscantes para atrair presas. Quimeras se escondem nas sombras, e enguias de pelágio nadam com suas luzes próprias. É um mundo de monstros marinhos e criaturas estranhas.'} onClick={() => handleClick(fifth)} />
      </div>
      <div ref={fifth}>
        <Level color={'0x7e8283'} model={'spermwhale'} objPosition={'60, 20, 1'} timeScale={1} title={'Zona Abissal'} subtitle={'O Lugar mais Profundo'} content={'Agora, estamos nas profundezas escuras e frias do oceano. A zona abissal é como a parte mais estranha da festa, onde os convidados são realmente únicos. Peixes abissais de águas profundas têm dentes assustadores, e vermes tubulares são como alienígenas marinhos. Isópodes gigantes são como os gigantes da festa e holotúrias limpam tudo.'} onClick={() => handleClick(sixth)} />
      </div>
      <InitialModal open={modalIsOpen} isOpen={setIsOpen} playing={isPlaying} isPlaying={setIsPlaying} />
    </div>
  )
}