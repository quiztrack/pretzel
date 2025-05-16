import { PropsWithChildren } from "react";
import { Failed } from "./failed";
import { Fallback } from "./fallback";
import { Success } from "./success";

export const Auth = ({ children }: PropsWithChildren) => {
  return <>{children}</>;
};

Auth.Fallback = Fallback;
Auth.Success = Success;
Auth.Failed = Failed;
