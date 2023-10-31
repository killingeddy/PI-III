import SidebarComponent from "@/components/sidebar";
import Object from "@/components/object";

export default function Contact() {

    return (
        <>
            <SidebarComponent />
            <div className="scrollbar-hide relative containe h-screen bg-dblue overflow-hidden">
                <div className="flex flex-col items-center h-full ml-20 relative overflow-y-auto scrollbar-hide">
                    <div className="w-1/3 h-3/4 bg-neutral z-50 rounded-3xl absolute top-1/2 transform -translate-x-3/4 -translate-y-1/2 flex flex-col items-center justify-around">
                        <h1 className="text-4xl font-title mt-4 text-dorange">Contato</h1>
                        <div className="flex flex-col items-center justify-center">
                            <h2 className="text-xl font-title text-white">Email:</h2>
                            <input className="h-10 rounded-xl bg-dorange text-white text-center font-title" type="text" placeholder="Digite seu email" />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h2 className="text-xl font-title text-white">Assunto:</h2>
                            <input className="h-10 rounded-xl bg-dorange text-white text-center font-title" type="text" placeholder="Digite seu email" />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h2 className="text-xl font-title text-white">Descrição:</h2>
                            <input className="h-10 rounded-xl bg-dorange text-white text-center font-title" type="text" placeholder="Digite seu email" />
                        </div>
                    </div>
                    <div className="absolute -right-1/4 top-20">
                        <Object model={'submarine'} objPosition={'2, 2, 2'} color={'0xFFFFFF'} />
                    </div>
                </div>
            </div>
        </>
    )
}