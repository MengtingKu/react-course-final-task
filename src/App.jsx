import { useReducer } from 'react';
import Navbar from '@components/Navbar';
import Products from '@components/Products';
import Cart from '@components/Cart';
import { CartContext, cartReducer, cartInit } from './store/CartContext';

function App() {
    const reducer = useReducer(cartReducer, cartInit);

    return (
        <CartContext.Provider value={reducer}>
            <Navbar></Navbar>

            <main className="container mt-5">
                <div className="row">
                    <div className="col-md-7">
                        <Products></Products>
                    </div>
                    <div className="col-md-5">
                        <Cart></Cart>
                    </div>
                </div>
            </main>
        </CartContext.Provider>
    );
}

export default App;
