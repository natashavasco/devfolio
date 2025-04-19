import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./SideBar.module.css";
import { FileNames, FolderNames, Paths } from "../../utils";
import { usePageContext } from "../../context/PageContext";

const SideBar: React.FC = () => {
  const { currentFile, currentFolder, setCurrentPath, files } =
    usePageContext();
  const [openFolders, setOpenFolders] = useState({
    [FolderNames.EXPERIENCE]: true,
    [FolderNames.EDUCATION]: false,
    [FolderNames.SKILLS]: false,
  });

  useEffect(() => {
    if (currentFolder === FolderNames.NONE) return;
    setOpenFolders((prev) => ({
      ...prev,
      [currentFolder]: true,
    }));
  }, [currentFolder]);

  function toggleFolder(folder: FolderNames) {
    if (folder === FolderNames.NONE) return;

    const folderKey = folder.toString() as keyof typeof openFolders;
    setOpenFolders((prev) => ({
      ...prev,
      [folderKey]: !prev[folderKey],
    }));
  }

  function handleFileClick(fileId: FileNames) {
    setCurrentPath(
      files.find((file) => file.name === fileId)?.folder as FolderNames,
      fileId
    );
  }

  return (
    <nav className={styles.sidebar}>
      <h3>Natasha Vasco</h3>
      <ul>
        <li>
          <div
            className={styles.folder}
            onClick={() => toggleFolder(FolderNames.EXPERIENCE)}
          >
            {openFolders.experience ? "▼" : "▶"} 📁 Experience
          </div>
          {openFolders.experience && (
            <ul className={styles.nested}>
              <li>
                <NavLink
                  to={Paths.XYZ}
                  className={
                    currentFile === FileNames.XYZ
                      ? styles.selected
                      : FileNames.NONE
                  }
                  onClick={() => handleFileClick(FileNames.XYZ)}
                >
                  📄 XYZReality
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={Paths.FVR}
                  className={
                    currentFile === FileNames.FVR
                      ? styles.selected
                      : FileNames.NONE
                  }
                  onClick={() => handleFileClick(FileNames.FVR)}
                >
                  📄 FundamentalVR
                </NavLink>
              </li>
            </ul>
          )}
        </li>

        <li>
          <div
            className={styles.folder}
            onClick={() => toggleFolder(FolderNames.EDUCATION)}
          >
            {openFolders.education ? "▼" : "▶"} 📁 Education
          </div>
          {openFolders.education && (
            <ul className={styles.nested}>
              <li>
                <NavLink
                  to={Paths.UNIVERSITY}
                  className={
                    currentFile === FileNames.UNIVERSITY
                      ? styles.selected
                      : FileNames.NONE
                  }
                  onClick={() => handleFileClick(FileNames.UNIVERSITY)}
                >
                  📄 UniHerts
                </NavLink>
              </li>
            </ul>
          )}
        </li>

        <li>
          <div
            className={styles.folder}
            onClick={() => toggleFolder(FolderNames.SKILLS)}
          >
            {openFolders.skills ? "▼" : "▶"} 📁 Skills
          </div>
          {openFolders.skills && (
            <ul className={styles.nested}>
              <li>
                <NavLink
                  to={Paths.DEV_SKILLS}
                  className={
                    currentFile === FileNames.DEV_SKILLS
                      ? styles.selected
                      : FileNames.NONE
                  }
                  onClick={() => handleFileClick(FileNames.DEV_SKILLS)}
                >
                  📄 DevSkills
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={Paths.SOFT_SKILLS}
                  className={
                    currentFile === FileNames.SOFT_SKILLS
                      ? styles.selected
                      : FileNames.NONE
                  }
                  onClick={() => handleFileClick(FileNames.SOFT_SKILLS)}
                >
                  📄 SoftSkills
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
