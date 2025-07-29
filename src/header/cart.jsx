import Appbar from './appbar.jsx';
import {useCartStore} from '../store/cartStore.jsx';
import {Button} from '@mui/material';

function Cartpage() {
    return (
        <>
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
                    <div style={{ display: 'flex', flex: 1, alignItems: 'center' }}>
                        <div style={{ flex: '0 0 75%' }}>
                            <h4 style={{margin: 0 }}>{item.name}</h4>
                            <p style={{margin: 10}}>Price: ₹{item.price}</p>
                        </div>
                        <div style={{ flex: '0 0 25%', display: 'flex', justifyContent: 'flex-end' }}>
                            <Button variant='contained' onClick={() => removeFromCart(item.id)}>Remove</Button>
                        </div>
                    </div>
                </div>        
            ))}
            <Button variant='contained' onClick={clearCart}>Clear Cart</Button>
        </div>
    )
}

export default Cartpage;