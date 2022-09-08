import React, { useState } from "react";

export const NewRoomForm = (props) => {
  const [name, setName] = useState("");
  const [area, setArea] = useState(undefined); //Starts out as undefined since it will be a number.
  const handleAreaInput = (event) => {
    const integer = parseInt(event.target.value, 10);
    setArea(integer >= 0 ? integer : "");
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (name && area) {
      props.addNewRoom({ name, area });
      setName("");
      setArea("");
    } else {
      console.log("invalid input");
    }
  };

  return (
    <div>
      <br />
      <div className="newRooms">
        <h4>Add a new room</h4>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="name"
            onChange={(event) => setName(event.target.value)}
            value={name}
          />
          <input
            type="text"
            placeholder="area"
            onChange={handleAreaInput}
            value={area}
          />
          <button type="submit">Add Room</button>
        </form>
      </div>
    </div>
  );
};
