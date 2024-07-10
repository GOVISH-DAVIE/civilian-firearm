import { useContext, useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import DealerData from "../data/dealer_data_scource";
import { BeauralDealerContext } from "../context/dealerContext";




export const useCreateDealer = (
    isEditing: boolean,
    payload?: IDealer,
    id?: number
) => {
    const beauralDealer = useContext(BeauralDealerContext)
    
   
    const [dealers, setDealers] = useState<IDealer[]>([])
    const getDealers = useMutation<IDealer[]>(
        async ( ) => {
          return   await DealerData.getDealers();
        },
        {
            onSuccess: (_) => {
                console.log('====================================');
                console.log(_);
                console.log('====================================');
                // resetState();
                setDealers(_)
                beauralDealer.update(_)
            },
            onError: (error) => {
                console.log(error);
            },
        }
    );
    const [state, setState] = useState<IDealer>({

        dealer_name: "",
        dealer_business_name: "",
        address: "",
        phone_number: "",
        email: "",
        one_time_password: "",
        password: "",
        created_at: "",
    });

    const resetState = () => {
        setState({
            dealer_name: "",
            dealer_business_name: "",
            address: "",
            phone_number: "",
            email: "",
            one_time_password: "",
            password: "",
            created_at: "",
        });
    };


    const createMutation = useMutation(
        async (data: any) => {
            console.log('====================================');
            console.log(data);
            console.log('====================================');
            await DealerData.createDealer(data);
        },
        {
            onSuccess: () => {
                resetState();
                getDealers.mutateAsync()
            },
            onError: (error) => {
                console.log(error);
            },
        }
    );

    const updateMutation = useMutation(
        async (data: IDealer) => {
            // await MerchantBasicInfoServices.updateMerchantInfo(data, publicId);
        },
        {
            onSuccess: () => { },
            onError: (error) => {
                console.log(error);
            },
        }
    );



    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        let fd = new FormData(event.currentTarget)
        let v = { ...(Object.fromEntries(fd)) }


        createMutation.mutateAsync(v);

    };
    return {
        state,
        handleSubmit,
        getDealers,
        dealers,
        createMutation,
        beauralDealer
    }

}