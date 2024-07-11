const AllProducts = () => {
     const [products, setProducts] = useState([]);
     const [filters, setFilters] = useState({
       company: 'ANZ',
       category: 'Laptop',
       minPrice: 100,
       maxPrice: 10000,
       top: 10,
       sortBy: 'price',
       sortDirection: 'asc',
     });
   
     useEffect(() => {
       const fetchProducts = async () => {
         const data = await getProducts(
           filters.company,
           filters.category,
           filters.minPrice,
           filters.maxPrice,
           filters.top
         );
         setProducts(data);
       };
       fetchProducts();
     }, [filters]);
   
     const handleFilterChange = (field, value) => {
       setFilters((prevFilters) => ({
         ...prevFilters,
         [field]: value,
       }));
     };
   
     const handleSortChange = (field, direction) => {
       setFilters((prevFilters) => ({
         ...prevFilters,
         sortBy: field,
         sortDirection: direction,
       }));
     };
   
     const sortedProducts = products.sort((a, b) => {
       const sortField = filters.sortBy;
       const sortDirection = filters.sortDirection === 'asc' ? 1 : -1;
       if (a[sortField] < b[sortField]) return -1 * sortDirection;
       if (a[sortField] > b[sortField]) return 1 * sortDirection;
       return 0;
     });
   
     return (
       <div>
         <h2>All Products</h2>
         {/* Filtering and sorting UI */}
         {sortedProducts.map((product) => (
           <div key={product.id}>
             {/* Product details */}
           </div>
         ))}
       </div>
     );
   };