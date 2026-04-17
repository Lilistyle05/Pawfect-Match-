import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Category from './pages/Category';
import MyOutfit from './pages/MyOutfit';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="category/:size" element={<Category />} />
          <Route path="my-outfit" element={<MyOutfit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
