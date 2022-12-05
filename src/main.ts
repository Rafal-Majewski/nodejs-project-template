import {Hello} from "./hello/index.js";
import dotenv from "dotenv";
dotenv.config();
import {appConfig} from "./app-config/index.js";

const hello = new Hello(appConfig.OPTIONAL_HELLO_MESSAGE);
console.log(hello.getMessage());
