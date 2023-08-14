import {atom} from "recoil";

const todoListState = atom({
    key: 'User',
    default: {
        token: ''
    },
});