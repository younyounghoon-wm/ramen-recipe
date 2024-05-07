"use client";

import { Provider } from "jotai";
import { PropsWithChildren } from "react";

function ClientProvider({ children }: PropsWithChildren) {
  return <Provider>{children}</Provider>;
}
export default ClientProvider;
