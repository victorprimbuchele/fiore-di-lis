import menuItems from '../../../../Data/Menu/Menu/Items.json';
import { MenuItem, MenuItemCategoryTypes } from '../../../../Domain/MenuItems/MenuItems';


export const getAllMenuItem = (category: MenuItemCategoryTypes): MenuItem[] => {
    const MENUITEMS = menuItems;

    if (category) {
        return filterMenuItemsByCategory(category);
    }

    return MENUITEMS;
}

export const filterMenuItemsByCategory = (category: MenuItemCategoryTypes): MenuItem[] => {
    if (category === 'all') {
        return menuItems;
    }

    return menuItems.filter((menuItem) => menuItem.category === category);
}

