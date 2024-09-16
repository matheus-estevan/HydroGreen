import Superior from "../components/Sobre nós/Superior";
import Inferior from "../components/Sobre nós/Inferior";
import Header from "../components/Header";

export default function SobreNos() {
    return(
        <section className='bg-gradient-to-t from-bg-blue to-slate-900'>
            <Header />

            <section className="lg:flex lg:justify-center lg:items-center lg:flex-col pb-10">
                <Superior />

                <Inferior />
                
            </section>
        </section>
    )
}