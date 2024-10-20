import { useRecoilValue, useSetRecoilState } from "recoil"
import { productAtom } from "../store/atoms/product"
import { cartAtom } from "../store/atoms/cart";
import { useState } from "react";

export const ProductList = ()=>{
    const products = useRecoilValue(productAtom);
    const setCart = useSetRecoilState(cartAtom);
    

    function addTocart(product){
        setCart((prevProducts)=> 
            [...prevProducts,{product}]
        )
    };
    
    return(
        <>
            <div className="title">Product List</div>
            <div className="box">
            {products.map((product)=> {
                return(
                    <div key={product.id}>
                        <h2>{product.product}</h2>
                        <h2>${product.price}</h2>
                        <button onClick={()=> addTocart(product)}>Add To Cart</button>
                    </div>
                )
            } )}
            </div>
        </>
    )
}