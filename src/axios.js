import axios from 'axios';
import { config } from "@/config";
export default axios.create({
    timeout: 1000000,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true
});