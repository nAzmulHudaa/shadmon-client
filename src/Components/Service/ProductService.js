
export default class ProductService {

    getProductsSmall() {
        return fetch('../../../public/data/products-small.json').then(res => res.json()).then(d => d.data);
    }

    getProducts() {
        return fetch('../../../public/data/products-small.json').then(res => res.json()).then(d => d.data);
    }

    getProductsWithOrdersSmall() {
        return fetch('../../../public/data/products-small.json').then(res => res.json()).then(d => d.data);
    }
}
    