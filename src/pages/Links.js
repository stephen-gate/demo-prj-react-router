import { NavLink } from "react-router-dom";

const Links = () => {
  
const splitUrl = window.location.href.split("/links");

  return (
    <div>
<p>example urls that externally link to specfied demo pages:</p>
<br />
<p>url: products page, sorted by price descending</p>
<NavLink to="/products?price=desc">
    {splitUrl[0]}/products?price=desc         
</NavLink>
<br />
<br />
<p>url: product page for product p2</p>
<NavLink to="/products/p2">
    {splitUrl[0]}/products/p2         
</NavLink>

<br />
<br />
<p>url: product p3 spec.</p>
<NavLink to="/products/p3/spec">
    {splitUrl[0]}/products/p3/spec         
</NavLink>
<br />

    </div>



  )
}

export default Links;