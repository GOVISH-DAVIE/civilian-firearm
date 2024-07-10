import { useMutation } from "react-query";
import DealerLoginData from "./data";
import { useRouter } from "next/navigation";
import { Cookies } from "@/app/utils/cookies";

export const useDealerLogin = () => {

    const router = useRouter();

    const loginMutation = useMutation(
        async (data: any) => {
            console.log('====================================');
            console.log(data);
            console.log('data====================================');
            return await DealerLoginData.login(data);
        },
        {
            onSuccess: (data) => {
                // resetState();
                // getDealers.mutateAsync()
                if (data.message == "update your password") {
                    router.push("/sign-in/dealer/update")
                }
                else if (data.message == "success") {
                    Cookies.add('user', JSON.stringify(data), 1)
                    router.push("/dealer")

                }
                console.log('====================================');
                console.log(data.message);
                console.log('====================================');
            },
            onError: (error) => {
                console.log(error);
            },
        }
    );
    const updateMutation = useMutation(
        async (data: any) => {
            console.log('====================================');
            console.log(data);
            console.log('data====================================');
            return await DealerLoginData.update(data);
        },
        {
            onSuccess: (data) => {
                // resetState();
                // getDealers.mutateAsync()
                if (data.message == "login") {
                    router.push("/sign-in/dealer")
                }
                else if (data.message == "success") {
                    router.push("/dealer")
                }
                console.log('====================================');
                console.log(data.message);
                console.log('====================================');
            },
            onError: (error) => {
                console.log(error);
            },
        }
    );


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        let fd = new FormData(event.currentTarget)
        let v = { ...(Object.fromEntries(fd)) }


        loginMutation.mutateAsync(v);

    };
    const handleUpdateSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        let fd = new FormData(event.currentTarget)
        let v = { ...(Object.fromEntries(fd)) }


        updateMutation.mutateAsync(v);

    };
    return {
        handleSubmit,
        loginMutation,
        updateMutation,
        handleUpdateSubmit
    }
}