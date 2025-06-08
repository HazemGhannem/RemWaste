import axios from "axios";

export const getSkips = async () => {
  const url = `${process.env.REACT_APP_API_URL}`;
  const response = await axios.get(url);
  return response.data;
};
