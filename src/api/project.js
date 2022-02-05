import axios from "axios";
import { config } from "../config";

export async function getProjects() {
    return await axios.get(`${config.api_host}/api/v1/projects`)
}