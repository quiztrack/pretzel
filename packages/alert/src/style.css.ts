import { ComplexStyleRule, style, styleVariants } from "@vanilla-extract/css";
import { StatusType } from "./utils";

const alertPanelBorderStyle = style({
  width: "100%",
  height: "100%",
  textAlign: "center",
  overflowX: "hidden",
  overflowY: "auto",
  "::-webkit-scrollbar": {
    display: "none",
  },
});

const alertPanelBounderStyle = style({
  width: "100%",
  minHeight: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  boxSizing: "border-box",
  paddingTop: "19px",
  paddingBottom: "19px",
});

const alertPanelStyle = style({
  width: "100%",
  maxWidth: "270px",
  height: "fit-content",
  backgroundColor: "#ffffffa1",
  backgroundBlendMode: "color-dodge",
  borderRadius: "14px",
  boxSizing: "border-box",
  backdropFilter: "blur(40px)",
  paddingTop: "19px",
  paddingBottom: "0px",
  boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
});

const alertPanelTitleStyle = style({
  color: "#000000",
  alignSelf: "stretch",
  textAlign: "center",
  fontFeatureSettings: "'clig' off, 'liga' off",
  fontFamily: "SF Pro",
  fontSize: "17px",
  fontStyle: "normal",
  fontWeight: "590",
  lineHeight: "22px",
  letterSpacing: "-0.4px",
});

const dialogPanelMessageBase = style({
  marginTop: "2px",
  marginBottom: "2px",
});

const dialogPanelMessageContentStyle = style({
  color: "#000000",
  alignSelf: "stretch",
  textAlign: "center",
  fontFeatureSettings: "'clig' off, 'liga' off",
  fontFamily: "SF Pro",
  fontSize: "13px",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "18px",
  letterSpacing: "-0.3px",
});

const alertPanelTextBorderStyle = style({
  boxSizing: "border-box",
  paddingLeft: "16px",
  paddingRight: "16px",
  paddingBottom: "15px",
});

const panelEnterStyle = style({
  transitionTimingFunction: "ease-out",
  transitionDuration: "200ms",
});

const panelEnterFromStyle = style({
  opacity: 0,
  transform: "scale(1.09)",
});

const panelEnterToStyle = style({
  opacity: 100,
  transform: "scale(1)",
});

const panelLeaveStyle = style({
  transitionTimingFunction: "ease-in",
  transitionDuration: "100ms",
});

const panelLeaveFromStyle = style({
  opacity: 100,
  transform: "scale(1)",
});

const panelLeaveToStyle = style({
  opacity: 0,
  transform: "scale(1)",
});

const alertIconBorderStyle = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  paddingTop: "20px",
  paddingLeft: "0px",
  paddingRight: "0px",
  paddingBottom: "14px",
});

const alertActionBaseStyle = style({
  width: "100%",
  background: "transparent",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const alertActionButtonStyle = style({
  width: "100%",
  height: "fit-content",
  color: "#007AFF",
  background: "transparent",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "S007AFFF PRO",
  fontFeatureSettings: "'clig' off, 'liga' off",
  fontSize: "17px",
  fontStyle: "normal",
  textAlign: "center",
  lineHeight: "22px",
  letterSpacing: "-0.4px",
  paddingTop: "11px",
  paddingBottom: "11px",
  outline: "none",
  border: "none",
  borderTopWidth: "1px",
  borderTopStyle: "solid",
  borderColor: "#3C3C4321",
  userSelect: "none",
  position: "relative",
});

const alertActionButtonContentSpanStyle = style({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  selectors: {
    ["&.disabled"]: {
      opacity: "0.3",
    },
  },
});

const alertActionConfirmButtonStyle = style({
  fontWeight: "590",
});

const alertActionCancelButtonStyle = style({
  fontWeight: "400",
});

const alertActionAdditionalButtonStyle = style({
  fontWeight: "400",
});

const textType = styleVariants<{
  [key in StatusType]: ComplexStyleRule;
}>({
  fail: {
    color: "#FF3B30",
  },
  success: {
    color: "#007AFF",
  },
  warn: {
    color: "#f5a623",
  },
});

const selectText = style({
  userSelect: "text",
});

const selectNone = style({
  userSelect: "none",
});

export {
  alertPanelBorderStyle,
  alertPanelBounderStyle,
  alertActionButtonContentSpanStyle,
  alertPanelStyle,
  alertPanelTitleStyle,
  panelEnterStyle,
  panelEnterFromStyle,
  panelEnterToStyle,
  panelLeaveFromStyle,
  panelLeaveStyle,
  panelLeaveToStyle,
  dialogPanelMessageBase,
  dialogPanelMessageContentStyle,
  alertPanelTextBorderStyle,
  alertIconBorderStyle,
  alertActionBaseStyle,
  alertActionButtonStyle,
  alertActionConfirmButtonStyle,
  alertActionCancelButtonStyle,
  alertActionAdditionalButtonStyle,
  textType,
  selectText,
  selectNone,
};
