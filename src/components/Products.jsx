import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../store/CartContext';
import apiService from '../api/apiService';

const Products = () => {
    const [, dispatch] = useContext(CartContext);
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState(null);

useEffect(()=>{
    const getProducts = async() => {
        try {
            const res = await apiService.products.getProducts()
            console.log('res=>', res);
            setProducts(res.data.products)
        } catch (error) {
            alert(error.response?.data?.message || '未知錯誤');
        } finally {
            setLoading(false);
        }
    }

    getProducts()
}, [])

    const display = () => {
        if (loading) return <div>Loading...</div>;

        return (
            <div className="row row-cols-md-3 row-cols-sm-2 g-3">
                {products.map(product => {
                    return (
                        <div className="col" key={product.id}>
                            <div className="card h-100">
                                <img
                                    src={product.imageUrl}
                                    className="card-img-top"
                                />
                                <div className="card-body d-flex flex-column justify-content-between">
                                    <div className="card-title h-100 d-flex flex-column justify-content-between">
                                        <strong> {product.title} </strong>
                                        <small className="text-secondary text-end">
                                            NT ${product.price}
                                        </small>
                                    </div>

                                    <div className="btn-group btn-group-sm w-100 mt-3">
                                        <button
                                            type="button"
                                            className="btn btn-outline-danger w-50"
                                        >
                                            查看細節
                                        </button>

                                        <button
                                            type="button"
                                            className="btn btn-outline-secondary w-50"
                                            onClick={() => {
                                                dispatch({
                                                    type: 'add_to_cart',
                                                    payload: {
                                                        ...product,
                                                        qty: 1,
                                                    },
                                                });
                                            }}
                                        >
                                            加入購物車
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    };

    return display();
};

export default Products;
