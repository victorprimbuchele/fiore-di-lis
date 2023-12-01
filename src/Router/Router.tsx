import { Route, Routes } from "react-router-dom";
import { ErrorScreen } from "../Presentation/View/Error/Error";
import { Home } from "../Presentation/View/Home/Home";
import { Menu } from "../Presentation/View/Menu/Menu";
import { Blog } from "../Presentation/View/Blog/Blog";

export const Router: React.FC = () => (
  <Routes>
    <Route path="/" element={<Home />} errorElement={<ErrorScreen />} />
    <Route path="/menu" element={<Menu />} errorElement={<ErrorScreen />} />
    <Route path="/blog" element={<Blog />} errorElement={<ErrorScreen />} />
    <Route path="/blog/:postName" element={<Blog />} errorElement={<ErrorScreen />} />
    <Route path='*' element={<ErrorScreen />}/>
  </Routes>
);