import { useState } from "react";
import Add from "./components/Add";
import List from "./components/List";
import "bootstrap/dist/css/bootstrap.min.css"; //ایمپورت بوت استرپ
function App() {
  const [listTodo , addTodo] = useState([ //یه تابغ برای نمایش لیست و تابع بعدی هم برای تغییر مقدار داخل لیست 
    {id:0,title:'Gym Time',text:'Go To Gym 07:30-09:30 :)'}
  ])
  return (
    <div className="bg"> 
      <div className="container">
        <div className="main row">
          <div className="col-md-6 h-100">
            <Add addTodo={addTodo} listTodo={listTodo} />
          </div>
          <div className="col-md-6 h-100">
            {listTodo.map(h=>(

           
            <List
            title={h.title}
            text={h.text}
            // key={h.id}
            id={h.id}
            addTodo={addTodo}
            listTodo={listTodo}
            
            /> 
            ))}
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
