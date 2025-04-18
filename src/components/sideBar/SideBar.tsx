import { NavLink } from "react-router-dom";
import { useState } from "react";
import styles from "./SideBar.module.css";
import { FileNames, FolderNames, Paths } from "../../utils";

const SideBar = () => {
  const [openFolders, setOpenFolders] = useState({
    experience: true,
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
            {openFolders.experience ? "▼" : "▶"} 📁 {FolderNames.EXPERIENCE}
          </div>
          {openFolders.experience && (
            <ul className={styles.nested}>
              <li>
                <NavLink to={Paths.XYZ}>📄 {FileNames.XYZ}</NavLink>
              </li>
              <li>
                <NavLink to={Paths.FVR}>📄 {FileNames.FVR}</NavLink>
              </li>
            </ul>
          )}
        </li>

        <li>
          <div
            className={styles.folder}
            onClick={() => toggleFolder("education")}
          >
            {openFolders.education ? "▼" : "▶"} 📁 {FolderNames.EDUCATION}
          </div>
          {openFolders.education && (
            <ul className={styles.nested}>
              <li>
                <NavLink to={Paths.UNIVERSITY}>
                  📄 {FileNames.UNIVERSITY}
                </NavLink>
              </li>
            </ul>
          )}
        </li>

        <li>
          <div className={styles.folder} onClick={() => toggleFolder("skills")}>
            {openFolders.skills ? "▼" : "▶"} 📁 {FolderNames.SKILLS}
          </div>
          {openFolders.skills && (
            <ul className={styles.nested}>
              <li>
                <NavLink to={Paths.DEV_SKILLS}>
                  📄 {FileNames.DEV_SKILLS}
                </NavLink>
              </li>
              <li>
                <NavLink to={Paths.SOFT_SKILLS}>
                  📄 {FileNames.SOFT_SKILLS}
                </NavLink>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default SideBar;
