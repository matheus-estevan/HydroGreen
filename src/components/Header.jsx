import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from '../assets/header/logo.svg';
import Menu from '../assets/header/menu.svg';
import X from '../assets/header/X.svg'

export default function Header() {
    const [abrirMenu, setAbrirMenu] = useState(false);

    function handleAbrir() {
        setAbrirMenu(true);
    }

    function handleFechar() {
        setAbrirMenu(false);
    }

    return (
        <div className="relative flex flex-col">
            <header className="flex items-center justify-between m-10 mb-20">
                <Link to="/"><img src={Icon} alt="Logo da empresa HydroGreen" /></Link>
                <button onClick={handleAbrir} className="md:hidden ml-auto">
                    <img src={Menu} alt="Imagem de um menu Hamburger" />
                </button>
                <div className="hidden md:flex space-x-10">
                    <Link className="text-titleColor font-semibold text-base font-inter uppercase text-tittle-green" to="/componentes">Componentes</Link>
                    <Link className="text-titleColor font-semibold text-base font-inter uppercase text-tittle-green" to="/guiadeuso">Funcionamento</Link>
                    <Link className="text-titleColor font-semibold text-base font-inter uppercase text-tittle-green" to="/referencias">Referências</Link>
                    <Link className="text-titleColor font-semibold text-base font-inter uppercase text-tittle-green" to="/sobrenos">Sobre nós</Link>
                </div>
            </header>

            <nav className={`bg-[#082434] flex flex-col w-60 h-screen p-5 fixed top-0 right-0 transform transition-transform ${abrirMenu ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
                <button onClick={handleFechar} className="ml-auto mb-10">
                    <img src={X} alt="Imagem de um menu Hamburger" />
                </button>
                
                <div className="flex flex-col gap-4 text-center">
                    <Link className="text-titleColor font-semibold text-base font-inter uppercase text-tittle-green" to="/componentes">Componentes</Link>
                    <Link className="text-titleColor font-semibold text-base font-inter uppercase text-tittle-green" to="/guiadeuso">Funcionamento</Link>
                    <Link className="text-titleColor font-semibold text-base font-inter uppercase text-tittle-green" to="/referencias">Referências</Link>
                    <Link className="text-titleColor font-semibold text-base font-inter uppercase text-tittle-green" to="/sobrenos">Sobre nós</Link>
                </div>
            </nav>
        </div>
    );
}
