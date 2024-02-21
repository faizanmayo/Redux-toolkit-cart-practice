import React from 'react'
import ItemCard from './ItemCard';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../features/modalslice';




const ItemContainer = () => {
    const { total, cartItems, ItemsAmount } = useSelector((state) => state.cart)
    const dispatch = useDispatch()
    if (ItemsAmount < 1) {
        return (
            <section className='cart'>
                {/* cart header */}
                <header>
                    <h2>your bag</h2>
                    <h4 className='empty-cart'>is currently empty</h4>
                </header>
            </section>
        )
    }
    return (
        <section className='cart'>
            <header>
                <h2>your bag</h2>
            </header>
            <div>
                {cartItems.map((item) => {
                    return <ItemCard key={item.id} {...item} />;
                })}
            </div>
            <footer>
                <hr />
                <div className='cart-total'>
                    <h4>
                        total <span>${total.toFixed(2)}</span>
                    </h4>
                </div>
                <button className='btn clear-btn' onClick={() => dispatch(openModal())}>clear cart</button>
            </footer>
        </section>
    )
}

export default ItemContainer
