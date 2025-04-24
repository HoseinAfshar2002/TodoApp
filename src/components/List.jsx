const List = ({ title, text, id, addTodo, listTodo }) => {
  const handelDeleteTodo = () =>{//ایجاد یک هندلر برای پاک کردن تودو 
    const filterTodo = listTodo.filter(h => h.id !== id) //روی باتن حذف که کلیک شد ای دی ان را با ای دی همه تودو ها مقایسه کن و ای هر کدام با ان یکی بود ان را نمایش نده یا حذف کن و فیلتر کن
    addTodo(filterTodo)
    
    } 
  return (
    <div className="list-box">
      <div className="box">
        <h3>{title}</h3>
        <button onClick={handelDeleteTodo}>حذف</button>
      </div>

      <p>{text}</p>
    </div>
  );
};

export default List;
