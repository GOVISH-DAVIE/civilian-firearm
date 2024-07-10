import { createContext, useState } from "react";

export interface IBeauralDealerContext {
    update: (value: IDealer[]) => void;
    value: IDealer[];

}
export const IBeauralDealerContextdefault: IBeauralDealerContext = {
    update: (value: IDealer[]) => { },
    value: []

}


export const BeauralDealerContext = createContext<IBeauralDealerContext>(IBeauralDealerContextdefault);


export const BeauralDealerProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [dealers, setDealers] = useState<IDealer[]>([])
    const update = (value: IDealer[]) => {
        setDealers(value)
    }
    return <BeauralDealerContext.Provider value={
        { update: update, value: dealers }
    }>

        {
            children
        }
    </BeauralDealerContext.Provider>
}