import { selector } from "recoil";
import { cartAtom } from "../atoms/cart";


export const totalQuantitySelector = selector({
    key: 'totalQuantitySelector',
    get: ({get}) => {
        const items = get(cartAtom);
        return items.length;
    }
})