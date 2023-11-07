import { GiSeaTurtle, GiFlatfish, GiSeahorse, GiCrab } from "react-icons/gi";
import SidebarComponent from "@/components/sidebar";
import { SliderPicker } from "react-color";
import Object from "@/components/object";
import React from "react";

export default function Pet() {

    const [color, setColor] = React.useState("#ffffff");
    const [name, setName] = React.useState("");
    const [pet, setPet] = React.useState("");
    const [position, setPosition] = React.useState("0, 0, 0");


    const positionConfig = (position) => {
        setPosition(position);
    }

    return (
        <>
            <SidebarComponent />
            <div className="scrollbar-hide relative containe h-screen bg-dblue overflow-hidden">
                <div className="flex flex-col h-full ml-20 relative overflow-hidden scrollbar-hide items-center justify-center">
                    <div className="flex flex-row items-center justify-center w-[90%] h-[90%]">
                        <div className="p-2 h-[100%] w-[80%] flex flex-col rounded-3xl relative">
                            <div className="absolute -left-1/3 -top-32">
                                <Object color={`0x${color.replace("#", "")}`} model={pet} objPosition={position} />
                            </div>
                        </div>
                        <div className="p-2 h-auto w-[20%] flex flex-col bg-neutral rounded-3xl z-50">
                            <p className="text-dblue text-center font-body-bold">Escolha o seu pet</p>
                            <div className="flex flex-row items-center justify-between flex-wrap w-[100%]">
                                <div className="flex flex-col items-center justify-center w-[45%] h-32 mt-2 bg-dorange rounded-3xl cursor-pointer" onClick={() => { setPet("turtle"), positionConfig('-180, 0, 380') }}>
                                    <GiSeaTurtle className="text-6xl text-neutral" />
                                </div>
                                <div className="flex flex-col items-center justify-center w-[45%] h-32 mt-2 bg-dorange rounded-3xl cursor-pointer" onClick={() => { setPet("angelfish"), positionConfig('0, 0, 1') }}>
                                    <GiFlatfish className="text-6xl text-neutral" />
                                </div>
                                <div className="flex flex-col items-center justify-center w-[45%] h-32 mt-2 bg-dorange rounded-3xl cursor-pointer" onClick={() => { setPet("seahorse"), positionConfig('100, 0, 150') }}>
                                    <GiSeahorse className="text-6xl text-neutral" />
                                </div>
                                <div className="flex flex-col items-center justify-center w-[45%] h-32 mt-2 bg-dorange rounded-3xl cursor-pointer" onClick={() => { setPet("crab"), positionConfig('0, 0, 4') }}>
                                    <GiCrab className="text-6xl text-neutral" />
                                </div>
                            </div>
                            <div className="mt-5">
                                <p className="text-dblue text-center font-body-bold mb-2">Escolha a cor do seu pet</p>
                                <SliderPicker color={color} onChangeComplete={(color) => setColor(color.hex)} />
                            </div>
                            <div className="mt-5">
                                <p className="text-dblue text-center font-body-bold mb-2">Escolha o nome do seu pet</p>
                                <input className="bg-dorange rounded-3xl p-2 w-full placeholder:text-dblue placeholder:font-body-bold outline-none font-body-bold text-dblue" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                            {
                                name !== "" && color !== "" && pet !== "" ?
                                    <div className="flex flex-row items-center justify-center w-[100%] mt-5">
                                        <button className="font-body-bold text-white bg-dblue rounded-3xl p-2 mt-2 w-full">
                                            Salvar
                                        </button>
                                    </div>
                                    :
                                    null
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}