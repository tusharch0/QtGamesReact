import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
function App() {
  let items = ["New York", "London", "Tokyo", "paris", "Delhi"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  const handleClick = () => console.log("Button Clicked ");
  return (
    <div>
      {" "}
      <Alert>
        {" "}
        All <span>Working</span> Good{" "}
      </Alert>
      <ListGroup items={items} heading="city" onSelectItem={handleSelectItem} />
      <Button color="primary" onClick={handleClick} name="Submit"></Button>
    </div>
  );
}
export default App;
