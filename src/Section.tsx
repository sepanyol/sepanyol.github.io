import type { PropsWithChildren } from "react";

export const Section = ({ children }: PropsWithChildren) => {
  return <section className="flex flex-col gap-2">{children}</section>;
};
