import { Cookies } from "@/app/utils/cookies";
import { createContext, useEffect, useState } from "react";

export interface IDealerUserContext {
    update: (value: IDealerLogin) => void;
    value: IDealerLogin | null;

}
export const IDealerContextdefault: IDealerUserContext = {
    update: (value: IDealerLogin) => { },
    value: null

}


export const DealerUserContext = createContext<IDealerUserContext>(IDealerContextdefault);


export const DealerUserProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [dealer, setDealer] = useState<IDealerLogin | null>(null)
    const update = (value: IDealerLogin) => {
        setDealer(value)
    }

     useEffect(() => {
        if (Cookies.get('user') != null && Cookies.get('user').length != 0) {

            setDealer(
                JSON.parse(Cookies.get('user'))
            )

        } else {
            // router.push("/sign-in/dealer")
        }
        // setmounted(true)
    }, [])
    return <DealerUserContext.Provider value={
        { update: update, value: dealer }
    }>

        {
            children
        }
    </DealerUserContext.Provider>
}