import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Food from "./Food";
import Header from "./Header";
import Logo from "./Logo";
import User from "./User";
import Private from "./Private";
import Admin from "./Admin";
import PrivateAdmin from "./PrivateAdmin";
import AddFood from "./AddFood";
import DeleteThali from "./DeleteThali";
import EditThali from "./EditThali";
import Customer from "./Customer";
import Hotel from "./Hotel.js";
import DeleteHotal from "./DeleteHotal.js";
import EditHotal from "./EditHotal.js";
import AddHotal from "./AddHotal.js";
import Chat from "./Chat.js";
import About from "./About.js";


const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<Private />}>
          <Route path="/" element={<Food />}></Route>
          <Route path="/:id" element={<Food />}></Route>
          <Route path="/hotal" element={<Hotel />}></Route>
          <Route path="/logo" element={<Logo />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/admin-login" element={<Admin />}></Route>
        </Route>

        <Route element={<PrivateAdmin />}>
          <Route path="/add-thali" element={< AddFood />}></Route>
          <Route path="/delete-thali/:id" element={< DeleteThali />}></Route>
          <Route path="/edit-thali/:id" element={< EditThali />}></Route>
          <Route path="/add-hotal" element={< AddHotal />}></Route>
          <Route path="/delete-hotal/:id" element={< DeleteHotal />}></Route>
          <Route path="/edit-hotal/:id" element={< EditHotal />}></Route>
          <Route path="/customer" element={< Customer />}></Route>
        </Route>

        <Route path="/user" element={<User />}></Route>
        <Route path="/chat" element={<Chat />}></Route>
        <Route path="/admin-login" element={<Admin />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App;
