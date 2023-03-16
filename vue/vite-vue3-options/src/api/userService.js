// 引入封装的axios方法
import { get } from "./request";
// 引入api对象
import api from "./api";

// 写service代码
export const login = (data,callback) => {
    get(api.login,data,callback)
};
