import axios from "axios"
import type { UserListResponse } from "../interfaces/reqres.response"

export const loadUserActions = async (page: number) => {

  try {
    const { data } = await axios.get<UserListResponse>(`https://reqres.in/api/users`, {
      headers: { 'x-api-key': 'reqres_e7aa0d19e025493ca8664068981f284c' },
      params: {
        page: page
      }
    });

    return data.data;

  } catch (error) {
    console.log(error);
    return [];
  }
}