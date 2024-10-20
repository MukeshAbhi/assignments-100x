import { selector } from "recoil";
import { cartAtom } from "../atoms/cart";


export const  totalPriceSelector = selector({
    key:'totalPriceSelector',
    get: ({get}) => {
        const items = get(cartAtom);
        const total = items.reduce((sum,item)=>{
           return sum + item.product.price;
        },0);
        return total;
    }
})