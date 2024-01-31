import React, { useState } from "react";
import "./RealAppClone.css";
import Header from "../Appclone/Header";
import Footer from "../Appclone/Footer";

const RealAppClone = () => {
  const [data, setData] = useState({
    title: "",
    content: "",
  });

  const [items, setItems] = useState([]);

  const addValue = () => {
    if (!data.title || !data.content) {
      return;
    } else {
      setItems([...items, data]);
    }
    setData({ title: "", content: "" });
  };

  const deleteValue = index => {
    const deleteItem = items.filter((_, i) => i !== index);
    setItems(deleteItem);
  };

  const allDelete = () => {
    setItems([]);
  }

  return (
    <div>
      <Header />
      <div className="RealAppClone">
        <div className="partOne">
          <div className="RealAppClone_box">
            <input
              placeholder="Title..."
              id="myInput"
              value={data.title}
              onChange={e =>
                setData(prevData => ({ ...prevData, title: e.target.value }))
              }
            />
            <textarea
              placeholder="Content..."
              id="myInput"
              value={data.content}
              onChange={e =>
                setData(prevData => ({ ...prevData, content: e.target.value }))
              }
            />
            <button onClick={addValue}>Add Item</button>
          </div>
          <button onClick={allDelete}>All Notes Delete</button>
        </div>
        <div className="partTwo">
          {items.map((item, id) => (
            <div key={id} className="appClass">
              <div>
                <strong>Title:</strong> {item.title}
              </div>
              <div>
                <strong>Content:</strong> {item.content}
              </div>
              <button onClick={() => deleteValue(id)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RealAppClone;
