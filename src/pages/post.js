import React from 'react';
import { graphql } from 'gatsby';

export const PostPage = ({ data }) => {
  const products = data.allStrapiProduct.nodes ;
  console.log(data);
  console.log(products);

  // Render your products or use the data as needed
  return (
    <div>
      <h1>hello</h1>
      <h1>Products</h1>
      <ul>
        {products?.map(product => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            {/* Display other fields if needed */}
          </li>
        ))}
      </ul>

    </div>
  );
};

export default PostPage;

export const query = graphql`
query MyQuery {
  allStrapiProduct {
    nodes {
      id
      name
    }
  }
}
`;

