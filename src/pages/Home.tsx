import React from "react";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="w-screen h-screen flex bg-gradient-to-br from-white via-purple-100 to-purple-250  items-center justify-center gap-5">
        <button className="p-2.5 bg-gradient-to-br from-purple-250 via-purple-450 to-purple-700 rounded-[14px] text-grey-150 active:opacity-75">
          Select Users
        </button>
        <button
          className="p-2.5 bg-gradient-to-br from-purple-250 via-purple-450 to-purple-700 rounded-[14px] text-grey-150 active:opacity-75"
          onClick={() => navigate("/chat-module")}
        >
          Open Chat
        </button>
      </div>
    </>
  );
};

export default Home;
