import styles from "./TabBar.module.css";
import Tab from "./Tab";
import { usePageContext } from "../../context/PageContext";

interface TabBarProps {
  className?: string;
}

const TabBar = ({ className }: TabBarProps) => {
  const { currentFile, setCurrentPath, files } = usePageContext();

  return (
    <div className={`${styles.tabbar} ${className || ""}`}>
      <div className={styles.tabs}>
        {files.map((file) => (
          <Tab
            key={file.name}
            file={file}
            activeTab={currentFile}
            setActiveTab={setCurrentPath}
          />
        ))}
      </div>
    </div>
  );
};

export default TabBar;
