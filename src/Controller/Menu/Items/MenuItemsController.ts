import { MenuItem, MenuItemCategoryTypes } from "../../../Domain/MenuItems/MenuItems";
import { getAllMenuItem } from "./UseCases/getAllMenuItems";

export class MenuItemsController {
    private getAllMenuItemsGenericProp = getAllMenuItem;

    constructor(getAllMenuItemsSpecific?: (category: MenuItemCategoryTypes) => MenuItem[]) {
        if (getAllMenuItemsSpecific) {
            this.getAllMenuItemsGenericProp = getAllMenuItemsSpecific;
        }
    }

    public getAll(category: MenuItemCategoryTypes) {
        return this.getAllMenuItemsGenericProp(category);
    }
}