import "../../styles/theme.css";
import { VscFolderOpened } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import styles from "./HomePage.module.css";

const HomePage = () => {
  const navigate = useNavigate();
  const handleOpen = () => {
    navigate("/experience/xyz-reality");
  };
  return (
    <div className={styles.homePage}>
      <div className={styles.centerWrap}>
        <div className={styles.header}>
          <h3>Open Project...</h3>
        </div>
        <button className={styles.openButton} onClick={handleOpen}>
          <VscFolderOpened className={styles.icon} />
          <span> Natasha's devfolio</span>
        </button>
      </div>
    </div>
  );
};

export default HomePage;
