import SidebarComponent from "@/components/sidebar";
import FaqItem from "@/components/faqItem";

export default function Faq() {

    return (
        <>
            <SidebarComponent />
            <div className="scrollbar-hide relative containe h-screen bg-dblue overflow-hidden">
                <div className="flex flex-col items-center h-full ml-20 relative overflow-y-auto scrollbar-hide">
                    <h1 className="text-5xl font-title text-white mt-10">FAQ</h1>
                    <div className="w-11/12 h-1/ p-10">
                    <FaqItem description={'A plataforma "Planeta Aqua" é um ambiente educativo e lúdico voltado para crianças e adolescentes, projetado para ensinar sobre a vida marinha e promover a conscientização sobre a importância da preservação dos oceanos e de suas criaturas.'} name={'O que é a plataforma "Planeta Aqua"?'} />
                    <FaqItem description={'A plataforma destina-se a crianças e adolescentes interessados em aprender sobre a vida marinha, com faixas etárias recomendadas entre 6 e 16 anos.'} name={'Quem é o público-alvo da plataforma?'} />
                    <FaqItem description={'No "Planeta Aqua," você encontrará conteúdo educativo sobre diversas espécies marinhas, jogos interativos, atividades relacionadas à vida marinha, e informações sobre como ajudar na preservação dos oceanos.'} name={'Que tipo de conteúdo encontrarei na plataforma?'} />
                    <FaqItem description={'Não, a plataforma "Planeta Aqua" é totalmente gratuita. Todos os conteúdos e recursos são acessíveis sem custos, permitindo que as crianças e adolescentes aprendam e se divirtam sem qualquer despesa financeira.'} name={'É necessário pagar para usar a plataforma?'} />
                    <FaqItem description={'Nossa missão é inspirar as gerações mais jovens a se tornarem defensoras da vida marinha, fornecendo uma experiência educativa e divertida que estimule o amor e o cuidado pelos oceanos e seus habitantes.'} name={'Qual é a missão da plataforma "Planeta Aqua"?'} />
                    <FaqItem description={'Você pode entrar em contato com nossa equipe por meio da seção de suporte na plataforma ou pelos canais de contato fornecidos. Estamos disponíveis para responder a perguntas e receber feedback.'} name={'Como posso entrar em contato com a equipe por trás da plataforma "Planeta Aqua"?'} />
                    <FaqItem description={'No momento, a plataforma pode estar disponível apenas em português. No entanto, estamos considerando expandir para outros idiomas no futuro para alcançar um público mais amplo.'} name={'A plataforma "Planeta Aqua" está disponível em outros idiomas além do português?'} />
                    <FaqItem description={'Você pode contribuir compartilhando seu conhecimento, fornecendo feedback, divulgando a plataforma, participando das atividades e até mesmo se envolvendo em ações voluntárias relacionadas à conservação marinha.'} name={'Como posso contribuir para a plataforma "Planeta Aqua"?'} />
                    <FaqItem description={'A plataforma "Planeta Aqua" ainda não está disponível para dispositivos móveis devido à sua complexidade e ao peso dos recursos, mas estamos trabalhando para torná-la acessível em plataformas móveis no futuro.'} name={'A plataforma "Planeta Aqua" está disponível para dispositivos móveis?'} />
                    </div>
                </div>
            </div>
        </>
    )
}