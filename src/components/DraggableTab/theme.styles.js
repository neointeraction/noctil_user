import styled from "styled-components";
import { styled as styledTabTab } from "react-tabtab";

let { TabListStyle, ActionButtonStyle, TabStyle, PanelStyle } = styledTabTab;

export const TabListStyled = styled(TabListStyle)`
  background: transparent;
`;

export const TabStyled = styled(TabStyle)`
  padding: 8px 10px 8px 10px;
  background: #dcdedf;
  border: 1px solid #cfcfcd;
  border-top: 4px solid #dcdedf;
  font-weight: 400;
  font-size: 14px;
  color: #435055;
  &[aria-selected="true"] {
    background: #ffffff;
    border-top: 4px solid #ff5c00;
    border-left: 1px solid #ff5c00;
    border-right: 1px solid #ff5c00;
    border-bottom: 1px solid #ffffff;
  }
`;

export const ActionButtonStyled = styled(ActionButtonStyle)`
  // write css
`;

export const PanelStyled = styled(PanelStyle)`
  background: transparent;
  margin-left: -40px;
`;
