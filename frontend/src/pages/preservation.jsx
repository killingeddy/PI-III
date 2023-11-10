import SidebarComponent from "@/components/sidebar";
import { GiWaveCrest, GiEarthAsiaOceania, GiPeaceDove } from "react-icons/gi";
import Object from "@/components/object";
import Link from "next/link";

export default function Preservation() {

    return (
        <div className="scrollbar-hide relative containe h-screen bg-dblue overflow-hidden hidden lg:block">
            <SidebarComponent />
            <div className="absolute top-0 right-80 w-full h-full">
                <Object color={'0xFFFFFF'} objPosition={'90, -20, 20'} model={'preservation'} />
            </div>
            <div className="absolute right-10 w-1/3 h-[80%] flex flex-col items-center rounded-3xl top-1/2 transform -translate-y-1/2">
                <div className="bg-neutral w-full h-auto rounded-3xl">
                    <h1 className="font-title bg-dorange text-dblue w-full rounded-full text-center p-2 text-xl">A preservação da vida marinha</h1>
                    <p className="font-body-bold text-justify text-dorange p-2">
                        A preservação da vida marinha é de suma importância para o equilíbrio do ecossistema. Responsável por 70% do oxigênio que respiramos, a vida marinha também é fonte vital de alimento e renda para milhões de pessoas. Infelizmente, a poluição dos oceanos emerge como um dos maiores desafios ambientais contemporâneos, sendo o descarte inadequado de lixo a sua principal causa.
                    </p>
                    <p className="font-body-bold text-justify text-dorange p-2 mb-2">
                        A figura ao lado retrata essa triste realidade, onde um urso polar e vários peixes estão cercados e nadam entre resíduos plásticos. No entanto, essa situação não foi sempre assim e não precisa permanecer dessa maneira. Apresentamos abaixo algumas ONGs comprometidas com a defesa da vida marinha, e você também pode fazer a diferença ao conhecê-las. Acesse para saber mais.
                    </p>
                </div>
                <div className="w-full h-[30%] rounded-3xl mt-2 flex justify-between">
                    <Link href='https://brasil.oceana.org' className="bg-neutral w-[32%] h-full rounded-3xl flex justify-center items-center flex-col">
                        <GiWaveCrest size={100} color={'#ff6b35'} />
                        <h1 className="font-title text-dorange text-xl">Oceana</h1>
                    </Link>
                    <Link href='https://oceanica.org.br' className="bg-neutral w-[32%] h-full rounded-3xl flex justify-center items-center flex-col">
                        <GiEarthAsiaOceania size={100} color={'#004e89'} />
                        <h1 className="font-title text-dblue text-xl">Oceanica</h1>
                    </Link>
                    <Link href='https://www.greenpeace.org/brasil/' className="bg-neutral w-[32%] h-full rounded-3xl flex justify-center items-center flex-col">
                        <GiPeaceDove size={100} color={'#ff6b35'} />
                        <h1 className="font-title text-dorange text-xl">Greenpeace</h1>
                    </Link>
                </div>
            </div>
        </div>
    )
}