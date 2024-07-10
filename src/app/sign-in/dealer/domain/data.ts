import { AxiosUtility } from "@/service/axiosSerivice";

/**
 * Creates merchant basic Information
 * @param {IDealer} data
 * @returns {Promise<IDealer>}
 */
const login = async (
  data: ILogin
): Promise<IDealerLogin> => {
  const { data: res } = await AxiosUtility.post<IDealerLogin>(`dealer/login`, data);
  console.log(res);
  return res;
};


/**
 * Creates merchant basic Information
 * @param {IDealer} data
 * @returns {Promise<IDealer>}
 */
const update = async (
  data: ILogin
): Promise<IDealerLogin> => {
  const { data: res } = await AxiosUtility.post<IDealerLogin>(`dealer/updatepassword`, data);
  console.log(res);
  return res;
};
/**
 * Creates merchant basic Information
 * @param {Idealer} data
 * @returns {Promise<List<IDealer>>}
 */
const getDealers = async (
): Promise<IDealer[]> => {
  const { data: res } = await AxiosUtility.get<IDealer[]>(`dealer`);
  console.log(res);
  return res;
};

const DealerLoginData = {
  login,
  getDealers,
  update
}

export default DealerLoginData