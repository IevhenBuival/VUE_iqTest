const fetchData = async () => {
  try {
    const res = await fetch("https://swapi.dev/api/films/1/");
    const data = await res.json();
    return { result: "ok", data: data };
  } catch (error) {
    return { result: "error", error: error };
  }
  /* .then((response) => response.json())
    .then((json) => {
      return { result: "ok", data: json };
    })
    .catch((error) => {
      console.log(error);
      return { result: "error", error: error };
    });*/
};

export default fetchData;
