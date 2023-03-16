import axios from 'axios';
import { showNotify } from "vant";

export function get(url,callback){
    axios.get(url)
    .then((res)=>{callback(res.data)})
    .catch((err)=>{showNotify({message: err.message})})
}
