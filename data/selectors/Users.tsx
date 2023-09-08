'use client'
import {graphQLSelector, graphQLSelectorFamily} from "recoil-relay";
import {myEnvironmentKey} from "@/data/RelayEnvironment";
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
//
// export const UserQuery = graphQLSelectorFamily({
//     key: 'UserQuery',
//     environment: myEnvironmentKey,
//     query: function () {
//         let tmp = graphql`query UserQuery($userId: Int!) {
//                               user(id: $userId) {
//                                 id
//                                 email
//                                 firstName
//                                 lastName
//                               }
//                             }`;
//         return tmp.default
//     }(),
//     variables: ({get}) => ({}),
//     mapResponse: data => data,
//     mutations: {
//         mutation: graphql`
//               mutation UserMutation($input: UserNameChangeData!) {
//                 user_mutation(data: $input) {
//                   user {
//                     id
//                     email
//                     firstName
//                     lastName
//                   }
//                 }
//               }
//             `,
//         variables: newUserData => id => ({input: {id, name: newUserData.name}}),
//     },
// });