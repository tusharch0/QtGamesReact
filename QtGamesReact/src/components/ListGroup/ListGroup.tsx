import { MouseEvent } from "react";
import { useState } from "react";
import styles from './ListGroup.module.css';
import styled from 'styled-components';

const List = styled.ul`
list-style: none;
    padding: 0;
`
interface ListItemProp{
  active : Boolean;
}
const ListItem = styled.li<ListItemProp>`
padding: 5px 0;
background: ${props => props.active ?'lightblue': 'none'}
`
//{items :[], Heading : string }
interface Props {
  items: string[];
  heading: string;
  //pass function via  props 
  onSelectItem: (item: string) => void;
}
//passing data via props 
function ListGroup({ items, heading, onSelectItem }: Props) {
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
      
      <ul className={[styles.listGroup, styles.container].join(" ")} style ={{backgroundColor: 'pink',fontSize: 18} /*Inline css */}>
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
      <h1>List 2 with Styled Components</h1>
      {getMessage()}
      <List >
        {items.map((item, index) => (
          <ListItem
           active = {index == selectedIndex}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}
export default ListGroup;
