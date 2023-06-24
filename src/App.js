
import './App.css';
import Home from './photos/Home';
import {Route,Routes,BrowserRouter,useRouteMatch, useParams} from "react-router-dom"
import SearchPage from './photos/SearchPage';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/search' element={<SearchPage></SearchPage>}> </Route>
      <Route path='/' element={<Home></Home>}></Route>
    </Routes>

     
      {/* Home page that will see on 1st */}
    
      {/* Search page(that is the results page) */}
      </BrowserRouter>
    </div>
  );
}

export default App;
