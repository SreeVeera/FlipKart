import Appbar from './appbar.jsx';
import {useCartStore} from '../store/cartStore.jsx';
import {Button} from '@mui/material';

function Cartpage() {
    return (
        <>
            <Appbar />
            <Cart />
        </>
    );
}

function Cart() {
    const cart = useCartStore((state) => state.cart);
    const removeFromCart = useCartStore((state) => state.removeFromCart);
    const clearCart = useCartStore((state) => state.clearCart);
    
    if (!cart || cart.length === 0) {
        return <h1>The cart is empty</h1>;
    }
    return (
        <div>
            <h1>The cart contains {cart.length} item(s)</h1>
            {cart.map((item, idx) => (
                <div key={idx} style={{border: '1px solid #ccc', margin: '10px', padding: '10px', display: 'flex', alignItems: 'center'}}>
                    <img src={item.image} alt={item.name} style={{width: '80px', height: '100px', objectFit: 'contain', marginRight: '20px'}} />
                    <div>
                        <h2 style={{margin: 0}}>{item.name}</h2>
                        <p style={{margin: 0}}>Price: ₹{item.price}</p>
                        <Button variant='contained' onClick={() => removeFromCart(item.id)}>Remove</Button>
                    </div>
                </div>        
            ))}
            <Button variant='contained' onClick={clearCart}>Clear Cart</Button>
        </div>
    )
}

export default Cartpage;