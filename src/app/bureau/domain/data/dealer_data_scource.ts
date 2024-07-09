import { AxiosUtility } from "@/service/axiosSerivice";

/**
 * Creates merchant basic Information
 * @param {MerchantInfo} data
 * @returns {Promise<IDealer>}
 */
const createDealer = async (
    data: IDealer
  ): Promise<IDealer> => {
    const { data: res } = await AxiosUtility.post<IDealer>(`dealer/create`, data);
    console.log(res);
    return res;
  };

  const DealerData = {
    createDealer
  }

  export default DealerData