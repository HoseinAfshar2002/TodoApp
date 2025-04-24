import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
// تو کامپوننت اد قراره یه تودوی جدید بسازیم.
// برای این کار از یوزاستیت استفاده شده تا اطلاعات تودوی جدید (مثل عنوان، متن، و ای دی) رو نگه داریم.

const Add = ({ addTodo, listTodo }) => {
  const [newTodo, setNewTodo] = useState({ //نیو تودو یه ابجکته که مقادیر خالی زیر رو دربر میگیره و ست نیو تو دو اون ستری هست که مقدار ورودی رو درون مقدار ابجکت نیو تودو مقدار دهی میکنه
    title: "",
    text: "",
    id: 0,
  });

  const addNewTodo = () => { // این کد برای اینه که باکس ها بعد از ارسال خالی بشه و اگر تایتل مقدار نداشت ارسال نشه
    if (newTodo.title) {
      addTodo([...listTodo, newTodo]);
      setNewTodo({
        title: "",
        text: "",
        id: 0,
      });
    }
  };
  return (
    <div className="add-box">
      <h2>Todo App</h2>
      <input
        type="text"
        placeholder="type title"
        value={newTodo.title}
        onChange={(e) => {
          setNewTodo({ ...newTodo, title: e.target.value, id: uuidv4() });
        }}
      />
      <textarea
        name=""
        id=""
        value={newTodo.text}
        placeholder="type text"
        onChange={(e) => {
          setNewTodo({ ...newTodo, text: e.target.value, id: uuidv4() });
        }}
      ></textarea>
      <button onClick={addNewTodo}>submit todo</button>
    </div>
  );
};

export default Add;
