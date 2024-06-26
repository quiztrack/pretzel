// Dialog
//
// Copyright (c) 2023 Ryan Martin

/* --------------------------------------------------------------------------
 *  base component
 * ------------------------------------------------------------------------*/

import { Dialog as HeadlessUIDialog, Transition } from "@headlessui/react";
import { Fragment, MutableRefObject, PropsWithChildren } from "react";
import {
  backdropBaseStyle,
  backdropEnterFromStyle,
  backdropEnterStyle,
  backdropEnterToStyle,
  backdropLeaveStyle,
  backdropLeaveFromStyle,
  backdropLeaveToStyle,
  dialogBaseStyle,
  dialogPanelBaseStyle,
  backdropBackgroundStyle,
} from "./style.css";
import { clnc } from "@eqpoqpe/classname-utils";

export type DialogProps = PropsWithChildren<{
  on: boolean;
  backdrop?: boolean;
  initialFocus?: MutableRefObject<HTMLElement | null>;
  backdropBackground?: string;
  onClose?: () => void;
}>;

export function Dialog(props: DialogProps) {
  const { on, children, backdrop, initialFocus, backdropBackground, onClose } =
    props;
  const handleBackdropClose = () => {
    if (backdrop) onClose?.();
  };

  return (
    <Transition appear show={on} as={Fragment}>
      <HeadlessUIDialog
        as="div"
        initialFocus={initialFocus}
        className={dialogBaseStyle}
        onClose={handleBackdropClose}
      >
        <Transition.Child
          as={Fragment}
          enter={backdropEnterStyle}
          enterFrom={backdropEnterFromStyle}
          enterTo={backdropEnterToStyle}
          leave={backdropLeaveStyle}
          leaveFrom={backdropLeaveFromStyle}
          leaveTo={backdropLeaveToStyle}
        >
          <div
            className={clnc([
              backdropBaseStyle,
              backdropBackground ? backdropBackground : backdropBackgroundStyle,
            ])}
            aria-hidden="true"
          ></div>
        </Transition.Child>

        <div className={dialogPanelBaseStyle}>{children}</div>
      </HeadlessUIDialog>
    </Transition>
  );
}
