import SidebarComponent from "@/components/sidebar";
import Object from "@/components/object";

export default function Contact() {

    return (
        <>
            <SidebarComponent />
            <div className="scrollbar-hide relative containe h-screen bg-dblue overflow-hidden">
                <div className="flex flex-col items-center h-full ml-20 relative overflow-y-auto scrollbar-hide justify-center">
                    <div className="w-4/5 h-5/6 bg-neutral z-50 rounded-3xl flex flex-row items-center  relative overflow-hidden">
                        <div className="flex flex-col items-center justify-around w-8/12 h-full">
                            <h1 className="text-4xl font-title mt-4 text-dorange">Contato</h1>
                            <div className="flex flex-col w-5/6">
                                <h2 className="text-xl font-title text-dblue">Nome:</h2>
                                <input className="h-10 w-full rounded-3xl bg-dorange text-dblue pl-2 font-body-bold placeholder:text-dblue outline-none" type="text" placeholder="Digite seu nome" />
                            </div>
                            <div className="flex flex-col w-5/6 mt-3">
                                <h2 className="text-xl font-title text-dblue">Email:</h2>
                                <input className="h-10 w-full rounded-3xl bg-dorange text-dblue pl-2 font-body-bold placeholder:text-dblue outline-none" type="text" placeholder="Digite seu email" />
                            </div>
                            <div className="flex flex-col w-5/6 mt-3">
                                <h2 className="text-xl font-title text-dblue">Assunto:</h2>
                                <input className="h-10 w-full rounded-3xl bg-dorange text-dblue pl-2 font-body-bold placeholder:text-dblue outline-none" type="text" placeholder="Digite o assunto" />
                            </div>
                            <div className="flex flex-col w-5/6 mt-3">
                                <h2 className="text-xl font-title text-dblue">Conteudo:</h2>
                                <textarea className="h-40 w-full rounded-3xl bg-dorange text-dblue pl-2 pt-1 font-body-bold placeholder:text-dblue outline-none resize-none" type="text" placeholder="Digite sua mensagem" />
                            </div>
                            <button className="h-10 w-5/6 mt-3 rounded-3xl bg-dorange text-dblue font-title">Enviar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}