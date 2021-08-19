// const newPromise = new Promise((resolve, reject) => {
//   const status = false;

//   if (status) {
//     resolve("Data");
//   } else {
//     reject("Denied");
//   }
// });

// newPromise
//   .then((response) => console.log(response))
//   .catch((err) => console.log(err));

// const axios = new XMLHttpRequest();

// axios.open("GET", "https://jsonplaceholder.typicode.com/posts");

// axios.onload = () => {
//   console.log(JSON.parse(axios.response));
// };

// axios.send();

const axios = {
  get: (link) => {
    return new Promise(function (resolve, reject) {
      const newRequest = new XMLHttpRequest();

      newRequest.open("GET", link);

      newRequest.responseType = "json";

      newRequest.onload = () => {
        resolve(newRequest.response);
      };

      newRequest.onerror = () => {
        reject("Xato bizdan");
      };

      newRequest.onabort = () => {
        reject("Xato serverdan");
      };

      newRequest.send();
    });
  },
};

// axios
//   .get("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => console.log(response))
//   .catch((err) => console.log(err));


async function axiosFunc() {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
      const data = response;
      console.log(data);
    }
    catch(err){
      console.log("error", err)
    }
  }

  axiosFunc();