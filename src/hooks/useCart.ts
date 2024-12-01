import {Cart} from "../model/cart.model";
import {useEffect, useState} from "react";
import {deleteCart, fetchCart} from "../api/carts.api";

export const useCart = () => {
    const [carts, setCarts] = useState<Cart[]>([]);
    const [isEmpty, setIsEmpty] = useState(true);

    const deleteCartItem = (id : number) => {
        deleteCart(id).then(() => {
            setCarts(carts.filter((cart) => cart.id !== id));

            setIsEmpty(carts.length === 0);
        });
    }

    useEffect (() => {
        fetchCart().then((carts : Cart[]) => {
            setCarts(carts);
            setIsEmpty(carts.length === 0);
        }, (err) => {
            if(err.statusCode(404)){
                setIsEmpty(true);
            }
        })
    }, []);

    return {carts, isEmpty, deleteCartItem};
}