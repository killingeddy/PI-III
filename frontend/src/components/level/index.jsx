import { Fade } from "react-awesome-reveal";
import Object from '@/components/object';

export default function Level({ model, objPosition, color, timeScale, title, subtitle, content }) {
    return (
        <div className="container mx-auto h-screen w-screen flex relative">
            <Fade triggerOnce={true} duration={5000} delay={1000}>
                <div className="border-l-2 border-inherit w-10 h-screen absolute ml-16 mt-20" />
                <div className="ml-20 mt-20">
                    <h1 className="text-white text-6xl font-bold font-title">{title}</h1>
                    <h1 className="text-white text-6xl font-bold font-body-bold">{subtitle}</h1>
                    <p className="text-white text-1xl w-2/4 mt-5 font-body">{content}</p>
                </div>
            </Fade>
            <Fade triggerOnce={true} duration={10000} delay={1000}>
                <div className="absolute top-60 left-96">
                    <Object model={model} objPosition={objPosition} color={color} timeScale={timeScale} />
                </div>
            </Fade>
        </div>
    )
}