import BookList from './views/Books/BookList';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './views/Home/Home';

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
          <Route path="/books">
            <BookList />
          </Route>
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
