'use client'
import {RecoilRoot} from "recoil";

const RecoilRootProvider = ({children}) => {
    return (
        <RecoilRoot>
            {children}
        </RecoilRoot>
    );
};

export default RecoilRootProvider;