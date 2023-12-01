import React from "react";
import { useHomeData } from "../../../../View/Home/useHomeData";

export const HomeNavbar: React.FC = () => {
    const { NAVBAR_BUTTONS } = useHomeData();

    return (
        <div className="bg-home-bg-top bg-no-repeat bg-cover bg-center h-full drop-shadow-lg 2xl:h-5/6 border-b border-b-gold" key="navbar" id="navbar-container">
            <div className="bg-black/25 h-full pb-24">
                <section id="homeNavBar" className="border-b w-full flex gap-x-2 sm:gap-x-4 md:gap-x-6 lg:gap-x-8 justify-center pt-6 sm:pt-6 md:pt-8 lg:pt-10 pb-3 sm:pb-3.5 md:pb-4 lg:pb-6 font-sans">
                    {
                        NAVBAR_BUTTONS.map((navbarButtonObj, i) => {
                            return <a href={'#' + navbarButtonObj.link} className="block text-white lg:tracking-wide text-base sm:text-lg lg:text-2xl hover:text-yellow-pastel" key={navbarButtonObj.label + '@' + i}>{navbarButtonObj.label}</a>
                        })
                    }
                </section>
                <div className="flex flex-col items-center mt-8 xl:mt-18 pt-10 pb-20 2xl:pb-32">
                    <h1 className="2xl:mt-16 border-b-4 border-b-gold text-white font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl w-fit">
                        FIORE DI LIS
                    </h1>
                    <p className="mt-4 text-white text-base sm:text-lg lg:text-xl xl:text-2xl tracking-wide max-w-xl text-center">Onde a tradição italiana encontra o sabor de um sonho realizado!</p>
                </div>
            </div>
        </div>
    )
}