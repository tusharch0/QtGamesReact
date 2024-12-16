import { MouseEvent } from "react";
import { useState } from "react";
//{items :[], Heading : string }
interface Props {
  items: string[];
  heading: string;
  //pass function via  props 
  onSelectItem : (item: string) => void;
}
//passing data via props 
function ListGroup({items ,heading, onSelectItem} : Props) {
  //let items = ["New York", "London", "Tokyo", "paris", "Delhi"];
  //Conditional handler
  const getMessage = () => {
    return items.length === 0 && <p> No item found</p>;
  };
  //event handler
  const handleClick = (event: MouseEvent) => console.log(event);
  //manage state (hook)
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [selectedName, setSelectedName] = useState("");
  return (
    <>
      <h1 onClick={handleClick}>{heading}</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active "
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
