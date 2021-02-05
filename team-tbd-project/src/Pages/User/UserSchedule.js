import React from "react";
import "../../App/App.css";
import UserScheduler from "../../Components/UserScheduler";

function UserSchedule(props) {
  return (
    <div className="UserSchedule">
      <UserScheduler {...props}/>
    </div>
  );
}

export default UserSchedule;