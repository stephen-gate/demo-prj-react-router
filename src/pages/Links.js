import React from 'react'

const Links = () => {
  return (
    <div>Links
      <p>text-align: center;  ?</p>
      <p>this could be called ROUTES</p>
    <p>http://localhost:3000/products/p1/spec</p>
    <p>http://localhost:3000/qwerty  PageNotFound</p>
<p>http://localhost:3000/products?sort=desc</p>
<p>http://localhost:3000/products?sort=asc</p>
    <div>
      <p>// navigate away programatically push or replace
// imperetive (programmatic) navigation
// as RETURN from products
    history.push('/products');</p></div>

    <div><p>http://localhost:3000/products/p3/spec</p>
    <p>embrace the functionality react-router gives us
      and move the link button into a route so that it
      only appears when /comments is not part of the url 
      This nested route, conditionally rendering components
      could be used app wide - it is in effect replacing
      a more complex state management allowing react-router
      to manage state for us</p>
      <p>we could use the features of useRouteMatch
      to replace this path and make the component more
      manageable if required elsewhere on if the sitemap
      changes </p>
    </div>
    </div>
  )
}

export default Links