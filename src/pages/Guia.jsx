import Header from "../components/Header"

import Arvore from "../assets/Guia/arvore.svg"
import Ampulheta from "../assets/Guia/ampulheta.svg"
import Chip from "../assets/Guia/chip.svg"
import Globo from "../assets/Guia/globo.svg"
import Gotaguia from "../assets/Guia/gotaguia.svg"
import Vaso from "../assets/Guia/vaso.svg"
import Retangulo from "../assets/retangulo.png"


export default function Guia(){
    return(
        <section className='bg-gradient-to-t from-bg-blue to-slate-900'>
            <Header />
            <section>

                <h1 className="lg:text-6xl font-inter-900 text-3xl font-bold text-tittle-green flex flex-col items-center justify-center m-10 mb-10 lg:text-6xl lg:pl-8
                ">Guia de Uso</h1>

                <div className="lg:flex items-center justify-center mt-32 lg:gap-10">

                    <div className="flex flex-col items-center justify-center mb-12 mt-6">
                        <img src={Globo} className="w-12 mb-4" alt="icone da planta2" />

                        <h2 className="lg:my-6 lg:text-xl3 text-xl font-bold text-tittle-green  mb-4 lg:text-xl3">Tanques de abastecimento</h2>
                        <p className="lg:text-x29 text-white max-w-80 lg:max-w-96 text-center">A estufa dispõe de 3 tanques: um para a água, um para a solução nutritiva em pó e outro
                                para misturá-las.</p>
                    </div>

                    <div className="flex flex-col items-center justify-center mb-12">
                        <img src={Gotaguia} className="w-10 mb-4" alt="icone da gota" />

                        <h2 className="lg:my-6 lg:text-xl3 text-xl font-bold text-tittle-green mb-4 lg:text-xl3 lg:mx-28">Solução Nutritiva</h2>
                        <p className="lg:text-x29 text-white max-w-80 text-center lg:max-w-64">Coloque a solução nutritiva  em pó e a água nos seus devidos tanques e pronto.</p>
                    </div>

                    <div  className="flex flex-col items-center justify-center mb-12 ">
                        <img src={Arvore} className="w-12 mb-4" alt="icone da planta " />

                        <h2 className="lg:my-6 lg:text-xl3 text-xl font-bold text-tittle-green mb-3 lg:text-xl3">Reabastecendo</h2>
                        <p className="lg:text-x29 text-white max-w-80 lg:max-w-96 text-center">Você receberá uma notificação através do aplicativo quando a estufa precisar ser reabastecida</p>
                    </div>

                </div>


                <div className="lg:flex items-center justify-center mt-20 lg:gap-10">
                    <div  className="flex flex-col items-center justify-center mb-12">
                        <img src={Ampulheta} className="w-12 mb-4" alt="icone do relogio" />

                        <h2 className="lg:my-6 lg:text-xl3 text-xl font-bold text-tittle-green mb-4 lg:text-xl3 ">Estimulando o crescimento</h2>
                        <p className="lg:text-x29 text-white max-w-80 lg:max-w-96 text-center">Existem luzes especiais na estufa que simulam a luz do sol, tornando o crescimento das plantas mais eficiente</p>
                    </div>

                    <div  className="flex flex-col items-center justify-center mb-12">
                        <img src={Vaso} className="w-12 mb-4" alt="icone do globo" />

                        <h2 className="lg:my-6 lg:text-xl3 text-xl font-bold text-tittle-green mb-4 lg:text-xl3 lg:mx-28">Como plantar</h2>
                        <p className="lg:text-x29 text-white max-w-80 text-center">Apenas coloque a semente ou muda em um pedaço de esponja e em seguida a coloque na estufa.</p>
                    </div>

                    <div  className="flex flex-col items-center justify-center mb-12">
                        <img src={Chip} className="w-12 mb-4" alt="icone do relogio" />

                        <h2 className="lg:my-6 lg:text-xl3 text-xl font-bold text-tittle-green mb-4 lg:text-xl3 ">Plante e esqueça</h2>
                        <p className="lg:text-x29 text-white max-w-80 lg:max-w-96 text-center">Com a HydroGreen, tudo o que você precisa fazer para cuidar de suas plantas é reabastecer a estufa, e nada mais.</p>
                    </div>

                    
                </div>
                <div className="relative w-full max-w-2xl mx-auto overflow-hidden aspect-video lg:aspect-[16/9] lg:h-[400px]">
                    <iframe
                        width="560" height="315" src="https://www.youtube.com/embed/dKyY_ci-Jng?si=XWkziT8tpwR1y7ro" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen
                        className="rounded-lg absolute top-0 left-0 w-full h-full">
                    </iframe>
                </div>

                    <h2 className="text-3xl lg:text-6xl font-bold text-tittle-green flex items-center justify-center m-10 mb-10 lg:pl-8 text-center">
                        Jogo
                    </h2>
                    <p className="text-white text-center mb-5 lg:text-lg mb-5">
                        Hydrogreen-Quest é um jogo onde o jogador controla um personagem que está em busca de peças para construir uma estufa hidropônica e salvar sua plantação.
                    </p>

                    <div className="relative w-full max-w-2xl mx-auto overflow-hidden aspect-video lg:aspect-[16/9] lg:h-[400px]">
                    <iframe
                        src="https://www.youtube.com/embed/8uXiLNjXDBo?si=tCaoXVP7faq02ueH"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        className="rounded-lg absolute top-0 left-0 w-full h-full mb-6"
                    ></iframe>
                    </div>

            </section>
        </section>
    )
}