// useEffect(() => {
//     const fetchData = async () => {
//         const res = await axios.get(`${url}`, {
//             params: {
//                 q: "horse",
//                 api_key: `${api}`
//             },
//         })
//         setGifs(res.data.data[0].images.fixed_height.url);
//     }
//     fetchData();
// }, []);

//const api = "33T3PDkgr1pSJ0KAWh6ZL0jIDz6lYNtT";
//const url = `https://api.giphy.com/v1/gifs/search?api_key=${api}`;