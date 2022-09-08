import React from "react";
import { EditHouseForm } from "../Forms/EditHouseForm";
import { NewRoomForm } from "../Forms/NewRoomForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import Button from "react-bootstrap/Button";
import { housesApi } from "../../rest/housesApi";

export const House = (props) => {
  const { house, updateHouse } = props;

  const deleteHouse = async (houseId) => {
    console.log("deleteHouse ID:", houseId);
    await housesApi.delete(houseId);
    //Updates the state after the current houses have been updated.
    updateHouse();
  };

  const deleteRoom = (roomId) => {
    const updatedHouse = {
      //If delete a room remove the room from the array.
      ...house,
      rooms: house.rooms.filter((x) => x._id !== roomId),
    };
    updateHouse(updatedHouse);
  };

  const addNewRoom = (room) => {
    return updateHouse({ ...house, rooms: [...house.rooms, room] });
  };

  //function to check if the room name is null or empty
  const checkRoomName = (room) => {
    // console.log("Shows a room object:", room); //Shows a room object in the console

    //If the room name is null or empty return an empty string
    if (room === null || room === "") {
      return "";
    }
    //If the room name is not null or empty return the room name
    else {
      return room.name;
    }
  };

  //function to check if the room area is null or empty
  const checkRoomArea = (room) => {
    //If the room area is null or empty return an empty string
    if (room === null || room === "") {
      return "";
    }
    //If the room area is not null or empty return the room area
    else {
      return room.area;
    }
  };

  const rooms = (myRoom) => (
    <div className="roomsBody">
      <br />
      {/* {console.log("Myrroom", myRoom)} */}
      <ul className="allRooms">
        {house.rooms.map((room, index) => (
          <div className="roomsBody" key={index}>
            <div className="houseRoom">
              <label>
                <strong>{` Room:`}</strong>&nbsp;
                <span className="roomName">{checkRoomName(room)}</span>
                <strong>{` Area: `}</strong>
                <span className="roomArea">{checkRoomArea(room)}</span> &nbsp;
              </label>

              <Button
                variant="danger"
                onClick={(event) => deleteRoom(room._id)}
              >
                Delete
              </Button>
            </div>
            <br />
          </div>
        ))}
      </ul>
      <br />
    </div>
  );
  //Returns the entire house component
  return (
    <div className="house">
      <h1 className="houseTitle">
        <FontAwesomeIcon icon={solid("house-user")} />
        {house.name}
      </h1>
      {/* button to delete a house */}
      <Button variant="danger" onClick={(event) => deleteHouse(house._id)}>
        {" "}
        Delete{" "}
      </Button>
      <EditHouseForm houseId={house._id} updateHouse={updateHouse} />
      {rooms({ rooms, houseId: house._id, deleteRoom })}
      <NewRoomForm addNewRoom={addNewRoom} />
    </div>
  );
};
