'use client'
import {atom} from "recoil";

export const todoListState = atom({
    key: 'User',
    default: {
        token: 'zd'
    },
});