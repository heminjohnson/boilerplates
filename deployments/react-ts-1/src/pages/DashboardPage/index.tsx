/* =========================================================================== */
/* Section: Imports                                                            */
/* =========================================================================== */

import { FunctionComponent } from "react";
import Typography from "@mui/material/Typography";

/* =========================================================================== */
/* Section: Interfaces                                                         */
/* =========================================================================== */

interface IDashBoardPageProps {
  name: string;
  email: string;
  googleId: string;
}

/* =========================================================================== */
/* Section: Main                                                               */
/* =========================================================================== */

const DashboardPage: FunctionComponent<IDashBoardPageProps> = ({
  name,
  email,
  googleId,
}) => {
  return (
    <>
      <Typography variant="h6" gutterBottom component="div">
        Dashboard
      </Typography>
      <p>
        Name: {name}, email: {email}, googleId: {googleId}
      </p>
    </>
  );
};

export default DashboardPage;
