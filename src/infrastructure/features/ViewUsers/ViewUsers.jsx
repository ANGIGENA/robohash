"use client";
import { useEffect, useState } from "react";
import styles from "./Styles.module.css";
import { getUsers } from "@/infrastructure/domain/services/Users/Users.services";

function ViewUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    const response = await getUsers();

    setUsers(response);
  }

  return (
    <div>
      {users?.map((user) => {
        return <span>{user.name}</span>;
      })}
    </div>
  );
}
export default ViewUsers;
