import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { XyzRealityPage, HomePage } from "./pages";
import { SideBar } from "./components";
import styles from "./components/tabBar/TabBar.module.css";

const AppLayout = () => {
  const location = useLocation();
  const showSidebar = location.pathname !== "/";

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {showSidebar && <SideBar />}

      <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
        <main style={{ flex: 1, overflow: "auto" }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/experience/xyz-reality"
              element={<XyzRealityPage />}
            />
          </Routes>
        </main>
      </div>
    </div>
  );
};

const App = () => (
  <Router>
    <AppLayout />
  </Router>
);

export default App;
