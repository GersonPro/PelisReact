import axios from "axios"
const api_key = `166a2d5aac743d61e561ad2ad0fcb67a`
const API_URL = `https://api.themoviedb.org/3/movie/`
const API_URL2 = "https://api.themoviedb.org/3";
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNjZhMmQ1YWFjNzQzZDYxZTU2MWFkMmFkMGZjYjY3YSIsInN1YiI6IjY0NjNkNzhlZTNmYTJmMDEwM2EyOTU3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Str52KXd29AKliw47hHrtwHrgo1x8HQZGCGrMWoICvQ'
    }
  };
  

//get info oclombia 
export const getPelisInfo = async () => {
    try {
        const response = await axios.get(`${API_URL}/popular?api_key=${api_key}`, options);
        return response.data.results;
      } catch (error) {
        console.error('error:', error);
        return [];
      }
}

export const getPelisAccion = async () => {
  try {
    const response = await axios.get(`${API_URL2}/discover/movie`, {
      params: {
        api_key: api_key,
        with_genres: 35,
      },
      ...options,
    });
    var a = console.log(response.data.results)
    return response.data.results;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
};

export const getPelisComedia = async () => { 
  try {
    const response = await axios.get(API_URL2, {
      params: {
        api_key: api_key,
        query: "comedia",
      },
      ...options,
    });
    return response.data.results;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
}
export const getPelisDrama = async () => { 
  try {
    const response = await axios.get(API_URL2, {
      params: {
        api_key: api_key,
        query: "Drama",
      },
      ...options,
    });
    return response.data.results;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
}


export const getBuscarPeliculas = async (id) => {
  try {
    const response = await axios.get(API_URL2, {
      params: {
        api_key: api_key,
        query: id, // Utiliza el parámetro 'id' proporcionado
      },
      ...options,
    });
    return response.data.results;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
};

export const getPelisInfoId = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`, {
      params: {
        api_key: api_key,
      },
      ...options,
    });
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
};
export const fetchVideoUrl = async (movieId) => {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${api_key}`);
    if (response.data.results.length > 0) {
      const videoKey = response.data.results[0].key;
      const videoUrl = `https://www.youtube.com/watch?v=${videoKey}`;
      return videoUrl;
    } else {
      return null;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};
