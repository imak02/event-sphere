import axios from "axios";
import React, { useEffect, useState } from "react";

const Profile = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get("user/current-user");
        console.log(response);
        setUser(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    getUser();
  }, []);

  return (
    <div>
      <div>{user.name}</div>
      <div>{user.email}</div>
      <div>{user.username}</div>
    </div>
  );
};

export default Profile;
