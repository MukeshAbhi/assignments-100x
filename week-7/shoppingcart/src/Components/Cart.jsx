import { useRecoilState, useRecoilValue } from "recoil"
import { cartAtom } from "../store/atoms/cart"
import { totalPriceSelector } from "../store/selectors/totalprice";
import { totalQuantitySelector } from "../store/selectors/totalQuantity";

export const Cart= ()=>{

    const [items,setItems] = useRecoilState(cartAtom);
    const total = useRecoilValue(totalPriceSelector);
    const quantity = useRecoilValue(totalQuantitySelector);

    function deleteItem(index){
        setItems((items)=>{
            return items.filter((item,i)=> i!==index  )
        })
    }
    

    return(
        <>
            <div className="title"> Cart</div>
            <div className="box">
                <button className="button" onClick={()=>setItems([])} >Clear Cart</button>
                <h3 className="total"> Total Price : {total} </h3>
                <h3 className="total">Quantity: {quantity}</h3>
            </div>
            
            <div className="box1">
                {items.map((item,index)=>{
                    return(
                        <div key={index}>
                            <h2>{item.product.product}</h2>
                            <h2>{item.product.price}</h2>
                            <button onClick={()=>deleteItem(index)}>Remove item</button>
                        </div>
                    )
                })}
            </div>
            
        </>
    )
}