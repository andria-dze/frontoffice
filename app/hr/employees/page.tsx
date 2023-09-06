'use client'
import {Space, Table, Tag} from 'antd';
import type {ColumnsType} from 'antd/es/table';
import {UsersQuery} from "@/data/selectors/Users";
import {useRecoilState} from "recoil";

interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
    tags: string[];
}

const columns: ColumnsType<DataType> = [
    {
        title: 'id',
        dataIndex: 'id',
        key: 'id',
        render: (text) => <a>#{text}</a>,
    }, {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'First Name',
        dataIndex: 'firstName',
        key: 'firstName',
    },
    {
        title: 'Last Name',
        dataIndex: 'lastName',
        key: 'lastName',
    },
];


export default function EmployeesDashboard() {

    const [employess] = useRecoilState(UsersQuery);
    console.log('aq employess', employess);

    return (
        <>

            <Table columns={columns} dataSource={employess?.users || []}/>
        </>
    )
}
