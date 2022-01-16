import { Box } from "@mui/material";

const TabPanel = ({ children, value, index, id, labelledby, ...other }) => (
  <div
    role="tabpanel"
    hidden={value !== index}
    id={`${id}-${index}`}
    aria-labelledby={`${labelledby}-${index}`}
  >
    {value === index && <Box {...other}>{children}</Box>}
  </div>
);

export default TabPanel;
