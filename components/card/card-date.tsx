import formatDate from "@/helpers/formatDate";
import React, { ReactNode } from "react";

type CardDateProps = {
  children: ReactNode;
};

export default function CardDate({ children }: CardDateProps) {
  const getStringFromChildren = (node: ReactNode): string =>
    typeof node === "string" ? node : "";
  const stringFromChildren = getStringFromChildren(children);
  const formattedDate = formatDate(stringFromChildren);

  return <time dateTime={formattedDate}>{formattedDate}</time>;
}
