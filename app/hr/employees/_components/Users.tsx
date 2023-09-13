'use client'
import {UsersQuery} from "@/app/_data/selectors/Users";
import type {ColumnsType} from 'antd/es/table';
import {useRecoilState} from "recoil";
import {Table} from "antd";
import {R_HR, R_VIEW_EMPLOYEE} from "@/app/_constants/routes";
import Link from "next/link";

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
        fixed: 'left',
        dataIndex: 'id',
        key: 'id',
        render: (text, record) => <Link href={R_VIEW_EMPLOYEE.replace('[id]', record.id)}>{text}</Link>,
    }, {
        title: 'Email',
        fixed: 'left',
        dataIndex: 'email',
        key: 'email',
        render: (text, record) => <Link href={R_VIEW_EMPLOYEE.replace('[id]', record.id)}>{text}</Link>,
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

        <Table columns={columns}
               scroll={{x: true}}
               bordered
               dataSource={employess?.users?.edges.map(el => ({
                   cursor: el.cursor,
                   key: el.node.id,
                   ...el.node
               })) || []}/>

    );
};

export default Users;