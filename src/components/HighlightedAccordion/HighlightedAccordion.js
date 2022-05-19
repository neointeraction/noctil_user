import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./highlighted-accordion.css";

const HighlightedAccordion = ({ title, color, count, children }) => {
  return (
    <div className="highlight-accord-container">
      <div className="custom-accord accord-highlighted">
        <Accordion data-count={count} className={color}>
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

export default HighlightedAccordion;
