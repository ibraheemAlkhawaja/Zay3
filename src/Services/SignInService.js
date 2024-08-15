import { PublicAxios } from "./AxiosHandler";

class SignInService {
  static endpoint = "login";
  static post(body) {
    return PublicAxios.post(`${SignInService.endpoint} `, body);
  }
}
export default SignInService;
