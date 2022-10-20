import React from "react";
import { Routes, Route } from "react-router-dom";
import { Cadastro } from "../Pages/Cadastro/Cadstro";
import { Login } from "../Pages/Login/Login";
import { Home } from "../Pages/Home/Home";

export function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  )
}