import { TypeAnimation } from 'react-type-animation';
import { HiChevronDoubleUp } from 'react-icons/hi';
import { Fade } from 'react-awesome-reveal';
import Object from "../object";
import React from 'react';

export default function Intro({ goUp }) {

    const text = [
        'Olá! Eu sou Aqua, um peixe-anjo-imperador e a mascote aqui do Planeta Aqua. Estou muito feliz em conhecê-lo! Você está pronto para explorar o oceano comigo?',
        'Otimo! Como você já deve ter percebido, aqui no Planeta Aqua, o oceano é um lugar verdadeiramente especial. É repleto de vida e abriga muitas criaturas incríveis. Assim como o oceano, o Planeta Aqua pode ser vasto e misterioso.',
        'Pois então, para evitar que você se sinta perdido, vou fazer um tour pelo Planeta Aqua e mostrar como o oceano é imenso e repleto de vida. Vamos começar a nossa aventura?',
        'Aqui você pode explorar o oceano e aprender sobre as criaturas que vivem nele. Bacana, né?',
        'Nessa seção você pode adotar seu próprio animal marinho e aprender sobre ele. Você pode até mesmo dar um nome para ele!',
        'Aqui é uma galeria com alguns dos animais marinhos mais incríveis do oceano. Você pode aprender sobre eles e entender por que eles são tão especiais.',
        'E por ultimo, mas não menos importante, aqui você pode aprender sobre como ajudar a proteger o oceano. Vamos lá?',
        'Agora vou deixar você explorar o Planeta Aqua. Espero que você se divirta! Precisando de ajuda, é só me chamar!'
    ]

    const [finished, setFinished] = React.useState(0)
    const [go, setGo] = React.useState(0)

    const [blocksstyle, setBlocksStyle] = React.useState('absolute w-1/5 z-50 left-10 rounded-3xl top-1/2 transform -translate-y-1/2 flex flex-col justify-between items-center')
    const [blockstyle, setBlockStyle] = React.useState('bg-dorange text-white font-body-bold uppercase text-xl px-8 py-2 rounded-3xl mt-8 cursor-pointer z-50 w-full h-36')
    const [fadeContainer, setFadeContainer] = React.useState('w-full')

    React.useEffect(() => {
        if (go === 8) {
            setBlocksStyle('relative w-full top-0 h-full flex flex-row justify-around flex-wrap items-center transition-all duration-500')
            setBlockStyle('bg-dorange text-white font-body-bold uppercase text-xl rounded-3xl cursor-pointer m-10 z-50 min-w-[60%] max-w-[60%] h-56 drop-shadow-2xl transition-all duration-500')
            setFadeContainer('w-1/2 justify-center items-center flex')
        }
    }, [go])

    return (
        <div className="container h-screen relative">
            {
                go != 8 &&
                <Object model={'angelfish'} objPosition={'0, 0, 1'} color={'0xFFFFFFF'} timeScale={3} />
            }
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
                                speed={70}
                            />
                            {
                                finished === 1 &&
                                <Fade triggerOnce={true} duration={1000}>
                                    <button onClick={() => setGo(1)} className="bg-dorange text-white font-body-bold uppercase text-xl px-8 py-2 rounded-full mt-8 cursor-pointer z-50">Estou mais do que pronto!</button>
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
                                speed={70}
                            />
                            {
                                finished === 2 &&
                                <Fade triggerOnce={true} duration={1000}>
                                    <button onClick={() => setGo(2)} className="bg-dorange text-white font-body-bold uppercase text-xl px-8 py-2 rounded-full mt-8 cursor-pointer z-50">Realmente Aqua, estou um pouco perdido</button>
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
                                speed={70}
                            />
                            {
                                finished === 3 &&
                                <Fade triggerOnce={true} duration={1000}>
                                    <button onClick={() => setGo(3)} className="bg-dorange text-white font-body-bold uppercase text-xl px-8 py-2 rounded-full mt-8 cursor-pointer z-50">Estou pronto pra mergulhar nessa aventura</button>
                                </Fade>
                            }
                        </div>
                    )
                }
                {
                    go === 3 &&
                    (
                        <div className="w-full h-full flex flex-col justify-center items-center">
                            <TypeAnimation
                                cursor={false}
                                sequence={[
                                    text[3],
                                    () => setFinished(4)
                                ]}
                                className="text-center text-2xl text-dorange font-body-bold uppercase m-0"
                                repeat={false}
                                omitDeletionAnimation={true}
                                speed={70}
                            />
                            {
                                finished === 4 &&
                                <Fade triggerOnce={true} duration={1000}>
                                    <button onClick={() => setGo(4)} className="bg-dorange text-white font-body-bold uppercase text-xl px-8 py-2 rounded-full mt-8 cursor-pointer z-50">Entendi, qual o próximo?</button>
                                </Fade>
                            }
                        </div>
                    )
                }
                {
                    go === 4 &&
                    (
                        <div className="w-full h-full flex flex-col justify-center items-center">
                            <TypeAnimation
                                cursor={false}
                                sequence={[
                                    text[4],
                                    () => setFinished(5)
                                ]}
                                className="text-center text-2xl text-dorange font-body-bold uppercase m-0"
                                repeat={false}
                                omitDeletionAnimation={true}
                                speed={70}
                            />
                            {
                                finished === 5 &&
                                <Fade triggerOnce={true} duration={1000}>
                                    <button onClick={() => setGo(5)} className="bg-dorange text-white font-body-bold uppercase text-xl px-8 py-2 rounded-full mt-8 cursor-pointer z-50">Muito legal, o que mais tem por aqui?</button>
                                </Fade>
                            }
                        </div>
                    )
                }
                {
                    go === 5 &&
                    (
                        <div className="w-full h-full flex flex-col justify-center items-center">
                            <TypeAnimation
                                cursor={false}
                                sequence={[
                                    text[5],
                                    () => setFinished(6)
                                ]}
                                className="text-center text-2xl text-dorange font-body-bold uppercase m-0"
                                repeat={false}
                                omitDeletionAnimation={true}
                                speed={70}
                            />
                            {
                                finished === 6 &&
                                <Fade triggerOnce={true} duration={1000}>
                                    <button onClick={() => setGo(6)} className="bg-dorange text-white font-body-bold uppercase text-xl px-8 py-2 rounded-full mt-8 cursor-pointer z-50">Bacana! Me conte mais.</button>
                                </Fade>
                            }
                        </div>
                    )
                }
                {
                    go === 6 &&
                    (
                        <div className="w-full h-full flex flex-col justify-center items-center">
                            <TypeAnimation
                                cursor={false}
                                sequence={[
                                    text[6],
                                    () => setFinished(7)
                                ]}
                                className="text-center text-2xl text-dorange font-body-bold uppercase m-0"
                                repeat={false}
                                omitDeletionAnimation={true}
                                speed={70}
                            />
                            {
                                finished === 7 &&
                                <Fade triggerOnce={true} duration={1000}>
                                    <button onClick={() => setGo(7)} className="bg-dorange text-white font-body-bold uppercase text-xl px-8 py-2 rounded-full mt-8 cursor-pointer z-50">Vamos!</button>
                                </Fade>
                            }
                        </div>
                    )
                }
                {
                    go === 7 &&
                    (
                        <div className="w-full h-full flex flex-col justify-center items-center">
                            <TypeAnimation
                                cursor={false}
                                sequence={[
                                    text[7],
                                    () => setFinished(8)
                                ]}
                                className="text-center text-2xl text-dorange font-body-bold uppercase m-0"
                                repeat={false}
                                omitDeletionAnimation={true}
                                speed={70}
                            />
                            {
                                finished === 8 &&
                                <Fade triggerOnce={true} duration={1000}>
                                    <button onClick={() => setGo(8)} className="bg-dorange text-white font-body-bold uppercase text-xl px-8 py-2 rounded-full mt-8 cursor-pointer z-50">Beleza, te vejo por ai Aqua.</button>
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
            {
                go >= 3 &&
                (
                    <div className={`${blocksstyle}`}>
                        {
                            go >= 3 && (
                                <Fade triggerOnce={true} duration={1000} className={`${fadeContainer}`}>
                                    <button className={`${blockstyle}`} style={{
                                        filter: go != 3 && go < 8 ? 'grayscale(80%)' : 'none',
                                        cursor: go != 3 && go < 8 ? 'not-allowed' : 'pointer'
                                    }}>Aprenda sobre o oceano</button>
                                </Fade>
                            )
                        }
                        {
                            go >= 4 && (
                                <Fade triggerOnce={true} duration={1000} className={`${fadeContainer}`}>
                                    <button className={`${blockstyle}`} style={{
                                        filter: go != 4 && go < 8 ? 'grayscale(80%)' : 'none',
                                        cursor: go != 4 && go < 8 ? 'not-allowed' : 'pointer'
                                    }}>Tenha seu próprio bichinho</button>
                                </Fade>
                            )
                        }
                        {
                            go >= 5 && (
                                <Fade triggerOnce={true} duration={1000} className={`${fadeContainer}`}>
                                    <button className={`${blockstyle}`} style={{
                                        filter: go != 5 && go < 8 ? 'grayscale(80%)' : 'none',
                                        cursor: go != 5 && go < 8 ? 'not-allowed' : 'pointer'
                                    }}>Explorar galeria</button>
                                </Fade>
                            )
                        }
                        {
                            go >= 6 && (
                                <Fade triggerOnce={true} duration={1000} className={`${fadeContainer}`}>
                                    <button className={`${blockstyle}`} style={{
                                        filter: go != 6 && go < 8 ? 'grayscale(80%)' : 'none',
                                        cursor: go != 6 && go < 8 ? 'not-allowed' : 'pointer'
                                    }}>Como cuidar do oceano</button>
                                </Fade>
                            )
                        }
                    </div>
                )
            }
        </div>
    )
}