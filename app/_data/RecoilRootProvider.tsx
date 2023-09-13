'use client'
import {RecoilRoot} from "recoil";
import {RecoilRelayEnvironmentProvider} from "recoil-relay";

import environment, {myEnvironmentKey} from "@/app/_data/RelayEnvironment";
import {getCurrentEnvironment} from "@/app/_data/environment";
import {useEffect, useState} from "react";
import DebugObserver from "@/app/_data/DebugObserver";


const RecoilRootProvider = ({children}) => {
    let env = getCurrentEnvironment();
    const [isHydrated, setIsHydrated] = useState(false)

    // Wait till Next.js rehydration completes
    useEffect(() => {
        setIsHydrated(true)
    }, [])

    return !isHydrated || !sessionStorage ? null : (
        <RecoilRoot>
            <RecoilRelayEnvironmentProvider
                environment={environment}
                environmentKey={myEnvironmentKey}>
                <DebugObserver/>
                {children}
            </RecoilRelayEnvironmentProvider>
        </RecoilRoot>
    );
};

export default RecoilRootProvider;