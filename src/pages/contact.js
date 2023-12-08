import * as React from "react" ;
import { Link } from "gatsby" ;
import { StaticImage } from "gatsby-plugin-image" ;

import Layout from "../components/layout" ;
import Seo from "../components/seo" ;
import * as styles from "../components/index.module.css" ;
const ContactPage = () => (
<Layout>
     <h1> Contact Page</h1>  
</Layout>
)



export const Head = () => <Seo title="contact page" />

export default ContactPage;
