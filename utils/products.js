const products = [{ title: 'Product 1' }, { title: 'Product 2'}];

const addProduct = (product) => {
    products.push(product);
};

module.exports = {
    products,
    addProduct
};