import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"







const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const servicePage = () => (
<Layout>
   
   <h1> service Page</h1>  
</Layout>
)



export const Head = () => <Seo title="service page" />

export default servicePage;
