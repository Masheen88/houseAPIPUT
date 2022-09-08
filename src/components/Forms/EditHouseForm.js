import React, { useState } from "react";
import { housesApi } from "../../rest/housesApi";
import Button from "react-bootstrap/Button";

export const EditHouseForm = (props) => {
  const { house, updateHouse } = props;
  const houseId = props.houseId;
  const [houseName, setName] = useState("");

  const onSubmit = (event) => {
    // console.log(houseId);
    console.log("onSubmit event:", event);
    event.preventDefault();
    console.log("onSubmit housename:", houseName);

    housesApi.putTest(houseId, houseName);
    setName("");
    updateHouse(houseName);
  };

  return (
    <div className="editHouseBody">
      <h3>Edit a House</h3>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Don't like your house, rename it! :)"
          onChange={(event) => setName(event.target.value)}
          value={houseName}
          style={{ width: "350px" }}
        />
        &nbsp;
        <Button variant="success" type="submit">
          Edit Current House
        </Button>
      </form>
    </div>
  );
};
