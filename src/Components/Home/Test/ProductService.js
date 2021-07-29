export default class ProductService {

    getProductsSmall() {
        return fetch('data/Product-small.json')
        .then(res => res.json())
        .then(d => d.data);
    }


}
