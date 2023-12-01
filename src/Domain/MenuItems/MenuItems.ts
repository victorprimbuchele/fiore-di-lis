import { ImageInterface } from "../Image/Image";

export interface MenuItem {
    image: ImageInterface,
    title: string,
    price: string,
    description: string
}

export type MenuItemCategoryTypes = 'all' | 'calzon' | 'drink' | 'pizza' | 'starter';
