import styles from "./Tab.module.css";
import { FileNames, FolderNames } from "../../utils";
import { NavLink } from "react-router-dom";

interface TabProps {
  file: { folder: FolderNames; name: FileNames; pageTitle: string };
  activeTab: string;
  setActiveTab: (folder: FolderNames, file: FileNames) => void;
}

const Tab = ({ file, activeTab, setActiveTab }: TabProps) => {
  return (
    <div
      key={file.name}
      onClick={() =>
        setActiveTab(file.folder as FolderNames, file.name as FileNames)
      }
    >
      <NavLink
        to={`/${file.folder}/${file.name}`}
        className={({ isActive }) =>
          `${styles.tab} ${
            isActive || activeTab === file.name ? styles.active : ""
          }`
        }
        onClick={() =>
          setActiveTab(file.folder as FolderNames, file.name as FileNames)
        }
      >
        {file.pageTitle}
      </NavLink>
    </div>
  );
};

export default Tab;
