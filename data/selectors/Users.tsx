'use client'
import {graphQLSelector} from "recoil-relay";
import {myEnvironmentKey} from "@/data/RelayEnvironment";
import {graphql} from 'react-relay';

export const UsersQuery = graphQLSelector({
    key: 'UsersQuery',
    environment: myEnvironmentKey,
    query: function () {
        let tmp = graphql`query UsersQuery {
                              users {
                                id
                              }
                            }`;
        console.log('aq query', tmp);
        return tmp.default
    }(),
    variables: ({get}) => ({}),
    mapResponse: data => data,
});