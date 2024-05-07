import { PropsWithChildren } from "react";
import { container, todoPageStyle } from "./index.css";

function Container({ children }: PropsWithChildren) {
  return (
    <div className={container}>
      <main className={todoPageStyle}>{children}</main>
    </div>
  );
}
export default Container;
