import { Routes, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Error from "../pages/Error";

export default function AuthRoutes() {

  return (
    <>
      <Routes>
        <Route index path="/" element={<Dashboard />}/>
        <Route index path="/dashboard" element={<Dashboard />}/>
        <Route path="*" element={<Error />} />
        
      </Routes>
    </>
  );
}
