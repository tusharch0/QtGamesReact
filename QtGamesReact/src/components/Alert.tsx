import { ReactNode } from "react";

interface Props {
  //children: string;
  children: ReactNode; // can take params as html
  color : string;
  onClose : (alert : boolean)=> void;
}
//passing children by prop
const Alert = ({ children, color, onClose }: Props) => {
  return (
    <div className={'alert alert-' + color +' alert-dismissible'} role="alert">
       <div>{children}</div>
       <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick= {()=>onClose(false)}></button>
    </div>
  );
};

export default Alert;
