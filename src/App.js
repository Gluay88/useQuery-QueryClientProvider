import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Cat } from "./Cat";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const App = () => {
  const client = new QueryClient();
  return (
    <>
      <QueryClientProvider client={client}>
        <Router>
          <Routes>
            <Route path="/" element={<Cat />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </>
  );
};

export default App;
