import { GiSeaTurtle, GiFlatfish, GiSeahorse, GiCrab, GiMantaRay, GiJellyfish } from "react-icons/gi";
import { toast, ToastContainer } from "react-toastify";
import SidebarComponent from "@/components/sidebar";
import LoginModal from "@/components/modal/login";
import MapComponent from "@/components/maps";
import { SliderPicker } from "react-color";
import Object from "@/components/object";
import Loader from "@/components/loader";
import api from "@/components/api";
import React from "react";

export default function Pet() {

    const [color, setColor] = React.useState("#ffffff");
    const [name, setName] = React.useState("");
    const [pet, setPet] = React.useState("");

    const [loginModal, setLoginModal] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [userPet, setUserPet] = React.useState(false);

    function getRandomLatitude() {
        return (Math.random() * 60) - 90;
    }

    function getRandomLongitude() {
        return (Math.random() * 360) - 180;
    }

    const createPet = () => {
        const token = localStorage.getItem("token");
        setLoading(true);
        const user = JSON.parse(localStorage.getItem("user"));
        const data = {
            nome: name,
            cor: color,
            raca: pet,
            peso: 0,
            tamanho: 0,
            donoId: user.id
        }
        api
            .post('/animais', data, {
                headers: {
                    'auth-token': token,
                }
            })
            .then((response) => {
                setUserPet(true);
                toast.success(`Pet adotado com sucesso!`, {
                    position: "top-left",
                    autoClose: 2500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            })
            .catch((error) => {
                toast.error(`${error.response?.data?.error}`, {
                    position: "top-left",
                    autoClose: 2500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            })
            .finally(() => {
                setLoading(false);
            })
    }

    const getUserPet = () => {
        const token = localStorage.getItem("token");
        if (!token) {
            setLoginModal(true);
            return;
        }
        setLoading(true);
        const user = JSON.parse(localStorage.getItem("user"));
        api
            .get(`/animais/${user.id}`, {
                headers: {
                    'auth-token': token,
                }
            })
            .then((response) => {
                setUserPet(true);
                setName(response.data.nome);
                setColor(response.data.cor);
                setPet(response.data.raca);
            })
            .catch((error) => {
                setUserPet(false);
            })
            .finally(() => {
                setLoading(false);
            })
    }

    React.useEffect(() => {
        if (pet === "") {
            return;
        }
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2500);
    }, [pet, color]);

    React.useEffect(() => {
        getUserPet();
    }, [loginModal]);

    return (
        <>
            <div className="scrollbar-hide relative container h-screen bg-dblue overflow-hidden hidden 2xl:block">
                <LoginModal open={loginModal} isOpen={setLoginModal} />
                <SidebarComponent />
                <div className="flex flex-col h-full ml-20 relative overflow-hidden scrollbar-hide items-center justify-center">
                    {
                        !userPet ?
                            <>
                                <h2 className="font-title text-3xl text-dorange">{name}</h2>
                                <div className="flex flex-row items-center justify-center w-[90%] h-[90%]">
                                    <div className="p-2 h-[100%] w-[80%] flex flex-col rounded-3xl relative items-center justify-center">

                                        {
                                            loading &&
                                            <div className="absolute z-50 top-0 left-0 w-full h-full bg-dblue flex flex-col items-center justify-center">
                                                <Loader />
                                            </div>
                                        }
                                        <div className="absolute -left-1/3 -top-32">
                                            <>
                                                {
                                                    pet === "turtle" &&
                                                    <Object color={`0x${color.replace("#", "")}`} model={'turtle'} objPosition={'-200, 5, 250'} />
                                                }
                                                {
                                                    pet === "fish" &&
                                                    <Object color={`0x${color.replace("#", "")}`} model={'angelfish'} objPosition={'0, 0, 1'} />
                                                }
                                                {
                                                    pet === "seahorse" &&
                                                    <Object color={`0x${color.replace("#", "")}`} model={'seahorse'} objPosition={'180, 0, 100'} />
                                                }
                                                {
                                                    pet === "crab" &&
                                                    <Object color={`0x${color.replace("#", "")}`} model={'crab'} objPosition={'0, 1, 2'} />
                                                }
                                                {
                                                    pet === "mantaray" &&
                                                    <Object color={`0x${color.replace("#", "")}`} model={'mantaray'} objPosition={'-20, 1, 30'} />
                                                }
                                                {
                                                    pet === "squid" &&
                                                    <Object color={`0x${color.replace("#", "")}`} model={'jellyfish'} objPosition={'0, 0, 18'} />
                                                }
                                            </>
                                        </div>
                                    </div>
                                    {
                                        !loading &&
                                        <>
                                            <div className="p-2 h-auto w-[20%] flex flex-col bg-neutral rounded-3xl z-50">
                                                <p className="text-dblue text-center font-body-bold">Escolha o seu pet</p>
                                                <div className="flex flex-row items-center justify-between flex-wrap w-[100%]">
                                                    <div className="flex flex-col items-center justify-center w-[45%] h-32 mt-2 bg-dorange rounded-3xl cursor-pointer" onClick={() => { setPet("turtle") }}>
                                                        <GiSeaTurtle className="text-6xl text-neutral" />
                                                    </div>
                                                    <div className="flex flex-col items-center justify-center w-[45%] h-32 mt-2 bg-dorange rounded-3xl cursor-pointer" onClick={() => { setPet("fish") }}>
                                                        <GiFlatfish className="text-6xl text-neutral" />
                                                    </div>
                                                    <div className="flex flex-col items-center justify-center w-[45%] h-32 mt-2 bg-dorange rounded-3xl cursor-pointer" onClick={() => { setPet("seahorse") }}>
                                                        <GiSeahorse className="text-6xl text-neutral" />
                                                    </div>
                                                    <div className="flex flex-col items-center justify-center w-[45%] h-32 mt-2 bg-dorange rounded-3xl cursor-pointer" onClick={() => { setPet("crab") }}>
                                                        <GiCrab className="text-6xl text-neutral" />
                                                    </div>
                                                    <div className="flex flex-col items-center justify-center w-[45%] h-32 mt-2 bg-dorange rounded-3xl cursor-pointer" onClick={() => { setPet("mantaray") }}>
                                                        <GiMantaRay className="text-6xl text-neutral" />
                                                    </div>
                                                    <div className="flex flex-col items-center justify-center w-[45%] h-32 mt-2 bg-dorange rounded-3xl cursor-pointer" onClick={() => { setPet("squid") }}>
                                                        <GiJellyfish className="text-6xl text-neutral" />
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
                                                        <div className="flex flex-row items-center justify-center w-[100%]">
                                                            <button className="font-body-bold text-white bg-dblue rounded-3xl p-2 mt-2 w-full" onClick={() => { createPet() }}>
                                                                Salvar
                                                            </button>
                                                        </div>
                                                        :
                                                        null
                                                }
                                            </div>
                                        </>
                                    }
                                </div>
                            </>
                            :
                            <>
                                <h2 className="font-title text-3xl text-dorange">Acompanhe por onde <span className="text-neutral">{name}</span> anda</h2>
                                <MapComponent latitude={getRandomLatitude()} longitude={getRandomLongitude()} animalName={name} pet={pet} color={color} />
                            </>
                    }
                </div>
            </div>
            <ToastContainer />
        </>
    )
}