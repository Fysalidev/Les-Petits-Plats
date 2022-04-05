const getData = async () =>
  fetch("data/photographers.json")
    .then((res) => res.json())
    .catch((err) => console.log("CALL API | an error occurs", err));
