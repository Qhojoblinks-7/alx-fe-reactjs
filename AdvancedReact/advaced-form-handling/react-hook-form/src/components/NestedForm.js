import React from 'react';
import { useForm } from 'react-hook-form'

function NestedForm() {
    const { register,handleSubmit, formSet: {errors} } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {/*Group 1: Personal*/}
            <fieldset>
                <legend>Personal Information</legend>
                <label>Full Name</label>
                <input
                    type='text'
                    {...register(personalInfo.fullName,{required: "Information required!"})}
                />
                {errors.personalInfo?.fullName && (
  <p style={{ color: "red" }}>{errors.personalInfo.fullName.message}</p>
)}
                <br />
                <label>Email Address</label>
                <input
                    type='email'
                    {...register(personalInfo.email,{required: "Information required"})}
                    />
                    <br />

                    {/*Group 2: Address Details*/}
                    <fieldset>
                        <legend>Address Details</legend>
                        <label>Street Address</label>
                        <input
                            type='text'
                            {...register(addressDetails.street)}
                            />
                    </fieldset>
            </fieldset>
        </form>
    );
}

export default NestedForm;