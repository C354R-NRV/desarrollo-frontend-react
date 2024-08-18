const SearchBar = ({filterText,
    inStockOnly,
    onFilterTextChange,
    onInStockOnlyChange}) => {
    return(
        <form>
        <input
            type="text"
            value={filterText}
            placeholder="Search..."
            onChange={(e) => onFilterTextChange(e.target.value)}
        /><br/>
        <label>
        <input
            type="checkbox"
            checked={inStockOnly}
            onChange={(e) => onInStockOnlyChange(e.target.checked)}/>
            {' '}Mostrar solo productos en stock
            </label>
        </form>
    );
};
export default SearchBar;