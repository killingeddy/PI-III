import SidebarComponent from "@/components/sidebar";
import Card from "@/components/card";

export default function Explore() {

    return (
        <>
            <SidebarComponent />
            <div className="scrollbar-hide relative containe h-screen bg-dblue overflow-hidden">
                <div className="flex flex-col items-center h-full ml-20 relative overflow-hidden justify-evenly">
                    <h2 className="text-2xl text-neutral font-body-bold uppercase mt-4 text-center">Confira aqui as ultimas noticias sobre o oceano</h2>
                    <div className="flex flex-row justify-around mt-4 flex-wrap w-full">
                        <Card img={"https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2023/08/230823101826-02-octopus-garden-deep-sea-mystery-solved.webp?w=1220&h=674&crop=1"} name={'O mistério do jardim de polvos na zona da meia-noite'} link={"https://www.cnnbrasil.com.br/tecnologia/cientistas-resolvem-misterio-do-jardim-de-polvos-na-zona-da-meia-noite-do-oceano/"} />
                        <Card name={'Nasa diz que oceano “está com febre”'} img={"https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2023/09/GettyImages-1173100905.jpg?w=1220&h=674&crop=1"} link={"https://www.cnnbrasil.com.br/internacional/nasa-diz-que-oceano-esta-com-febre-devido-a-aumento-historico-de-temperatura-na-superficie/"} />
                        <Card name={'Trilobitas eram carniceiros oportunistas'} img={"https://veja.abril.com.br/wp-content/uploads/2023/09/Bohemolichas-e1695831163823.jpg?quality=90&strip=info&w=1280&h=720&crop=1"} link={"https://veja.abril.com.br/ciencia/trilobitas-eram-carniceiros-oportunistas-diz-estudo/"} />
                        <Card name={'Os oceanos estão ficando mais verdes'} link={"https://exame.com/ciencia/os-oceanos-estao-ficando-mais-verdes/"} img={"https://classic.exame.com/wp-content/uploads/2023/08/GettyImages-1344083746.jpg?quality=70&strip=info&w=1024"} />
                        <Card name={'Poluição plástica nos oceanos'} link={"https://exame.com/esg/poluicao-plastica-no-oceano-brasil-tem-600-grandes-portas-de-entrada-aponta-pacto-global-da-onu/"} img={"https://classic.exame.com/wp-content/uploads/2017/02/oceano-plastico.jpg?quality=70&strip=info&w=680"} />
                        <Card img={"https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2023/08/230823101826-02-octopus-garden-deep-sea-mystery-solved.webp?w=1220&h=674&crop=1"} name={'O mistério do jardim de polvos na zona da meia-noite'} link={"https://www.cnnbrasil.com.br/tecnologia/cientistas-resolvem-misterio-do-jardim-de-polvos-na-zona-da-meia-noite-do-oceano/"} />
                    </div>
                    <div className="flex flex-row justify-around mt-4 flex-wrap w-full">
                        <Card name={'Conferência mundial dos oceanos'} img={"https://www.rbsdirect.com.br/filestore/9/9/7/5/7/5/4_ac53f5e5276b6e3/4575799_003b4abcc983004.jpg?w=700&rv=2-10-05&safari"} link={"https://gauchazh.clicrbs.com.br/ambiente/noticia/2023/03/conferencia-mundial-dos-oceanos-tem-pedidos-de-preservacao-e-anuncios-de-fundos-milionarios-clers6rtr001x01et1nf0djkd.html"} />
                        <Card name={'Baleias-azuis absorvem até 10 milhões de pedaços de microplásticos'} img={"https://www.rbsdirect.com.br/filestore/1/6/7/6/4/2/4_6ddfe205db512f7/4246761_f8ff6293d884b5a.jpg?w=170&h=113"} link={"https://gauchazh.clicrbs.com.br/ambiente/noticia/2022/11/baleias-azuis-absorvem-ate-10-milhoes-de-pedacos-de-microplasticos-por-dia-afirma-estudo-cl9ygc4iy005601g7zwu531vo.html"} />
                        <Card name={'Como os oceanos podem ser recuperados'} link={"https://www.bbc.com/portuguese/articles/cnlywjrp4y1o"} img={"https://ichef.bbci.co.uk/news/725/cpsprodpb/6abe/live/997970b0-31d2-11ee-9be8-bdb4cc08ba55.jpg"} />
                        <Card name={'A impressionante foto sobre a crise do plástico'} link={"https://www.bbc.com/portuguese/articles/cl5z199ex1do"} img={"https://ichef.bbci.co.uk/news/800/cpsprodpb/efee/live/efc7b160-0a05-11ee-b5af-25e80c61c11a.jpg"} />
                        <Card name={'Mais plástico no mar do que peixes'} img={"https://bordalo.observador.pt/v2/q:84/c:1254:706:nowe:0:2/rs:fill:410/f:webp/plain/https://s3.observador.pt/wp-content/uploads/2023/07/13095604/istock-916772344.jpg"} link={"https://observador.pt/especiais/mais-plastico-no-mar-do-que-peixes-e-urgente-salvar-o-oceano/"} />
                        <Card name={'Cientistas descobrem fóssil da menor baleia que já viveu na Terra'} img={"https://veja.abril.com.br/wp-content/uploads/2023/08/Image-2_Tutcetus-life-recostruction.png?w=1280&h=720&crop=1"} link={"https://veja.abril.com.br/ciencia/cientistas-descobrem-fossil-da-menor-baleia-que-ja-viveu-na-terra/"} />
                    </div>
                </div>
            </div>
        </>
    )
}