import React from 'react';
import { Link} from 'gatsby';



const PostPage = ({ data }) => {
  const products = data.allStrapiProduct.edges;

  return (
    <>
      <h1>Products</h1>
      <ul>
        {products?.map((product) => (
          <li key={product.node.id}>
            <Link to={`/product/${product.node.id}`}>
              {product.node.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default PostPage;
