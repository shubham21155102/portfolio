"use client"
import React from 'react'
import { useQuery } from "react-query";

const fetchUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};

const UserQueryComponent = () => {
    const { data, status } = useQuery("users", fetchUsers);
    console.log(data,status);
    return (
      <div className="App">
        {status === "error" && <p>Error fetching data</p>}
        {status === "loading" && <p>Fetching data...</p>}
        {status === "success" && (
          <div>
            {data.map((user:any) => (
              <p key={user.id}>{user.name}</p>
            ))}
          </div>
        )}
      </div>
    );
}

export default UserQueryComponent;
