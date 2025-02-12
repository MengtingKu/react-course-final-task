import { useContext } from 'react';
import { CartContext } from '../store/CartContext';

const Navbar = () => {
    const [state] = useContext(CartContext);
    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand">Navbar</a>
                <button
                    className="btn btn-outline-dark position-relative"
                    type="submit"
                >
                    購物車
                    <small className="position-absolute top-0 start-100 p-2 translate-middle bg-danger border border-light rounded-circle text-light">
                        {state.cartList.length}
                    </small>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
