
import { useState, useEffect } from 'react'; 
import { useSelector, useDispatch } from "react-redux"; 
import SearchBar from '../components/SearchBar';   
import ProductTable from './Product/_components/ProductTable';
import { setProducts } from '../redux/Product/productActions';
import { motion } from 'framer-motion';

const CatalogoProducto = () => {
    const product = useSelector(state => state.product); 
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            setProducts(
                [
                    {category: "Frutas", price: "$1", stocked: true, name: "Manzana"},
                    {category: "Frutas", price: "$1", stocked: true, name: "Fruta del dragón"},
                    {category: "Frutas", price: "$2", stocked: false, name: "Maracuyá"},
                    {category: "Verduras", price: "$2", stocked: true, name: "Espinaca"},
                    {category: "Verduras", price: "$4", stocked: false, name: "Calabaza"},
                    {category: "Verduras", price: "$1", stocked: true, name: "Guisantes"}
                ]
            )
        )
    }, []);

    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);

    return ( 
        
        <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        >
        <div className="CatalogoProducto-header">
            <SearchBar 
            filterText={filterText} 
            inStockOnly={inStockOnly} 
            onFilterTextChange={setFilterText} 
            onInStockOnlyChange={setInStockOnly}
            />
            <div>
            <ProductTable products={product.PRODUCTS} 
            filterText={filterText}
            inStockOnly={inStockOnly}/>
            </div>
        </div>   
        </motion.div>
    );

};

export default CatalogoProducto;