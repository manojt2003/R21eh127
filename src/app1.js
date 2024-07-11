const AllProducts = () => {
     const [products, setProducts] = useState([]);
     const [filters, setFilters] = useState({
       // ... existing filter options
       page: 1,
       itemsPerPage: 10,
     });
   
     useEffect(() => {
       const fetchProducts = async () => {
         const data = await getProducts(
           filters.company,
           filters.category,
           filters.minPrice,
           filters.maxPrice,
           filters.top,
           filters.page,
           filters.itemsPerPage
         );
         setProducts(data);
       };
       fetchProducts();
     }, [filters]);
   
     const handlePageChange = (page) => {
       setFilters((prevFilters) => ({
         ...prevFilters,
         page,
       }));
     };
   
     const totalPages = Math.ceil(products.length / filters.itemsPerPage);
     const currentProducts = products.slice(
       (filters.page - 1) * filters.itemsPerPage,
       filters.page * filters.itemsPerPage
     );
   
     return (
       <div>
         <h2>All Products</h2>
         {/* Filtering and sorting UI */}
         {currentProducts.map((product) => (
           <div key={product.id}>
             {/* Product details */}
           </div>
         ))}
         <div>
           {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
             <button
               key={page}
               onClick={() => handlePageChange(page)}
               disabled={filters.page === page}
             >
               {page}
             </button>
           ))}
         </div>
       </div>
     );
   };