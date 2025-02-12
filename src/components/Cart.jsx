import { useContext } from 'react';
import { CartContext } from '../store/CartContext';

const Cart = () => {
    const [state, dispatch] = useContext(CartContext);

    return (
        <div className="p-3 bg-light table-responsive">
            <table className="table table-sm align-middle table-light">
                <tbody>
                    {state.cartList.map(cart => {
                        return (
                            <tr key={cart.id}>
                                <th scope="row">
                                    <button
                                        type="button"
                                        className="btn btn-sm"
                                        onClick={() => {
                                            dispatch({
                                                type: 'remove_cart_item',
                                                payload: {
                                                    ...cart,
                                                },
                                            });
                                        }}
                                    >
                                        x
                                    </button>
                                </th>
                                <td>
                                    <img
                                        className="table_image rounded"
                                        src={cart.imageUrl}
                                        alt={cart.title}
                                    />
                                </td>
                                <td>
                                    <div className="d-flex flex-column">
                                        {cart.title}
                                        <small className="text-secondary">
                                            NT$ {cart.price}
                                        </small>
                                    </div>
                                </td>
                                <td>
                                    <select
                                        className="form-select form-select-sm"
                                        value={cart.qty}
                                        onChange={e => {
                                            e.preventDefault();
                                            dispatch({
                                                type: 'change_cart_qty',
                                                payload: {
                                                    ...cart,
                                                    qty: e.target.value,
                                                },
                                            });
                                        }}
                                    >
                                        {[...Array(20)].map((_, index) => {
                                            return (
                                                <option
                                                    value={index + 1}
                                                    key={index}
                                                >
                                                    {index + 1}
                                                </option>
                                            );
                                        })}
                                    </select>
                                </td>
                                <td className="text-end">
                                    NT$ {cart.price * cart.qty}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
                <tfoot className="text-end">
                    <tr>
                        <td colSpan={4}>總計</td>
                        <td>NT$ {state.total || 0}</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};

export default Cart;
