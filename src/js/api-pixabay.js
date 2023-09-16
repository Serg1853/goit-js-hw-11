import axios from 'axios';



const URL = "https://pixabay.com/api/";
const KEY = '39449848-cd78062f4e5f4efb3b0cd07e5';

export async function fetchGallery(q, page, perPage) {
  const url = `${URL}?key=${KEY}&q=${q}&page=${page}&per_page=${perPage}&image_type=photo&orientation=horizontal&safesearch=true`;
  const response = await axios.get(url);
  return response.data;
};

// export async function fetchGallery(q, page, perPage) {
//   const options = {
//     method: 'get',
//     url: 'https://pixabay.com/api/',
//     params: {
//       key: '39449848-cd78062f4e5f4efb3b0cd07e5',
//       q: `${q}`,
//       image_type: 'photo',
//       orientation: 'horizontal',
//       safesearch: true,
//       page: '`${page}`',
//       per_page: '`${perPage}`',
//     },
//   };
//   try {
//     const response = await axios(options);
//     return response.data;
    
//   } catch (fetchError) {
//     console.error(error);
//   }
// }
