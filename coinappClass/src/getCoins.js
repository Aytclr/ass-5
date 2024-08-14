import axios from "axios"
import displayCoins from "./displayCoins.js"
//* named export
// export const getCoins = (query) => {
//   console.log(query);
//   const url = `https://api.coinranking.com/v2/coins?search=${query}`;

//   const options = {
//     headers: {
//       "x-access-token":
//         "coinranking3753c1847a9cdaadc193980cbd59edfcd1aa67efdb0fa6e9",
//     },
//     // method:"POST"
//   };

//   fetch(url, options)
//     .then((response) => response.json())
//     .then((result) => console.log(result));
// };

// export const getCoins = async (query) => {
//   console.log(query);
//   const url = `https://api.coinranking.com/v2/coins?search=${query}`;

//   const options = {
//     headers: {
//       "x-access-token":
//         "coinranking3753c1847a9cdaadc193980cbd59edfcd1aa67efdb0fa6e9",
//     },
//     // method:"POST"
//   };
//   try {
//     const res = await fetch(url, options);
//     const coinData = await res.json();
//     console.log(coinData);
//   } catch (error) {
//     console.error(error)
//   }
// };

export const getCoins = async (query) => {
  console.log(query);
  const url = `https://api.coinranking.com/v2/coins?search=${query}`;

  const options = {
    headers: {
      "x-access-token":
        "coinranking3753c1847a9cdaadc193980cbd59edfcd1aa67efdb0fa6e9",
    },
    // method:"POST"
  };
  try {
     const res = await axios(url,options) //* otomatik json
    //  console.log(res)
     console.log(res.data)
     //* axios veriyi her zaman data keyinde verir. res den sonra yazdığımız data axiosa ait. ikinic data da api dean gelen veri data objesinde geldiği için
     if(!res.data.data.coins.length){
        alert("Coin not found!")
     }else{
        displayCoins(res.data.data.coins[0]);
     }
  } catch (error) {
    console.error(error);
  }
};
