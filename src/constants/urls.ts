const baseURL = "https://api.themoviedb.org/3"


const movie = "/movie"
const genre = "/genre"

const urls = {
    movie: {
        link: "/discover" + movie,
        search_link: "/search" + movie,
        byId: (id:number):string => `${movie}/${id}`,
        // byGenreId: (with_genres:number, page:string):string => `/discover${movie}?with_genres=${with_genres}&page=${page}`,
        // byWord: (word:string, page:string):string => `/search/movie?query=${word}&page=${page}`
    },
    genre: {
        link: `${genre}${movie}/list`,
        byId: (id:number):string => `${genre}/${id}`,
    }
}

export {
    baseURL,
    urls
}

