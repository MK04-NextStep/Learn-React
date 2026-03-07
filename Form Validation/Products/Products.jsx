import './Products.css'
import Cards from '../Components/Card/Cards';
import useDetail from '../Hooks/useDetail';
import FilterProducts from '../Utils/FilterProducts';
import { useMemo } from 'react';
function Products({ filter }) {

    let { products, loading, error } = useDetail();
    
    let filterData = useMemo(() => {
        return FilterProducts(products,filter)
    }, [products, filter])

    if (loading) {
        return <h1>Loading...</h1>
    } else if (error) {
        return <h1>Error...</h1>
    } else {
        return (
            <div className='products'>
                {
                    filterData.map((item) => (
                        <Cards key={item.id} product={item} />
                    ))
                }
            </div>
        )
    }
}

export default Products
