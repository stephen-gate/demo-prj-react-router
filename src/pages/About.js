import React from 'react'

const About = () => {
  return (
    <div>
      text-align: center;
    <div>About

    
      <p>dynamic paths</p>

      <hr/>
      <code>&lt;h1&gt;</code>

      <p>
        {/* 
IN:: SelectedProduct

   const handleReturn = () => {
console.log('handleReturn');
// navigate away programatically push or replace
// imperetive (programmatic) navigation
// as RETURN from products
    history.push('/products');
  }
*/}

{/* embrace the functionality react-router gives us
      and move the link button into a route so that it
      only appears when /comments is not part of the url 
      This nested route, conditionally rendering components
      could be used app wide - it is in effect replacing
      a more complex state management allowing react-router
      to manage state for us */}

{/* 
<Route path={`/products/${params.productId}/spec`}>
*/}

{/* this is a nested route path */}
      {/* we could use the features of useRouteMatch
      to replace this path and make the component more
      manageable if required elsewhere on if the sitemap
      changes  use path={`${match.path}/comments`} */}
      </p>
    </div>

    <div>
      <p> In the productDetail PAGE we use
{/* nested route to product/id/spec */}
      {/* 
      <Route path={`/products/${params.productId}/spec`}>
        <ProductSpec />
      </Route>
       */}
      </p>
    </div>
    </div>

  )
}

export default About