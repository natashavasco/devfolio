import { useState } from "react";
import styles from "./TabBar.module.css";

interface TabBarProps {
  className?: string;
}

const TabBar = ({ className }: TabBarProps) => {
  const [activeTab, setActiveTab] = useState("xyz-reality");

  const tabs = [{ id: "xyz-reality", name: "XYZReality" }];

  return (
    <div className={`${styles.tabbar} ${className || ""}`}>
      <div className={styles.tabs}>
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`${styles.tab} ${
              activeTab === tab.id ? styles.active : ""
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabBar;
