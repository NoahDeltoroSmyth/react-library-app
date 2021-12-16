import BookList from './views/Books/BookList';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './views/Home/Home';
import BookDetail from './views/Books/BookDetail';

function App() {
  // TODO: Add routes to books & views
  return (
    <main className="container">
      <h1>Library Catalog</h1>
      <BrowserRouter>
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/books/:id">
            <BookDetail />
          </Route>
          <Route path="/books">
            <BookList />
          </Route>
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
