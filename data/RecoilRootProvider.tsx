'use client'
import {RecoilRoot} from "recoil";
import {RecoilRelayEnvironmentProvider} from "recoil-relay";
import environment, {myEnvironmentKey} from "@/data/RelayEnvironment";


const RecoilRootProvider = ({children}) => {

    return (
        <RecoilRoot>
            <RecoilRelayEnvironmentProvider
                environment={environment}
                environmentKey={myEnvironmentKey}>
                {children}
            </RecoilRelayEnvironmentProvider>
        </RecoilRoot>
    );
};

export default RecoilRootProvider;