import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DashboardPage from "./pages/DashboardPage";
import CoursesPage from "./pages/CoursesPage";
import Layout from "./components/Layout";
import ModuleDetailPage from "./components/ModuleDetailPage";
import StatsPage from "./pages/StatsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/" element={<Layout />}>
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="courses" element={<CoursesPage />} />
          <Route path="modules/:moduleId" element={<ModuleDetailPage />} />
          <Route path="/stats" element={<StatsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
