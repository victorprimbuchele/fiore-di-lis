import { useEffect, useState } from "react"
import { MenuItem, MenuItemCategoryTypes } from "../../Domain/MenuItems/MenuItems";
import { MenuItemsController } from "./Items/MenuItemsController";

interface ItemTypesMenuDictInterface {
    label: string,
    value: MenuItemCategoryTypes
}

export const useMenuController = () => {
    const menuItemsController = new MenuItemsController();
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
        setMenuItems(menuItemsController.getAll(selectedItemType));
    }, [selectedItemType]);

    return {
        ITEM_TYPES_MENU,
        menuItems,
        selectedItemType,
        setSelectedItemType
    }
}