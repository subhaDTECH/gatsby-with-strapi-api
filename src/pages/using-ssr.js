import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const UsingSSR = ({ serverData }) => {
  return (
    <Layout>
      <h1>
        This page is <b>rendered server-side</b>
      </h1>
      <p>
        This page is rendered server side every time the page is requested.
        Reload it to see a(nother) random photo from{" "}
        <code>dog.ceo/api/breed/shiba/images/random</code>:
      </p>
      <img
        style={{ width: "320px", borderRadius: "var(--border-radius)" }}
        alt="A random dog"
        src={serverData.message}
      />
      <p>
        To learn more, head over to our{" "}
        <a href="https://www.gatsbyjs.com/docs/reference/rendering-options/server-side-rendering/">
          documentation about Server Side Rendering
        </a>
        .
      </p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export const Head = () => <Seo title="Using SSR" />

export default UsingSSR

export async function getServerData() {
  try {
    const res = await fetch('http://127.0.0.1:1337/api/products?populate=*', {
      method: "GET",
      headers: {Authorization: 'Bearer da4837945768265699d896d9dd155d69e12ef72b515dd0c1b6395b7cfe4ebe958ac7700c35c46ad1185c32913c0c7a5366b3a0fa346290fe96e825fe7856a6e9159c9e349657d3a530bd27082f552b6a318c0f344def542db360f53801ba4bd57cfa42deb71620a955771f55171d33ecf574c8d81a765eed0de5e12a0c204fa2'}
    });
    const dd= await res.json();
    console.log(dd)
    if (!res.ok) {
      throw new Error(`Response failed`)
    }
    return {
      props: await res.json(),
    }
  } catch (error) {
    console.log(error);
    return {
      status: 500,
      headers: {},
      props: {},
    }
  }
}
