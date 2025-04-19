import styles from "./page.module.css";

const XyzPage = () => {
  return (
    <div className={styles.page}>
      <h1>XYZ Reality</h1>
      <p style={{ color: "var(--color-sub-purple)" }}>
        ​XYZ Reality's mission is to revolutionize the construction industry by
        providing owners and contractors with accurate and objective tools to
        manage and deliver projects. They aim to eliminate rework and reduce
        reliance on traditional 2D drawings by leveraging Engineering Grade
        Augmented Reality™ technology, enabling construction teams to build it
        right, first time.
      </p>
      <p style={{ color: "var(--color-sub-purple)" }}>
        The devices team is responsible for the maintenance and development of
        the Atom™ headset software, including the companion app. As a software
        developer my focus was on development of the companion app used by the
        field engineers and clientsto track projects and track issues.
      </p>
      <h3>Software Developer</h3>
      <ul>
        <li>
          <p>
            Improving the existing mobile app by replatforming from Unity to
            React Native
          </p>
        </li>
        <li>
          <p>
            Maintaining the existing mobile app in Unity and supporting field
            engineers on the field.
          </p>
        </li>
        <li>
          <p>Debugging and fixing bugs found during QA testing and on field.</p>
        </li>
        <li>
          <p>
            Collaborating with the design team to improve the user experience of
            the app via Figma.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default XyzPage;
