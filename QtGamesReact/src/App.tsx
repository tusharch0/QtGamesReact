import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import './App.css';
import { IoCalendarNumber } from "react-icons/io5";
import Like from "./components/Like";
function App() {
  let items = ["New York", "London", "Tokyo", "paris", "Delhi"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  const handleClick = (alert: boolean) => { setAlertVisibility(alert);}
  const [alertVisible, setAlertVisibility ]= useState(false);
  const [likeActive, setLikeActive]= useState(false);
  const handleLikeClick = (active: boolean) => {setLikeActive(active)}
  return (
    <div>
      {" "}
      {alertVisible &&
      <Alert color="success" onClose={handleClick}>
        {" "}
        All <span>Working</span> Good{" "}
      </Alert>}
      <p>Hit a like <Like isActive={likeActive} onclick={handleLikeClick} /></p>
      <p>React Icon <IoCalendarNumber color="green" size="20"></IoCalendarNumber></p> 
      <ListGroup items={items} heading="city" onSelectItem={handleSelectItem} />
      <Button color="primary" onClick={handleClick} name="Submit"></Button>
    </div>
  );
}
export default App;
