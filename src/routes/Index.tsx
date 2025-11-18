import { Routes, Route } from "react-router";
import Home from "../pages/Home";
import ChatHome from "../pages/ChatHome";

const Index = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chat-module" element={<ChatHome />} />
    </Routes>
  );
};

export default Index;
