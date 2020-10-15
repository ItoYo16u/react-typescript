import * as React from "react";

type Callback = {
  (): void;
};

interface IProps {
  onTap: Callback;
}

export const Clickable: React.FC<IProps> = ({ onTap, children }) => {
  return <div onClick={(_) => onTap()}>{children}</div>;
};
