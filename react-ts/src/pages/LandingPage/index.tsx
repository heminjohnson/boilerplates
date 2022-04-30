/* =========================================================================== */
/* Section: Imports                                                            */
/* =========================================================================== */

import { FunctionComponent } from "react";
import Typography from "@mui/material/Typography";

import styles from "./landingPage.module.css";

/* =========================================================================== */
/* Section: Main                                                               */
/* =========================================================================== */

const LandingPage: FunctionComponent = () => {
  return (
    <div className={styles["landing-page"]}>
      <div className={styles["brand"]}>
        <Typography variant="h2" gutterBottom component="div">
          React-Typescript
        </Typography>
      </div>
    </div>
  );
};

export default LandingPage;
