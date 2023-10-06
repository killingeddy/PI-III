import { TypeAnimation } from 'react-type-animation';
import { HiChevronDoubleUp } from 'react-icons/hi';
import { Fade } from 'react-awesome-reveal';
import Object from "../object";
import React from 'react';

export default function Intro({ goUp }) {

    const text = [
        'Olá! Eu sou Aqua, um peixe-anjo-imperador e a mascote aqui do Planeta Aqua. Estou muito feliz em conhecê-lo! Você está pronto para explorar o oceano comigo?',
        'Como você já percebeu, aqui no Planeta Aqua, o oceano é um lugar verdadeiramente especial. É repleto de vida e abriga muitas criaturas incríveis. Assim como o oceano, o Planeta Aqua pode ser vasto e misterioso.',
        'Para evitar que você se sinta perdido, vou fazer um tour pelo Planeta Aqua e mostrar como o oceano é imenso e repleto de vida. Vamos começar a nossa aventura?'
    ]

    const [finished, setFinished] = React.useState(0)
    const [go, setGo] = React.useState(0)

    return (
        <div className="container h-screen relative">
            <Object model={'angelfish'} objPosition={'0, 0, 1'} color={'0xFFFFFFF'} timeScale={3} />
            <div className="absolute w-1/4 h-4/5 z-50 right-10 rounded-3xl top-1/2 transform -translate-y-1/2">
                {
                    go === 0 &&
                    (
                        <div className="w-full h-full flex flex-col justify-center items-center">
                            <TypeAnimation
                                cursor={false}
                                sequence={[
                                    text[0],
                                    () => setFinished(1)
                                ]}
                                className="text-center text-2xl text-dorange font-body-bold uppercase m-0"
                                repeat={false}
                                omitDeletionAnimation={true}
                                speed={50}
                            />
                            {
                                finished === 1 &&
                                <Fade triggerOnce={true} duration={1000}>
                                    <button onClick={() => setGo(1)} className="bg-dorange text-white font-body-bold uppercase text-xl px-8 py-2 rounded-full mt-8 cursor-pointer z-50">Continuar</button>
                                </Fade>
                            }
                        </div>
                    )
                }
                {
                    go === 1 &&
                    (
                        <div className="w-full h-full flex flex-col justify-center items-center">
                            <TypeAnimation
                                cursor={false}
                                sequence={[
                                    text[1],
                                    () => setFinished(2)
                                ]}
                                className="text-center text-2xl text-dorange font-body-bold uppercase m-0"
                                repeat={false}
                                omitDeletionAnimation={true}
                                speed={50}
                            />
                            {
                                finished === 2 &&
                                <Fade triggerOnce={true} duration={1000}>
                                    <button onClick={() => setGo(2)} className="bg-dorange text-white font-body-bold uppercase text-xl px-8 py-2 rounded-full mt-8 cursor-pointer z-50">Continuar</button>
                                </Fade>
                            }
                        </div>
                    )
                }
                {
                    go === 2 &&
                    (
                        <div className="w-full h-full flex flex-col justify-center items-center">
                            <TypeAnimation
                                cursor={false}
                                sequence={[
                                    text[2],
                                    () => setFinished(3)
                                ]}
                                className="text-center text-2xl text-dorange font-body-bold uppercase m-0"
                                repeat={false}
                                omitDeletionAnimation={true}
                                speed={50}
                            />
                            {
                                finished === 3 &&
                                <Fade triggerOnce={true} duration={1000}>
                                    <button onClick={() => setGo(3)} className="bg-white text-white font-body-bold uppercase text-xl p-20 rounded-full mt-8 cursor-pointer z-50 border-10 border-dblue absolute"></button>
                                </Fade>
                            }
                        </div>
                    )
                }
            </div>
            {
                goUp &&
                <button
                    className="absolute top-10 right-10 w-10 h-10 border-2 border-dorange rounded-lg uppercase cursor-pointer z-50 justify-center flex items-center"
                    onClick={goUp}
                >
                    <HiChevronDoubleUp className="text-dorange text-3xl" />
                </button>
            }
        </div>
    )
}