import React from "react";
import { MenuItem } from "../../../../../Domain/MenuItems/MenuItems";

export const MenuItemCard: React.FC<MenuItem> = ({alt, description, image, price, title}) => {
    return (
        <div className='flex flex-row gap-x-3 md:gap-x-5 px-4 md:px-0'>
            <img src={image} alt={alt} width={'40%'}/>
            <div id="menu-item-text-container" className="flex flex-col w-3/5 justify-center">
                <div id="menu-item-title-price-container" className="flex flex-row justify-between items-center text-yellow-pastel md:text-xl 2xl:text-2xl lg:mb-2">
                    <h6>{title}</h6>
                    <span>{price}</span>
                </div>
                <p className="text-white text-sm md:text-base 2xl:text-lg md:tracking-wide sm:leading-10">
                    {description}
                </p>
            </div>
        </div>
    )
}