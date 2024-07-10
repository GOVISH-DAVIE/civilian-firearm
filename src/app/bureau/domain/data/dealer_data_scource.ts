import { AxiosUtility } from "@/service/axiosSerivice";
import { faker } from "@faker-js/faker";

/**
 * Creates merchant basic Information
 * @param {IDealer} data
 * @returns {Promise<IDealer>}
 */
const createDealer = async (
  data: IDealer
): Promise<IDealer> => {
  const { data: res } = await AxiosUtility.post<IDealer>(`dealer/create`, data);
  console.log(res);
  return res;
};
/**
 * Creates merchant basic Information
 * @param {Idealer} data
 * @returns {Promise<List<IDealer>>}
 */

function generateRandomDealer(): IDealer {
  return {
    id: faker.datatype.number(),
    dealer_name: faker.name.fullName(),
    dealer_business_name: faker.company.name(),
    address: faker.address.streetAddress(),
    phone_number: faker.phone.number(),
    email: faker.internet.email(),
    one_time_password: faker.internet.password(8),
    password: faker.internet.password(12),
    created_at: faker.date.past().toISOString(),
  };
}
function generateRandomDealers(count: number): IDealer[] {
  const dealers: IDealer[] = [];
  for (let i = 0; i < count; i++) {
    dealers.push(generateRandomDealer());
  }
  return dealers;
}

const getDealers = async (
): Promise<IDealer[]> => {
  const { data: res } = await AxiosUtility.get<IDealer[]>(`dealer`);
  // const res = generateRandomDealers(10);
  console.log(res);
  return res;
};

const DealerData = {
  createDealer,
  getDealers
}

export default DealerData