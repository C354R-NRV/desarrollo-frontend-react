

const ProductCategoryRow = ({ category }) => {

    return (
        <tr>
            <th colSpan="2" className="categoriaRow">
                {category}
            </th>
        </tr>
    );
};
export default ProductCategoryRow;