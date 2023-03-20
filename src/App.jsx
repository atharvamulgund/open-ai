import { Route, Routes } from "react-router-dom";
import Chat from "./components/chat-gpt/client/Chat.react";
import Image from "./components/DALL-E/Image.react";
import Landing from "./components/landing-page/Landing.react";
import "./index.css";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/chatgpt" element={<Chat />} />
        <Route exact path="/dalle" element={<Image />} />
      </Routes>
    </>
  );
}

export default App;
