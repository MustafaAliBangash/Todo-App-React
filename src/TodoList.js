import React, { useState } from "react";

export default function Todolist() {
  const [activity, setActivity] = useState();
  const [listData, setListData] = useState([]);

  function addActivity() {
    // setListData([...listData, activity]);
    // console.log(listData);
    setListData((listData) => {
      const updatedList = [...listData, activity];
      console.log(updatedList);
      setActivity("");
      return updatedList;
    });
  }
  function removeActivity(i) {
    const updatedData = listData.filter((elem, id) => {
      return i !== id;
    });
    setListData(updatedData);
  }
  function removeAll() {
    setListData([]);
  }
  return (
    <>
      <div className="container">
        <h1>TODO LIST</h1>
        <input
          type="text"
          value={activity}
          placeholder="ADD YOUR ACTIVITY"
          onChange={(e) => {
            setActivity(e.target.value);
          }}
        />
        <button onClick={addActivity}>ADD</button>
        {listData !== [] &&
          listData.map((data, i) => {
            return (
              <>
                <p key={i} className="position">
                  <div className="listdata item">{data}</div>
                  <div className="item">
                    <button
                      className="remove"
                      onClick={() => {
                        removeActivity(i);
                      }}
                    >
                      Remove(-)
                    </button>
                  </div>
                </p>
              </>
            );
          })}
        {listData.length >= 1 && (
          <button className="removeall" onClick={removeAll}>
            Remove All
          </button>
        )}
      </div>
    </>
  );
}
