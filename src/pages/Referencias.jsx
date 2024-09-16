import Header from '../components/Header'

import relogio from '../assets/referencias/relogio.png'
import gota from '../assets/referencias/gota.png'
import globo from '../assets/referencias/globo.png'
import folha from '../assets/referencias/folha.png'
import folha2 from '../assets/referencias/folha2.png'

import botao from '../assets/referencias/botao.png'

export default function Referencias(){

    return(
        <section className='bg-gradient-to-t from-bg-blue to-slate-900'>
            <Header />

            <section className='lg:flex lg:justify-center lg:items-center lg:flex-col  pb-10 overscroll-x-none'>

                <h1 className='lg:mb-24 lg:text-6xl font-inter-900 text-tittle-green font-black text-3xl pt-8 pb-16 text-center'>Referências Bibliográficas</h1>

                <div className='lg:gap-28 flex flex-col items-center justify-center gap-10'>

                    <div className='lg:gap-24 lg:flex-row flex flex-col gap-10'>

                        <div className='flex flex-col items-center justify-center'>
                            <img className='lg:w-14' src={folha2} alt="" />
                            <h2 className='lg:my-6 lg:text-xl3 text-center text-xl text-tittle-green font-bold'>Hidroponia</h2>
                            <p className='lg:max-w-72 lg:text-x29 text-center text-white max-w-60'>A ciência destaca a hidroponia como uma técnica de cultivo de plantas eficaz e sustentável, que utiliza água em vez de solo.</p>
                        </div>

                        <div className='flex flex-col items-center justify-center'>
                            <img className='lg:w-14' src={gota} alt="" />
                            <h2 className='lg:my-6 lg:text-xl3 text-center text-xl text-tittle-green font-bold' >Nutrição das Plantas</h2>
                            <p className='lg:max-w-72 lg:text-x29 text-center text-white max-w-60' >Nessa técnica, as plantas recebem todos os nutrientes essenciais diretamente através da água, que é enriquecida com uma solução nutritiva.</p>
                        </div>
                        
                        <div className='flex flex-col items-center justify-center'>
                            <img className='lg:w-14' src={relogio} alt="" />
                            <h2 className='lg:my-6 lg:text-xl3 text-center text-xl text-tittle-green font-bold'>Vantagens do Crescimento</h2>
                            <p  className='lg:max-w-72 lg:text-x29 text-center text-white max-w-56'>Esse método permite um crescimento mais rápido das plantas, reduzindo pela metade o tempo necessário para a colheita.</p>
                        </div>
                    </div>

                    <div className='lg:gap-24 lg:flex-row flex flex-col gap-10'>
                        <div className='flex flex-col items-center justify-center'>
                            <img className='lg:w-14' src={globo} alt="" />
                            <h2 className='lg:my-6 lg:text-xl3 text-center text-xl text-tittle-green font-bold max-w-60'>Adaptabilidade e Economia de Água</h2>
                            <p  className='lg:max-w-96 lg:text-x29 text-center text-white max-w-60'>Muito difundida ao redor do mundo, a hidroponia pode ser aplicada em qualquer ambiente, adaptando-se às mais diversas condições. Além disso, ela minimiza significativamente o desperdício de água, utilizando até 90% menos em comparação ao cultivo tradicional.</p>
                        </div>

                        <div className='flex flex-col items-center justify-center'>
                            <img className='lg:w-14' src={folha} alt="" />
                            <h2 className='lg:max-w-72 lg:my-6 lg:text-xl3 text-center text-xl text-tittle-green font-bold max-w-60'>Contribuições para a Sustentabilidade</h2>
                            <p  className='lg:max-w-80 lg:text-x29 text-center text-white max-w-60' >Como uma alternativa inovadora, a hidroponia apresenta-se como a solução perfeita para o cultivo de alimentos em áreas urbanas e rurais, contribuindo para a segurança alimentar e a conservação dos recursos naturais.</p>
                        </div>
                    </div>

                </div>

                <div className='lg:mt-32 lg:flex-row lg:gap-20 lg:w-full mt-5 flex flex-col items-center justify-center'>
                    <div className='lg:px-2 lg:max-w-96 my-5 flex flex-col items-center justify-center border-2 border-tittle-green rounded-2xl max-w-80'>
                        <h2 className='lg:max-w-80 lg:text-xl3 text-white font-bold text-center mb-7 mt-4'>Agroecologia e saúde humana: A produção orgânica por hidroponia.</h2>
                        <img className='lg:w-36 mb-4' src={botao} alt="" />
                    </div>

                    <div className='my-5 flex flex-col items-center justify-center border-2 border-tittle-green rounded-2xl max-w-80'>
                        <h2 className='lg:px-2 lg:max-w-96 lg:text-xl3 text-white font-bold text-center mb-7 mt-4'>Produção hidropônica de alface em solução nutritiva com e sem silício</h2>
                        <img className='lg:w-36 mb-4' src={botao} alt="" />
                    </div>

                    <div className='lg:max-w-xl my-5 flex flex-col items-center justify-center border-2 border-tittle-green rounded-2xl max-w-80'>
                        <h2 className='lg:px-2 lg:max-w-96 lg:text-xl3 text-white font-bold text-center mb-7 mt-4'>Monitoramento de temperatura, condutividade e ph na água para cultivo hidropônico através de IOT</h2>
                        <img className='lg:w-36 mb-4' src={botao} alt="" />
                    </div>

                </div>
            </section>

        </section>
    )
}