import { GiWhaleTail, GiJellyfish, GiSadCrab, GiGiantSquid, GiClownfish } from "react-icons/gi";
import SidebarComponent from "@/components/sidebar";
import { BiChevronRight } from "react-icons/bi";
import "react-toastify/dist/ReactToastify.css";
import Object from "@/components/object";
import { toast } from "react-toastify";
import api from "@/components/api";
import React from "react";
import Loader from "@/components/loader";

export default function Gallery() {

    const [especies, setEspecies] = React.useState([]);
    const [racas, setRacas] = React.useState([]);

    const [loading, setLoading] = React.useState(true);

    const [especieId, setEspecieId] = React.useState("");
    const [descricao, setDescicao] = React.useState("");
    const [especie, setEspecie] = React.useState("");

    const getEspecies = async () => {
        api
            .get("/especie")
            .then((res) => {
                setEspecies(res.data);
            })
            .catch((err) => {
                toast.error(`${err.response?.data?.error}`, {
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
    }

    const getRacas = async () => {
        api
            .get("/raca",
                {
                    params: {
                        especie: especieId
                    }
                })
            .then((res) => {
                setRacas(res.data);
            })
            .catch((err) => {
                toast.error(`${err.response?.data?.error}`, {
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
    }

    React.useEffect(() => {
        getEspecies();
    }, []);

    React.useEffect(() => {
        if (especieId !== "") {
            getRacas();
        }
    }, [especieId]);

    React.useEffect(() => {
        if (especie === "Baleias") {
            setDescicao("Baleias, as divas dos oceanos, encantam com sua imponência e graça. Suas caudas dançam nas águas, contando histórias de mares distantes. Com olhos curiosos e canções subaquáticas, são artistas natos, protagonizando espetáculos que rivalizam com qualquer circo. Gourmets do oceano, suas banquetes de krill e peixes são um deleite sofisticado. As baleias, verdadeiros astros marinhos, transformam os mares em palcos de magia e mistério.")
        } else if (especie === "Cnidários") {
            setDescicao("Cnidários marinhos, os mágicos do oceano, são como poesias vivas sob as ondas. Com suas formas graciosas, como bailarinas aquáticas, eles dançam ao sabor das correntes. Dotados de tentáculos elegantes, são verdadeiros malabaristas do mar, capturando presas com uma destreza impressionante. Essas criaturas, que incluem medusas e anêmonas, transformam os recifes em jardins encantados, colorindo os oceanos com sua beleza etérea. Em um espetáculo silencioso, os cnidários marinhos pintam o fundo do mar com suas cores vibrantes, adicionando uma dose de magia à vastidão azul.")
        } else if (especie === "Crustáceos") {
            setDescicao("Os crustáceos, pequenos arquitetos do oceano, trazem uma animação peculiar às profundezas marítimas. Com suas carapaças ornamentadas e pinças habilidosas, esses invertebrados são verdadeiros artistas da engenharia subaquática. De ermitões charmosos carregando conchas como casas itinerantes a caranguejos dançantes em um balé de pinças, os crustáceos adicionam uma dose de excentricidade aos ecossistemas marinhos. Sob as ondas, eles personificam a diversidade e a vivacidade do reino subaquático, pintando o fundo do mar com sua própria paleta de cores e movimentos cativantes.")
        } else if (especie === "Moluscos") {
            setDescicao("Os moluscos, suaves poetas dos mares, deslizam graciosamente pelo oceano como versos aquáticos. De conchas intricadas a corpos delicados, essas criaturas exibem uma diversidade de formas e tamanhos. As ostras, engenheiras gourmet, criam pérolas preciosas em suas conchas, enquanto os polvos, verdadeiros malabaristas do mar, mostram uma inteligência notável. As lesmas do mar, com suas cores vibrantes, parecem pequenas obras de arte ambulantes. Os moluscos, em sua variedade encantadora, são protagonistas silenciosos, adornando os oceanos com uma elegância que transforma cada maré em um poema líquido.")
        } else if (especie === "Peixes") {
            setDescicao("Peixes, os dançarinos aquáticos, deslizam como pinceladas vivas nos cenários submersos. Com suas escamas reluzentes e barbatanas graciosas, eles trazem uma sinfonia de cores aos oceanos. Desde os pequenos cardumes tecendo padrões hipnotizantes até os grandes predadores, como tubarões e atuns, navegando com majestade, os peixes são as estrelas em um espetáculo aquático em constante movimento. Suas histórias de viagens pelos recifes e corais são como capítulos entrelaçados no romance interminável dos mares. Assim, os peixes transformam os oceanos em uma vibrante pista de dança, celebrando a vida em um balé líquido de beleza indescritível.")
        }
    }, [especie]);

    React.useEffect(() => {
        if (especie !== "") {
            setLoading(false);
        }
    }, [especie]);

    return (
        <>
            <div className="scrollbar-hide relative containe h-screen bg-dblue overflow-hidden hidden lg:block">
                <SidebarComponent />
                <div className="flex flex-col h-full ml-20 relative overflow-hidden scrollbar-hide items-center">
                    <h1 className="font-title text-neutral text-3xl">Confira nossa galeria de espécies</h1>
                    <div className="flex flex-row items-center justify-between w-[90%] h-1/6 m-5">
                        {
                            (
                                <>
                                    {
                                        especies.map((item, index) => {
                                            return (
                                                <div key={index} className="flex flex-col items-center justify-center bg-dorange h-full w-1/6 rounded-3xl cursor-pointer" onClick={() => { setEspecie(item.nome); setEspecieId(item.id) }}>
                                                    {
                                                        item.nome === "Baleias" ? (
                                                            <GiWhaleTail className="text-white" size={70} />
                                                        ) : item.nome === "Cnidários" ? (
                                                            <GiJellyfish className="text-white" size={70} />
                                                        ) : item.nome === "Crustáceos" ? (
                                                            <GiSadCrab className="text-white" size={70} />
                                                        ) : item.nome === "Moluscos" ? (
                                                            <GiGiantSquid className="text-white" size={70} />
                                                        ) : item.nome === "Peixes" ? (
                                                            <GiClownfish className="text-white" size={70} />
                                                        ) : (
                                                            <></>
                                                        )
                                                    }
                                                    <p className="text-white text-2xl font-bold">{item.nome}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </>
                            )
                        }
                    </div>
                    {
                        loading
                            ?
                            <Loader />
                            :
                            <div className="flex flex-col items-center w-[90%] rounded-3xl h-[70%] m-5 bg-neutral">
                                <div className="flex flex-row items-center justify-between w-full h-full">
                                    <div className="w-4/5 h-full relative overflow-hidden">
                                        <div className="absolute -left-56 z-50 -top-20">
                                            {
                                                especie === "Baleias" &&
                                                <Object color={'0xFFFFFF'} objPosition={'0, 0, 30'} model={'hpwhale'} />
                                            }
                                            {
                                                especie === "Cnidários" &&
                                                <Object color={'0xFFFFFF'} objPosition={'-10, 0, 4'} model={'jellyfishGl'} />
                                            }
                                            {
                                                especie === "Crustáceos" &&
                                                <Object color={'0xFFFFFF'} objPosition={'0, 0, 3'} model={'crab'} />
                                            }
                                            {
                                                especie === "Moluscos" &&
                                                <Object color={'0xFFFFFF'} objPosition={'60, 20, 1'} model={'vampiresquid'} />
                                            }
                                            {
                                                especie === "Peixes" &&
                                                <Object color={'0xFFFFFF'} objPosition={'0, 0, 1'} model={'fishes'} />
                                            }
                                        </div>
                                    </div>
                                    <div className="w-1/4 h-full bg-dorange rounded-3xl p-2 overflow-y-auto scrollbar-hide">
                                        <h1 className="text-dblue text-4xl text-center font-title mt-2">{especie}</h1>
                                        <p className="text-neutral text-base text-justify font-bold mt-2">{descricao}</p>
                                        <p className="text-dblue text-base text-justify font-bold mt-2">Confira alguns tipos de animais pertencentes a essa espécie:</p>
                                        {
                                            racas.map((item, index) => {
                                                return (
                                                    <div key={index} className="flex flex-row items-center">
                                                        <BiChevronRight className="text-dblue" size={30} />
                                                        <p className="text-dblue text-base font-bold">{item.nome}</p>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                    }
                </div>
            </div>
        </>
    )
}