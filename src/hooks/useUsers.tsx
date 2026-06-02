import { useEffect, useRef, useState } from "react"
import { type User } from "../interfaces/reqres.response"
import { loadUserActions } from "../actions/load-users.action"

export const useUsers = () => {

  const [users, setUsers] = useState<User[]>([])
  const currectPageRef = useRef(1);

  useEffect(() => {
    loadUserActions(1)
      .then(users => setUsers(users))
  }, []);

  const nextPage = async () => {

    currectPageRef.current++;
    const users = await loadUserActions(currectPageRef.current);

    if (users.length > 0) {
      setUsers(users);
    } else {
      currectPageRef.current--;
    }
  }

  const prevPage = async () => {
    if (currectPageRef.current < 1) return;

    currectPageRef.current--;

    const users = await loadUserActions(currectPageRef.current);
    setUsers(users);
  }

  return {
    users,

    nextPage,
    prevPage
  }
}