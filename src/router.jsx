import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./page/crm";

function router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="crm" element={<Home />} />
        {/* <Route path="register" element={<Register />} /> */}
        {/* <Route path="login" element={<Login />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default router;
