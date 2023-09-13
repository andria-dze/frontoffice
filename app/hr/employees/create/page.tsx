'use client'
import UserForm from "@/app/hr/employees/create/UserForm";

const handleSubmit = (values: any) => {
    console.log('Success:', values);
};

export default function CreateEmployee() {

    return (
        <>
            <h2>Create new Employee</h2>
            <UserForm onSubmit={handleSubmit}/>
        </>
    )
}
