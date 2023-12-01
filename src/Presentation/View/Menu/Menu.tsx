import React from "react";
import { isMobile } from "react-device-detect";
import whiteLogo from '../../../assets/Menu/Header/white-logo.png'
import { useMenuController } from "../../../Controller/Menu/useMenuController";
import { MenuItemCard } from "../../Components/UseCases/Menu/Item/MenuItemCard";

export const Menu: React.FC = () => {
    const { ITEM_TYPES_MENU,
        menuItems,
        selectedItemType,
        setSelectedItemType } = useMenuController();

    return (
        <div className="bg-black sm:pb-24 md:pb-52 h-full">
            <section id="menu-header-container" className="w-full flex flex-col justify-center items-center pt-12 lg:pt-24 pb-8 md:pb-20 2xl:pb-32">
                <div className="flex flex-col sm:flex-row items-center justify-between w-full py-4 sm:px-24">
                    <img className="h-full hidden sm:block sm:w-36" src={whiteLogo} alt="Logomarca da pizzaria e calzoneria Fiore di Lis" />
                    <div className="w-fit">
                        <h1 className="font-serif text-3xl md:text-4xl xl:text-5xl text-white text-center">NOSSO MENU</h1>
                        <div id="italy-border" className="flex">
                            <div className="w-1/3 h-1 lg:h-2 bg-green-italy"></div>
                            <div className="w-1/3 h-1 lg:h-2 bg-white-italy"></div>
                            <div className="w-1/3 h-1 lg:h-2 bg-red-italy"></div>
                        </div>
                    </div>
                    <div className="opacity-0 w-36" />
                </div>
            </section>
            <section className="ps-4 lg:ps-24 pb-6 md:pb-8" id="back-home-button">
                <a href="/" className="text-white text-xs md:text-sm lg:text-base">
                    <i className="fa-solid fa-home text-gold pe-1 sm:pe-1.5 md:pe-2"></i>
                    <span className="text-white hover:text-gold">
                        PÁGINA INICIAL
                    </span>
                </a>
            </section>
            <section id="menu-container" className="ps-4 lg:ps-24">
                <div id="menu-item-types" className="gap-x-2 md:gap-x-4 xl:gap-x-6 flex flex-row">
                    {ITEM_TYPES_MENU.map((itemType, i) => {
                        return (
                            <button key={itemType.label + '@' + i} onClick={() => setSelectedItemType(itemType.value)} className={`${selectedItemType === itemType.value ? 'text-yellow-pastel' : 'text-white'} hover:text-yellow-pastel text-base md:text-lg lg:text-xl xl:text-2xl`}>{itemType.label}</button>
                        )
                    })}
                </div>
            </section>
            <section id="menu-items-container" className={isMobile ? 'grid grid-cols-1 gap-y-4 pt-6' : 'grid grid-cols-2 gap-4 xl:gap-8 gap-y-4 px-24 pt-12'}>
                {menuItems.map((menuItem, i) => {
                    return <MenuItemCard key={'menu-item-card' + '@' + i} image={menuItem.image} description={menuItem.description} price={menuItem.price} title={menuItem.title} />
                })}
            </section>
        </div>
    )
}