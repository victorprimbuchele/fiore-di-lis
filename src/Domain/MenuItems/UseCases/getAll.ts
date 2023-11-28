import menuItems from '../../../Data/Menu/Menu/Items.json';
import { MenuItem } from '../MenuItems';

export type MenuItemCategoryTypes = 'all' | 'calzon' | 'drink' | 'pizza' | 'starter';

type GetAllMenuItemProps = {
    category?: MenuItemCategoryTypes,
    filter?: (category: MenuItemCategoryTypes) => MenuItem[]
}

export const getAllMenuItem = ({category, filter}: GetAllMenuItemProps): MenuItem[] => {
    const MENUITEMS = menuItems;

    if (category && filter) {
        console.log(filter(category))
        return filter(category)
    }

    return MENUITEMS;
}

export const filterMenuItemsByCategory = (category: MenuItemCategoryTypes): MenuItem[] => {
    if (category === 'all') {
        return menuItems;
    }

    return menuItems.filter((menuItem) => menuItem.category === category);
}

