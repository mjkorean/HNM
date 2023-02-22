import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductAll from "./page/ProductAll";
import Login from "./page/Login";
import ProductDetail from "./page/ProductDetail";
import Navbar from "./component/Navbar";
import "./App.css";
import { useState, useEffect } from "react";
import PrivateRoute from "./route/PrivateRoute";

/*
1 전체상품 페이지, 로그인, 상품상세 페이지
1-1 네비게이션 바 생성
2 전체상품 페이지: 전체상품 목록 보임
3 로그인 버튼 누르면 로그인 페이지 나옴
3 상품상세 페이지 눌렀으나, 로그인 안돼있을경우, 로그인 페이지 먼저 나옴
4 로그인 되어있을경우, 상품상세 페이지 나옴
5 로그아웃 버튼 누르면 로그아웃 됨
5 로그아웃되면 상품상세 페이지를 볼 수 없다. 다시 로그인 페이지 나옴
6 로그인하면 로그아웃 버튼 보임, 로그아웃하면 로그인 버튼 보임
7 상품 검색 할 수 있다
*/

function App() {
  const [authenticate, setAuthenticate] = useState(false); // true=logged in, false=not logged in
  useEffect(() => {
    console.log("aaa??", authenticate);
  }, [authenticate]);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route
          path="/login"
          element={<Login setAuthenticate={setAuthenticate} />}
        />
        <Route
          path="/product/:id"
          element={<PrivateRoute authenticate={authenticate} />}
        />
      </Routes>
    </div>
  );
}

export default App;
