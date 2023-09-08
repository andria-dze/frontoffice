'use client'
import {RecoilRoot} from "recoil";
import {RecoilRelayEnvironmentProvider} from "recoil-relay";
import environment, {myEnvironmentKey} from "@/data/RelayEnvironment";
import {getCurrentEnvironment} from "@/data/environment";
import {useEffect, useState} from "react";


const RecoilRootProvider = ({children}) => {
    let env = getCurrentEnvironment();
    const [isHydrated, setIsHydrated] = useState(false)

    // Wait till Next.js rehydration completes
    useEffect(() => {
        setIsHydrated(true)
    }, [])
    return !isHydrated ? null : (
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