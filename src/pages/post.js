import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Link } from "gatsby" ;
import { StaticImage } from "gatsby-plugin-image" ;
import Layout from "../components/layout"
import Seo from "../components/seo"
import {card, title}  from "../components/index.module.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export const PostPage = ({ data }) => {
  const products = data.allStrapiProduct.nodes ;
  console.log(data);
  console.log(products);
  return (
    <Layout>
      <div>
      <h1>Products</h1>
      <ul>
        {products?.map(product => (
          <li className={card} key={product?.id}>
            <h2>{product?.name}</h2>
            <p><span className={title}>Description</span> : {product?.description}</p>
            <p className={title}>Price : Rs  {product?.price}</p>
            <p>Stock : {product?.stock} In </p>
            <img src={product?.image[0]?.localFile?.url}/>
            <br/>
            <span>Review Id : {product?.reviews[0]?.id}</span>
            <p><span className={title}>Reviews</span> :{product?.reviews[0]?.textreview}</p>
          </li>
        ))}
      </ul>

    </div>
    </Layout>
    
  );
};


export const Head = () => <Seo title="Home" />
export default PostPage;

export const query = graphql` 
query MyQuery {
  allStrapiProduct {
    nodes {
      id
      description
      name
      stock
      image {
        id
        url
        localFile {
          absolutePath
          url
        }
      }
      reviews {
        id
        textreview
      }
      price
    }
  }
}
`;

