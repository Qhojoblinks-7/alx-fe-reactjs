import React from 'react'
import { useForm } from 'react-hook-form';

function ConditionalFieldsForm() {
    const {register, handleSubmit, watch, formState: {errors}} = useForm();

    //watch for changes in the answer to dynamically render field
    const watchAnswer = watch("answer");


    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {/*Primary Question*/}
            <div>
                <label>Do you want to provide additional info?</label>
                <select
                {...register("answer", {
                    required: "Please select an option"
                })}
                >
                    <option value="">Select...</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
                {
                    watchAnswer === "yes" && (
                        <div>
                            <label>Provide additional Information</label>
                            <input
                                {...register ("additionalInfo", {
                                    required: "Please fill out this field"
                                })}
                                />
                                 {errors.additionalInfo && (
            <p style={{ color: "red" }}>{errors.additionalInfo.message}</p>
          )}
                        </div>
                    )
                }
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default ConditionalFieldsForm;