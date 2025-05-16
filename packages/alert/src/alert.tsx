import { Transition, Dialog as HeadlessUIDialog } from "@headlessui/react";
import {
  alertPanelBorderStyle,
  alertPanelBounderStyle,
  alertPanelStyle,
  alertPanelTextBorderStyle,
  alertPanelTitleStyle,
  panelEnterFromStyle,
  panelEnterStyle,
  panelEnterToStyle,
  panelLeaveFromStyle,
  panelLeaveStyle,
  panelLeaveToStyle,
  selectNone,
} from "./style.css";
import { ReactNode, useRef } from "react";
import { Dialog, DialogProps } from "@pretzel-ui/dialog";
import { UseIcon } from "./use-icon";
import { Action } from "./action";
import { Message } from "./message";
import { clnc } from "@eqpoqpe/classname-utils";
import {
  DialogBaseFailCallbackReason,
  DialogBaseSuccessCallbackResult,
  StatusType,
} from "./utils";

export type AlertSuccessCallbackResult = {
  confirm: boolean;
  cancel: boolean;
  additional: boolean;
} & DialogBaseSuccessCallbackResult;
export type AlertResultCallbackFn = (
  result: AlertSuccessCallbackResult
) => void;
export type AlertFailCallbackReason = {} & DialogBaseFailCallbackReason;
export type AlertProps = {
  type?: "tips" | "help" | "question" | "none";
  disturb?: boolean;
  icon?: ReactNode;
  title?: ReactNode;
  contents?: ReactNode[];
  userSelect?: "select-none" | "select-text";
  confirmText?: ReactNode;
  cancelText?: ReactNode;
  additionalText?: ReactNode;
  showCancel?: boolean;
  showAdditional?: boolean;
  confirmType?: StatusType;
  cancelType?: StatusType;
  additionalType?: StatusType;
  disabledConfirm?: boolean;
  disabledCancel?: boolean;
  disabledAdditional?: boolean;
  onClose?: AlertResultCallbackFn;
} & Omit<DialogProps, "children" | "onClose">;

export function Alert(props: AlertProps) {
  const {
    title,
    type,
    icon,
    contents,
    disturb = true,
    userSelect = "select-none",
    onClose,
    additionalText,
    additionalType,
    cancelText,
    cancelType,
    confirmText,
    confirmType,
    showAdditional,
    showCancel,
    disabledConfirm,
    disabledAdditional,
    disabledCancel,
    ...moreProps
  } = props;
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const handleBackdropClose = () => {
    onClose?.({
      additional: false,
      backdrop: true,
      cancel: false,
      confirm: false,
    });
  };

  return (
    <Dialog
      {...moreProps}
      initialFocus={titleRef}
      onClose={handleBackdropClose}
    >
      <Transition.Child
        as={"div"}
        enter={panelEnterStyle}
        enterFrom={panelEnterFromStyle}
        enterTo={panelEnterToStyle}
        leave={panelLeaveStyle}
        leaveFrom={panelLeaveFromStyle}
        leaveTo={panelLeaveToStyle}
        className={alertPanelBorderStyle}
      >
        <div className={alertPanelBounderStyle}>
          <HeadlessUIDialog.Panel className={alertPanelStyle}>
            <UseIcon icon={icon} type={type} />

            <div className={alertPanelTextBorderStyle}>
              <HeadlessUIDialog.Title
                as="h3"
                className={clnc([alertPanelTitleStyle, selectNone])}
                ref={titleRef}
              >
                {title}
              </HeadlessUIDialog.Title>
              <Message contents={contents} userSelect={userSelect} />
            </div>

            <Action
              disturb={disturb}
              additionalText={additionalText}
              additionalType={additionalType}
              cancelText={cancelText}
              cancelType={cancelType}
              confirmText={confirmText}
              confirmType={confirmType}
              showAdditional={showAdditional}
              showCancel={showCancel}
              disabledAdditional={disabledAdditional}
              disabledCancel={disabledCancel}
              disabledConfirm={disabledConfirm}
              onClose={onClose}
            />
          </HeadlessUIDialog.Panel>
        </div>
      </Transition.Child>
    </Dialog>
  );
}
