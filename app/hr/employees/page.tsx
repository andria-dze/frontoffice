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
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: (_, {tags}) => (
            <>
                {tags.map((tag) => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'loser') {
                        color = 'volcano';
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <a>Edit </a>
                <a>Delete</a>
            </Space>
        ),
    },
];

const data: DataType[] = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];


export default function EmployeesDashboard() {

    const [employess, set] = useRecoilState(UsersQuery);
    console.log('aq employess', employess);
    /* useEffect(() => {
         console.log('aq eff');
         fetchGraphQL(`
      query ExampleQuery {
           users {
             exampleField
           }
         }
     `).then(response => {
             // Avoid updating state if the component unmounted before the fetch completes
             if (!isMounted) {
                 return;
             }
             const data = response.data;
             console.log(data);
         }).catch(error => {
             console.error(error);
         });

         return () => {
         };
     }, []);*/
    return (
        <main>
            zd22
            {/*<Table columns={columns} dataSource={data}/>*/}
        </main>
    )
}
