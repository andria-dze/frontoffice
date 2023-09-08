'use client'
import {UsersQuery} from "@/data/selectors/Users";
import type {ColumnsType} from 'antd/es/table';
import {useRecoilState} from "recoil";
import {Table} from "antd";

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

const Users = () => {
    const [employess] = useRecoilState(UsersQuery);
    console.log(employess);
    return (
        <div>
            <Table columns={columns} dataSource={employess?.users?.edges || []}/>
        </div>
    );
};

export default Users;