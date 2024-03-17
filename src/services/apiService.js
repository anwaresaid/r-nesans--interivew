import axios from "axios";

export const getPosts = async (numberOfItems) => {
  const response = await axios.get(
    `https://randomuser.me/api?results=${numberOfItems}`
  );
  console.log("response", response.data);
  return response.data.results;
};
