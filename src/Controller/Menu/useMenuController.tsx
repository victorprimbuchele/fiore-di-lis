import { useEffect, useState } from "react"
import { MenuItem } from "../../Domain/MenuItems/MenuItems";
import { MenuItemCategoryTypes, filterMenuItemsByCategory, getAllMenuItem } from "../../Domain/MenuItems/UseCases/getAll";

interface ItemTypesMenuDictInterface {
    label: string,
    value: MenuItemCategoryTypes
}

export const useMenuController = () => {   
    const [selectedItemType, setSelectedItemType] = useState<MenuItemCategoryTypes>('all');
    const [menuItems, setMenuItems] = useState<MenuItem[]>([])

    const ITEM_TYPES_MENU: ItemTypesMenuDictInterface[] = [
        {
            label: 'TODOS',
            value: 'all'
        },
        {
            label: 'ENTRADAS',
            value: 'starter'
        },
        {
            label: 'PIZZAS',
            value: 'pizza'
        },
        {
            label: 'CALZONES',
            value: 'calzon'
        },
        {
            label: 'BEBIDAS',
            value: 'drink'
        },
    ]

    useEffect(() => {
        setMenuItems(getAllMenuItem({category: selectedItemType, filter: filterMenuItemsByCategory}));
    }, [selectedItemType]);

    return {
        ITEM_TYPES_MENU,
        menuItems,
        selectedItemType,
        setSelectedItemType
    }
}