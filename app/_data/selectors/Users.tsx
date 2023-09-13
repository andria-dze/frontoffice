'use client'
import {graphQLSelector, graphQLSelectorFamily} from "recoil-relay";
import {myEnvironmentKey} from "@/app/_data/RelayEnvironment";
import {graphql} from 'react-relay';

export const UsersQuery = graphQLSelector({
    key: 'UsersQuery',
    environment: myEnvironmentKey,
    query: graphql`query UsersQuery {
                    users(first: 5){
                        edges{
                          node{
                            id,
                              firstName,
                              lastName,
                              email,
                          },
                          cursor
                        }
                  }}`.default,
    variables: ({get}) => ({}),
    mapResponse: data => data,
});