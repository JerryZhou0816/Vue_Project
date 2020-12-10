import Mock from "mockjs";

import loginData from "./mockData/login.json";
import registerData from "./mockData/register.json";

Mock.mock("/mock/login", { code: 200, data: { loginData } });
Mock.mock("/mock/register", { code: 200, data: { registerData } });
