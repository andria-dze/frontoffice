'use client'
import UserForm from "@/app/hr/_components/UserForm";

const handleSubmit = (values: any) => {
    console.log('Success:', values);
};

export default function EditEmployee({params}) {

    return (
        <UserForm data={{name: 'zu'}} onSubmit={handleSubmit}/>
    )
}
