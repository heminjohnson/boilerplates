/* =========================================================================== */
/* Section: Imports                                                            */
/* =========================================================================== */

import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

import Typography from "@mui/material/Typography";

import styles from "./notFound.module.css";

/* =========================================================================== */
/* Section: Main                                                               */
/* =========================================================================== */

const NotFound: FunctionComponent = () => {
  return (
    <div className={styles["container"]}>
      <Typography variant="h2" gutterBottom component="div">
        404 - Not Found!
      </Typography>
      <Link to="/">Go Home</Link>
    </div>
  );
};

export default NotFound;
