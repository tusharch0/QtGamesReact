import React from "react";
import { FaRegHeart } from "react-icons/fa";
import styles from './Like.module.css';
interface LikeProp{
    onclick : (active: boolean)=> void;
    isActive : boolean;
}
const Like = ({onclick, isActive}:LikeProp)=>{
    return(
    <div>
        <FaRegHeart className={isActive? styles.active : ""}  onClick={() =>onclick(!isActive)}></FaRegHeart>
    </div>);
};
export default Like; 