import { Route, Routes, Navigate } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./pages/ProductDetail";

function App() {
  // v5와 v6의 차이: Routes 사용, exact 사용하지 않더라도 사용한 효과
  // 라우팅의 순서도 중요하지 않음
  // Redirect는 사라짐. => Navigate로 변경
  // nested Route를 하고 싶다면 ~~/*로 변경

  //welcome에서 route를 잘라내어 app.js에 넣어서 nested Route를 사용할 수 있음.
  return (
    <div>
      <MainHeader />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/welcome" />} />
          <Route path="/welcome/*" element={<Welcome />}>
            <Route path="new-user" element={<p>Welcome, new user!</p>} />
          </Route>
          <Route path="/products" element={<Products />} />
          <Route
            path="/products/:productId"
            element={<ProductDetail />}
          ></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
