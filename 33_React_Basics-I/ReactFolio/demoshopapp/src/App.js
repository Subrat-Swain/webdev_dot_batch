import logo from './logo.svg';
import './App.css';
import  Item from './components/Item';
import ItemDate from './components/ItemDate';
import Card from './components/Card';

// Not valid js syntax it will give error then how it works as it is JSX code: JavaScript XMl
function App() {
  // way two of accessing props : using placeholder
  const itemTwoName = "SurfExcel";

  const response = [
    {
      itemName: "Nirma",
      itemDate: "20",
      itemMonth: "June",
      itemyears: "1998"
    },
    {
      itemName: "Nirma2",
      itemDate: "25",
      itemMonth: "Sept",
      itemYear: "2000"
    },
    {
      itemName: "Nirma3",
      itemDate: "35", 
      itemMonth: "June",
      itemYear: "2024"
    }
  ]
  return (
    <div>
      <Card>
        <Item name={response[0].itemName}>Hello Jee I'm first Item</Item>
        <ItemDate day={response[0].itemDate} month={response[0].itemMonth} year={response[0].itemYear}></ItemDate>

        <Item name={response[1].itemName}></Item>
        <ItemDate day={response[1].itemDate} month={response[1].itemMonth} year={response[1].itemYear}></ItemDate>

        <Item name={response[2].itemName}></Item>
        <ItemDate day={response[2].itemDate} month={response[2].itemMonth} year={response[2].itemYear}></ItemDate>
        <div className="App">
        Hello Jee
        </div>
      </Card>
      
    </div>
  );
}

export default App;
