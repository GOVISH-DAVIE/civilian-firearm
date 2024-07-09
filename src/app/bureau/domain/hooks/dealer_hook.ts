import { useState } from "react";
import { useMutation } from "react-query";

export const useCreateDealer = (
    isEditing: boolean,
    data?: IDealer,
    id?: number
) => {

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
        async (data: IDealer) => {
            // await MerchantBasicInfoServices.createMerchantInfo(data);
        },
        {
            onSuccess: () => {
                // resetState();
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
        if (isEditing) {
            updateMutation.mutateAsync(state);
        } else {
            createMutation.mutateAsync(state);
        }
    };
    return {
        state,
        handleSubmit
    }

}