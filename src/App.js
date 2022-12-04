import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Index from './components/Header/Index';
import NotFound from './components/NotFound/NotFound';
import ProductDetail from "./components/ProductDetail/ProductDetail"
import ProductListing from "./components/ProductListing/ProductListing"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Index />
        <Routes>
          <Route path='/' element={<ProductListing />} />
          <Route path='/product/:productId' element={<ProductDetail />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;