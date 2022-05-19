import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./custom-accordion.css";

const CustomAccordion = ({ title, children }) => {
  return (
    <div className="custom-accord-container">
      <div className="custom-accord accord-highlighted">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="accord-1"
            id="accord-1"
          >
            <div className="accord-title">
              <h4 className="h-accord-title">{title}</h4>
            </div>
          </AccordionSummary>
          <div className="accord-content">{children}</div>
        </Accordion>
      </div>
    </div>
  );
};

export default CustomAccordion;
