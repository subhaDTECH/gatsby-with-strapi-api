import * as React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header>
    <Link>
      {siteTitle}
    </Link>
    <nav>
       <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/service">Service</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/post">Post </Link></li>
       </ul>
    </nav>
    
  </header>
)

export default Header
