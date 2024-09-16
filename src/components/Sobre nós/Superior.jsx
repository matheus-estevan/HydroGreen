import Nos from "../../assets/imgSobreNos.jpeg"

export default function Titulo() {
    return(
        <div className="flex justify-center items-center flex-col pb-10">
            <h1 className="lg:text-6xl font-inter-900 text-tittle-green font-black text-3xl pt-8 pb-16">Sobre nós</h1>

            <img className="lg:w-128 w-72 rounded-xl" src={Nos} alt="Imagem da equipe" />
        </div>

        
    )
}