import { ReactNode } from "react";

interface Props {
  //children: string;
  children: ReactNode; // can take params as html
}
//passing children by prop
const Alert = ({ children }: Props) => {
  return (
    <div className="alert alert-success" role="alert">
      {children}
    </div>
  );
};

export default Alert;
