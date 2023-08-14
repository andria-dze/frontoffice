'use client'
import UserForm from "@/app/hr/_components/UserForm";

const handleSubmit = (values: any) => {
    console.log('Success:', values);
};

export default function CreateEmployee() {

    return (
        <UserForm onSubmit={handleSubmit}/>
    )
}
