import { useContext } from "react"
import { DealerUserContext } from "../context/dealer_user_context"
import DealerInventoryData from "../data/data_scource"
import { useMutation } from "react-query"

export const useDealerUser = () => {
    const dealerUser = useContext(DealerUserContext)

    const getDealerInventory = useMutation(
        async (data: any) => {
            console.log('====================================');
            console.log(data);
            console.log('data====================================');
            return await DealerInventoryData.getDealerInventory({});
        },
        {
            onSuccess: (data) => {
                // resetState();
            },
            onError: (error) => {
                console.log(error);
            },
        }
    )



    return {
        dealerUser,
        getDealerInventory

    }
}