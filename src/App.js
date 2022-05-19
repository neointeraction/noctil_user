import React from "react";
import { Routes, Route } from "react-router-dom";
// layout
import MainLayout from "./layout/MainLayout/MainLayout";
// pages
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Albums from "./pages/Albums";
import MatchStatus from "./pages/MatchStatus";
import AddAlbum from "./pages/AddAlbum";
import AlbumDetail from "./pages/AlbumDetail";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/albums" element={<Albums />} />
          <Route path="/add-album" element={<AddAlbum />} />
          <Route path="/album-detail" element={<AlbumDetail />} />
          <Route path="/match-status" element={<MatchStatus />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
