import React from 'react';
import { useForm} from 'react-hook-form'

function SimpleForm() {
    const {register, handleSubmit, formState: { errors }} = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Username: </label>
                <input
                    type='text'
                    {...register("username", {required: "username is required "})}
                    />
                    {/*Display error message*/}
                    {errors.username && <p style={{color: 'red'}}>{errors.username.message}</p>}
            </div>
            {/*submit button*/}
            <button type="submit">Submit</button>
        </form>
    );
}

export default SimpleForm;

