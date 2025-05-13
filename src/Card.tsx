import type { PropsWithChildren } from "react";

export const Card = ({ children }: PropsWithChildren) => {
  return (
    <div className="card card-border bg-base-100 w-full">
      <div className="card-body">{children}</div>
    </div>
  );
};
