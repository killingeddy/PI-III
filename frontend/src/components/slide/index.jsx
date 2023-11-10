import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useEffect, useState } from "react";
import Object from "../object";

export default function Carousel({ slides, object }) {

    const [focusMouse, setFocusMouse] = useState(false);

    let [current, setCurrent] = useState(0);

    const [description, setDescription] = useState("");
    const [title, setTitle] = useState("");

    let previousSlide = () => {
        if (current === 0) setCurrent(slides.length - 1);
        else setCurrent(current - 1);
    };

    let nextSlide = () => {
        if (current === slides.length - 1) setCurrent(0);
        else setCurrent(current + 1);
    };

    useEffect(() => {
        if (slides.length === 0) return;
        setTitle(slides[current]?.nome);
        if (slides[current]?.nome === "Moluscos") {
            setDescription(`Os moluscos são animais invertebrados, de corpo mole, não segmentado, com ou sem concha, geralmente protegido por uma concha calcária. Podem ser encontrados em ambientes marinhos, dulcícolas e terrestres.`);
        } else if (slides[current]?.nome === "Crustáceos") {
            setDescription(`Os crustáceos são animais invertebrados, de corpo mole, segmentado, com ou sem concha, geralmente protegido por uma concha calcária. Podem ser encontrados em ambientes marinhos, dulcícolas e terrestres.`);
        } else if (slides[current]?.nome === "Baleias") {
            setDescription(`As baleias são animais vertebrados, de corpo mole, não segmentado, sem concha, geralmente protegido por uma pele. Podem ser encontrados em ambientes marinhos.`);
        } else if (slides[current]?.nome === "Peixes") {
            setDescription(`Os peixes são animais vertebrados, de corpo mole, não segmentado, sem concha, geralmente protegido por uma pele. Podem ser encontrados em ambientes marinhos e dulcícolas.`);
        } else if (slides[current]?.nome === "Cnidários") {
            setDescription(`Os cnidários são animais invertebrados, de corpo mole, não segmentado, sem concha, geralmente protegido por uma pele. Podem ser encontrados em ambientes marinhos.`);
        }
    }, [slides, current]);

    useEffect(() => {

        const interval = setInterval(() => {
            if (focusMouse === false) {
                nextSlide();
            } else {
                return;
            }
        }, 7000);
        return () => clearInterval(interval);
    }, [slides, current, focusMouse]);

    const [remainingTime, setRemainingTime] = useState();

    useEffect(() => {
        if (remainingTime === 0) return;

        const timer = setInterval(() => {
            setRemainingTime((prevState) => prevState - 1);
        }, 7000);

        return () => clearInterval(timer);
    }, [remainingTime]);

    return (
        <div className="w-[90%] h-[90%] relative">
            <div
                onMouseMove={() => setFocusMouse(true)}
                onMouseLeave={() => setFocusMouse(false)}
                className="flex flex-col h-full w-full"
            >
                <div className="overflow-hidden min-h-full relative shadow-lg border-t rounded-3xl transition-all">
                    <div
                        className={`flex transition-all duration-1000 h-full`}
                        style={{
                            transform: `translateX(-${current * 100}%)`,
                        }}
                    >
                        {slides?.map((s, i) => {
                            return (
                                <div key={i} className="min-w-full flex flex-row relative bg-neutral">
                                    <div className="p-6 w-[60%] hidden lg:block bg-neutral rounded-3xl overflow-hidden z-50">
                                        <Object color={'0x7e8283'} model={'spermwhale'} objPosition={'60, 20, 1'} timeScale={1} />
                                    </div>
                                    <div className="p-2 h-auto w-[40%] flex flex-col right-0 bg-dorange rounded-3xl">
                                        <p className="font-body-bold">{title}</p>
                                        <p className="font-body-bold">{description}</p>
                                        <button className="font-body-bold text-white bg-dblue rounded-3xl p-2 mt-2">
                                            Saiba mais sobre {title}
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-2  text-3xl">
                        <button onClick={previousSlide}>
                            <IoIosArrowBack className="text-dblue" />
                        </button>
                        <button onClick={nextSlide}>
                            <IoIosArrowForward className="text-dblue" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}