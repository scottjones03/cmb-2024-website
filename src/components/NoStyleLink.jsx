import { Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function NoStyleLink(props) {
  return (
    <Link
      component={RouterLink}
      underline="none"
      color="tertiary.main"
      {...props}
    />
  );
}
