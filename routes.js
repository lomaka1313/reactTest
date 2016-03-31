import React from 'react'
import { Route, IndexRoute, Link } from 'react-router'
import Home from './src/containers/Home'
import Books from './src/containers/Books'
import Authors from './src/containers/Authors'
import Author from './src/containers/Author'
import Book from './src/containers/Book'
import Genres from './src/containers/Genres'

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
      {' '}
      <Link to="/genres">Books by genre</Link>
    </header>
    {children}
  </div>
)

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="books" component={Books}/>
    <Route path="books/:id" component={Book}/>
    <Route path="authors" component={Authors}/>
    <Route path="authors/:id" component={Author}/>
    <Route path="genres" component={Genres}/>
  </Route>
)

export default routes
