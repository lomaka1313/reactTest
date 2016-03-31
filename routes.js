import React from 'react'
import { Route, IndexRoute, Link } from 'react-router'
import Home from './src/containers/Home'

const App = ({ children }) => (
  <div>
    <header>
      Links:
      {' '}
      <Link to="/">Home</Link>
      {' '}
      <Link to="/books">Books</Link>
      {' '}
      <Link to="/authors">Authors</Link>
    </header>
    {children}
  </div>
)
const books = () => (<div>Books!</div>)
const FooID = (data) => {
    const {id} = data.routeParams
    console.log(id)
    return <div>Foo {id}!</div>
}
const Bar = () => (<div>Bar!</div>)

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="books" component={books}/>
    <Route path="books/:id" component={FooID}/>
    <Route path="authors" component={Bar}/>
  </Route>
)

export default routes
