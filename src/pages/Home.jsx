import Header from "../components/Header"
import Horta from "../assets/Home/horta.png"

export default function Home(){
    return(
        <section className='bg-gradient-to-t from-bg-blue to-slate-900 lg:min-h-screen'>
            <Header />

            <main className="lg:overflow-y-hidden flex flex-col items-center gap-14 md:flex-row md:justify-center md:items-center md:space-x-8  px-4 md:px-16  ">
              <div className="order-2 md:order-1 text-center md:flex md:flex-col md:justify-center md:itemns-center md:text-left md:mb-5 lg:max-w-4xl ">
                <h1 className="font-inter text-tittle-green font-black text-3xl md:text-6xl mb-14 md:mt-3 md:text-5xl">
                  Cultivando o futuro com eficiência e inovação
                </h1>
                <p className="pb-7 font-inter font-medium text-white text-sm md:text-2xl mt-4 md:mt-3">
                  A HydroGreen é uma estufa hidropônica automatizada para cultivo doméstico, controlável via aplicativo com Bluetooth. Ela gerencia nutrientes e ambiente de forma eficiente e sustentável, ideal para quem gosta de plantas, mas tem pouco tempo para cuidar delas, garantindo que recebam todos os cuidados necessários de forma prática e sustentável.
                </p>
              </div>
              <img src={Horta} alt="Imagem de uma horta hidropônica" className="w-56 flex lg:mt-none lg:w-101 max-w-sm mt-8 md:flex md:justify-center md:itemns-center md:mb-3 order-1 md:order-2 md:max-w-full  md:pl-3 " />
            </main>

        </section>
    )
}