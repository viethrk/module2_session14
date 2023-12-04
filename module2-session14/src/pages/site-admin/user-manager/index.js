import { useEffect, useState } from "react";
import { createUser, getUsers } from "../../../api/user-api";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const UserManager = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [listUser, setListUser] = useState([]);

  useEffect(() => {
    initPage();
  }, []);

  const initPage = async () => {
    const listUserApi = await getUsers();
    setListUser(listUserApi);
  };

  const onCreateUser = async () => {
    // lay gia tri input
    // document.getxxxByxxx
    const user = {
      name: userName,
      age: userAge,
      address: userAddress,
    };
    await createUser(user);
    initPage();
  };

  const navigate = useNavigate();

  // redux
  const isAdminLoginState = useSelector((storeState) => {
    return storeState.isAdminLoginState;
  });

  if (!isAdminLoginState) {
    navigate("/");
    return;
  }

  return (
    <div style={{ width: "50%" }}>
      <h2>Quản lý người dùng</h2>
      <div>
        <input
          id="user-name"
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
        <input
          value={userAge}
          onChange={(event) => setUserAge(event.target.value)}
        />
        <input
          value={userAddress}
          onChange={(event) => setUserAddress(event.target.value)}
        />
        <button onClick={onCreateUser}>Add user</button>
      </div>
      <div>
        <h4>Danh sách người dùng trong hệ thống</h4>
        {listUser.map((user) => {
          return (
            <div
              key={user.id}
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div>{user.id}</div>
              <div>{user.name}</div>
              <div>{user.age}</div>
              <div>{user.address}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserManager;
