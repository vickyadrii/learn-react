import React, { useEffect, useState } from "react";

const App = () => {
  const [users, setUsers] = useState([]);

  // Fetch user data
  const fetchUserData = async () => {
    const url = "https://jsonplaceholder.typicode.com/users";

    try {
      const response = await fetch(url);

      if (!response.ok) {
        console.log("Error nih");
      }

      const responseData = await response.json();
      setUsers(responseData);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(users);

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
      }}
    >
      {/* {users.map((data, index) => (
        <div
          key={data?.id}
          style={{
            background: "#e1bbbb",
            padding: "24px",
          }}
        >
          <p>Data ke -{index + 1}</p>
          <p>Name :{data?.name}</p>
          <p>Age :{data?.email}</p>
        </div>
      ))} */}

      {users.map((user, index) => {
        // 
        const indexing = index + 1;

        return (
          <div
            key={user?.id}
            style={{
              background: "#e1bbbb",
              padding: "24px",
            }}
          >
            <p>Data ke -{indexing}</p>
            <p>Name :{user?.name}</p>
            <p>Age :{user?.email}</p>
            <p>Latitude :{user?.address?.geo?.lat}</p>
          </div>
        );
      })}
    </div>
  );
};

export default App;
