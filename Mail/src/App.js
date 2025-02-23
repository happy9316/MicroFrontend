import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar.jsx";
import EmailList from "./components/EmailList.jsx";
import EmailView from "./components/EmailView.jsx";
import ComposeEmail from "./components/ComposeEmail.jsx";
// mail data
const App = () => {
  const [showCompose, setShowCompose] = useState(false);

  return (
    <Router>
      <div className="d-flex">
        <Sidebar onCompose={() => setShowCompose(true)} />
        <div className="container-fluid p-3">
          <Routes>
            <Route path="/" element={<EmailList />} />
            <Route path="/email/:id" element={<EmailView />} />
          </Routes>
        </div>
      </div>
      <ComposeEmail show={showCompose} handleClose={() => setShowCompose(false)} />
    </Router>
  );
};

export default App;
