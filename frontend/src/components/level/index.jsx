import { HiChevronDoubleDown, HiChevronDoubleUp } from "react-icons/hi";
import Object from '@/components/object';

export default function Level({ model, objPosition, color, timeScale, title, subtitle, content, goDown, goUp }) {
    return (
        <div className="container mx-auto h-screen w-screen flex relative">
            <div className="border-l-2 border-inherit border-lorange w-10 h-screen absolute ml-16 mt-20 z-50" />
            <div className="ml-20 mt-20">
                <div className="flex flex-row text-6xl font-title">
                    <h1 className="text-dorange">{title}:</h1>
                    <h1 className="text-neutral ml-2">{subtitle}!</h1>
                </div>
                <p className="text-lorange text-justify text-1xl w-2/4 mt-5 font-body">{content}</p>
            </div>
            <div className="absolute top-60 left-96">
                <Object model={model} objPosition={objPosition} color={color} timeScale={timeScale} />
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
                goDown &&
                <button
                    className="absolute bottom-10 right-10 w-10 h-10 border-2 border-dorange rounded-lg uppercase cursor-pointer z-50 justify-center flex items-center"
                    onClick={goDown}
                >
                    <HiChevronDoubleDown className="text-dorange text-3xl" />
                </button>
            }
        </div>
    )
}