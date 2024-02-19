import React from "react";
import { Route, Routes } from "react-router-dom";
import { Paths } from "../../navigate";
import { MesasPage } from "./MesasPage";
import { NotFound } from "../../common/NotFound";

export const MesaRoutes = () => {
  return (
    <Routes>
      <Route index element={<MesasPage />} />
      <Route path={Paths.MesaNew} element={<h3>Mesas nuevas</h3>} />
      <Route path={Paths.MesaPedidos} element={<h3>Mesas pedidos</h3>} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
