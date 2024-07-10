import { AxiosUtility } from "@/service/axiosSerivice";
import { IDealerInventory } from "../interface/inventory";

/**
 * Gets Dealer Inventory Information
 * @param {IDealerInventory} data
 * @returns {Promise<IDealerInventory>}
 */
const getDealerInventory = async (
    { token, }: { token?: String | null }
): Promise<IDealerInventory> => {
    const { data: res } = await AxiosUtility.get<IDealerInventory>(`dealerInventory`,
        {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        }
    );
    console.log(res);
    return res;
};




const DealerInventoryData = {
    getDealerInventory
}

export default DealerInventoryData