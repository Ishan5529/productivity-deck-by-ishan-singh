import axios from "axios";

import { BASE_URL } from "./constant";

const fetchList = params => axios.get(BASE_URL, { params });

const newsApi = { fetchList };
export default newsApi;
