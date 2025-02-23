import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Layout from "./components/Layout.jsx";

const ChatApp = lazy(() => import("chat/App"));
const EmailApp = lazy(() => import("mail/App"));

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Layout />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/chat" element={<ChatApp />} />
            <Route path="/mail" element={<EmailApp />} />
          </Routes>
        </Suspense>
      
    </BrowserRouter>
    </>
  );
};

export default App;
