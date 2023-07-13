import React, { ReactNode } from "react";

type BasicContainerProps = {
  children: ReactNode;
};

const BasicContainer: React.FC<BasicContainerProps> = ({ children }) => {
  return <div style={{ width: "80%", height: "80%", }}>{children}</div>;
};

export default BasicContainer;
