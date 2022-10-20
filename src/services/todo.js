import { baseApi } from "@/plugins/axios";

const api = "/api";

const list = (body) => baseApi.get(`${api}/list`, body);

export { list };
