import axios from 'axios';

export const getData = async (url) => {
    try {
      const request = await axios.get(
        url
      );
      return request;
    } catch (error) {
      console.log(error)
    }
  };
