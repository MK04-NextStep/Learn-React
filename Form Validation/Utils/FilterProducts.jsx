function FilterProducts(products, filter) {
    return products.filter(product => {

        if (filter.category !== "all" && product.category !== filter.category)
            return false;

        if (filter.range > 0 && product.price > filter.range)
            return false;

        if (filter.rating > 0 && product.rating < filter.rating)
            return false;

        return true;
    });

}

export default FilterProducts
