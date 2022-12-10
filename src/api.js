import axios from "axios";

const searchImages = async (term) => {
  // axios
  const responseAxios = await axios.get(
    "https://api.unsplash.com/search/photos",
    {
      headers: {
        Authorization: "Client-ID 8O50V7bNzfKdVixwS9W9nZVdr0VnrCv9gmeimfdvp6Y",
      },
      params: {
        query: term,
      },
    }
  );

  // // fetch
  // const responseFetch = await fetch("https://api.unsplash.com/search/photos")
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log(data);
  //   });

  // console.log(responseFetch);
  return responseAxios.data.results;
};

export default searchImages;
