import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./routes/Home";
import { Profile } from "./routes/Profile";
import { NotFound } from "./routes/NotFound";
import { Dashboard } from "./routes/Dashboard";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
