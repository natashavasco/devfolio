import { NavLink } from "react-router-dom";
import { useState } from "react";
import styles from "./SideBar.module.css";

const SideBar = () => {
  const [openFolders, setOpenFolders] = useState({
    experience: false,
    education: false,
    skills: false,
  });

  const toggleFolder = (folder: keyof typeof openFolders) => {
    setOpenFolders((prev) => ({
      ...prev,
      [folder]: !prev[folder],
    }));
  };

  return (
    <nav className={styles.sidebar}>
      <h3>Natasha Vasco</h3>
      <ul>
        <li>
          <div
            className={styles.folder}
            onClick={() => toggleFolder("experience")}
          >
            {openFolders.experience ? "▼" : "▶"} 📁 Experience
          </div>
          {openFolders.experience && (
            <ul className={styles.nested}>
              <li>
                <NavLink to="/experience/xyz-reality">📄 XYZReality</NavLink>
              </li>
              <li>
                <NavLink to="/experience/fundamentalvr">
                  📄 FundamentalVR
                </NavLink>
              </li>
            </ul>
          )}
        </li>

        <li>
          <div
            className={styles.folder}
            onClick={() => toggleFolder("education")}
          >
            {openFolders.education ? "▼" : "▶"} 📁 Education
          </div>
          {openFolders.education && (
            <ul className={styles.nested}>
              <li>
                <NavLink to="/education/uni">📄 UniHerts</NavLink>
              </li>
            </ul>
          )}
        </li>

        <li>
          <div className={styles.folder} onClick={() => toggleFolder("skills")}>
            {openFolders.skills ? "▼" : "▶"} 📁 Skills
          </div>
          {openFolders.skills && (
            <ul className={styles.nested}>
              <li>
                <NavLink to="/skills/dev">📄 dev-skills</NavLink>
              </li>
              <li>
                <NavLink to="/skills/soft">📄 soft-skills</NavLink>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default SideBar;
