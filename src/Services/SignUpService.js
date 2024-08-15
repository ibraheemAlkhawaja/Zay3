import { PublicAxios } from "./AxiosHandler";

class SignUpService {
  static endpoint = "/signup";
  static post(body) {
    return PublicAxios.post(`${SignUpService.endpoint}`, body);
  }
}
export default SignUpService;
