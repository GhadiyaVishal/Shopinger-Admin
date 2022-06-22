import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Login from "./pages/login/Login";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import NewUser from "./pages/newUser/NewUser";
import User from "./pages/user/User";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";

function App() {
  const admin = JSON.parse(
    JSON.parse(localStorage.getItem("persist:root")).user
  ).currentUser.isAdmin;
  return (
    <>
      <BrowserRouter>
        <Topbar />
        <div className="container">
          {admin && <Sidebar />}
          <Routes>
            <Route path="/login" element={<Login />}></Route>
            {admin && (
              <>
                {/* <Route element={<Topbar />}></Route>
              <Route element={<Sidebar />}></Route> */}

                <Route exact path="/" element={<Home />}></Route>
                <Route path="/users" element={<UserList />}></Route>
                <Route path="/user/:userId" element={<User />}></Route>
                <Route path="/newUser" element={<NewUser />}></Route>
                <Route path="/products" element={<ProductList />}></Route>
                <Route path="/product/:productId" element={<Product />}></Route>
                <Route path="/newproduct" element={<NewProduct />}></Route>
              </>
            )}
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
