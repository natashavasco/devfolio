import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import {
  HomePage,
  XyzPage,
  FvrPage,
  CmrPage,
  UniversityPage,
  CollegePage,
  DevSkillsPage,
  SoftSkillsPage,
} from "./pages";
import { SideBar, TabBar } from "./components";
import styles from "./components/tabBar/TabBar.module.css";
import { Paths } from "./utils";
const AppLayout = () => {
  const location = useLocation();
  const showSidebar = location.pathname !== "/";
  const showTabBar = location.pathname !== "/";

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {showSidebar && <SideBar />}
      <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
        {showTabBar && <TabBar className={styles.tabbar} />}
        <main style={{ flex: 1, overflow: "auto" }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path={Paths.XYZ} element={<XyzPage />} />
            <Route path={Paths.FVR} element={<FvrPage />} />
            <Route path={Paths.CMR} element={<CmrPage />} />
            <Route path={Paths.UNIVERSITY} element={<UniversityPage />} />
            <Route path={Paths.COLLEGE} element={<CollegePage />} />
            <Route path={Paths.DEV_SKILLS} element={<DevSkillsPage />} />
            <Route path={Paths.SOFT_SKILLS} element={<SoftSkillsPage />} />
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
