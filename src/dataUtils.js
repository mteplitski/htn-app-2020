import axios from 'axios';

const BASE_URL = "https://hackthenorth.netlify.com/api/";
const PROFILE_URL = "fe-challenge-attendee";
const DOGGO_URL = "https://dog.ceo/api/breeds/image/random";

export const get = (url, args={}) => {
    const argsArr = Object.entries(args);
    let queryArgs = args.length > 0  ? '?' : '';
    for(const [key, value] of argsArr) {
        queryArgs += `${key}=${value}`;
    }
    const full_url = BASE_URL + url + queryArgs;
    const res = axios.get(full_url);
    return res;
}

export const getProfile = (id = null) => {
    if(!id){
        return get(PROFILE_URL);
    }
    return get(PROFILE_URL, { id });
}

export const getDoggo = () => {
    return axios.get(DOGGO_URL);
}