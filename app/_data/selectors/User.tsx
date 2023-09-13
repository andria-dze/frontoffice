'use client'
import {graphQLSelectorFamily} from "recoil-relay";
import {myEnvironmentKey} from "@/app/_data/RelayEnvironment";
import {graphql} from 'react-relay';

export const UserQuery = graphQLSelectorFamily({
    key: 'UsersQuery',
    environment: myEnvironmentKey,
    query: graphql`query UserQuery($id: Float!) {
                              user(id: $id) {
                                email
                                firstName
                                id
                                lastName
                              }
                            }`.default,
    variables: id => ({get}) => ({id}),
    mapResponse: data => data,
    // mutations: {
    //     mutation: graphql`
    //           mutation UserMutation($input: UserNameChangeData!) {
    //             user_mutation(data: $input) {
    //               user {
    //                 id
    //                 email
    //                 firstName
    //                 lastName
    //               }
    //             }
    //           }
    //         `,
    //     variables: newUserData => id => ({input: {id, name: newUserData.name}}),
    // },
});