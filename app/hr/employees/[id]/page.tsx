'use client'
import {UserQuery} from "@/app/_data/selectors/User";
import {useRecoilState} from "recoil";
import {Avatar, Card, Skeleton} from 'antd';
import {EditOutlined, EllipsisOutlined, SettingOutlined} from "@ant-design/icons";
import Meta from "antd/es/card/Meta";
import {useState} from "react";
import UpdateUser from "@/app/hr/employees/[id]/UpdateUser";


const handleSubmit = (values: any) => {
    console.log('Success:', values);
};

export default function EditEmployee({params}) {
    const [showEdit, setShowEdit] = useState(false);
    const [employee] = useRecoilState(UserQuery(Number(params?.id)));
    let user = employee?.user
    return (
        <div>

            <Card
                style={{width: 300, marginTop: 16}}
                actions={[
                    <SettingOutlined key="setting"/>,
                    <EditOutlined key="edit" onClick={() => setShowEdit(!showEdit)}/>,
                ]}
            >
                <Meta
                    avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2"/>}
                    title={user?.firstName + ' ' + user.lastName}
                    description={user?.email}
                />
            </Card>
            {showEdit && (
                <UpdateUser user={user}/>
            )}
        </div>
    )
}
