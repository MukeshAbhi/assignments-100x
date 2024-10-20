import {atom} from 'recoil';

export const productAtom = atom({
    key: 'productAtom',
    default: [
        {
            id: 1 ,
            category: 'household',
            product: 'broom',
            price: 500
        },{
            id: 2 ,
            category: 'household',
            product: 'carpet',
            price: 2500
        },{
            id: 3 ,
            category: 'electronics',
            product: 'mouse',
            price: 530
        },{
            id: 4 ,
            category: 'electronics',
            product: 'phone',
            price: 35000,
        }
    ]
});