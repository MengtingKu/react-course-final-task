import axios from 'axios';

const { VITE_BASE_URL: baseURL, VITE_APP_PATH: apiPath } = import.meta.env;

const apiClient = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// 通用的請求方法
const request = (method, url, params = {}) => {
    return apiClient({
        method,
        url,
        ...params,
    });
};

// 封裝每個模組的 API
const apiService = {
    products: {
        getProducts: () => request('get', `/api/${apiPath}/products`),
        getProductById: id => request('get', `/api/${apiPath}/product/${id}`),
    },
    cart: {
        getCart: () => request('get', `/api/${apiPath}/cart`),
        postCart: params => request('post', `/api/${apiPath}/cart`, params),
        putCartById: id => request('put', `/api/${apiPath}/cart/${id}`),
        deleteCartById: id => request('delete', `/api/${apiPath}/cart/${id}`),
        deleteCarts: () => request('delete', `/api/${apiPath}/carts`),
    },
};

export default apiService;
