import React from "react";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import "./tabs.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`custom-tabpanel-${index}`}
      aria-labelledby={`custom-tab-${index}`}
      {...other}
    >
      {value === index && <div>{children}</div>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `custom-tab-${index}`,
    "aria-controls": `custom-tabpanel-${index}`,
  };
}

const CustomTabs = ({ tabData }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="tab-container">
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="custom-tab"
            variant="fullWidth"
            TabIndicatorProps={{
              sx: {
                backgroundColor: "#FF5C00",
              },
            }}
          >
            {tabData.map((item, index) => (
              <Tab label={item.title} {...a11yProps(index)} disableRipple />
            ))}
          </Tabs>
        </Box>
        <div>
          {tabData.map((item, index) => (
            <TabPanel value={value} index={index}>
              {item.content}
            </TabPanel>
          ))}
        </div>
      </Box>
    </div>
  );
};

export default CustomTabs;
