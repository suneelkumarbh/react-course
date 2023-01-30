import { Link } from "react-router-dom";

function Products() {
  const PRODUCTS = [
    {
      id: "product-1",
      title: "Product 1",
    },
    {
      id: "product-2",
      title: "Product 2",
    },
    {
      id: "product-3",
      title: "Product 3",
    },
    {
      id: "product-4",
      title: "Product 4",
    },
  ];
  return (
    <>
      <h1>Products Page</h1>
      <ul>
        {PRODUCTS.map((prod) => (
          <li>
            <Link to={`/products/${prod.id}`}>{prod.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Products;
