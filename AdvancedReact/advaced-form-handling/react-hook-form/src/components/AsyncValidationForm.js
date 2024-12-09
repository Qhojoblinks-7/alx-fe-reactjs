import React from 'react'
import {useForm} from 'react-hook-form'


function AsyncValidationForm(){
    const {register, handleSubmit , formState: {errors}} = useForm({
        DefaultFormValues: {
            username: "John Doe",
        }
    });


    async function  validateUsername(username) {
        //Simulate async username validation function
        return new Promise ((resolve) => {
            setTimeout(() =>{
                if (username.toLowerCase() === "admin"){
                    resolve("Username already taken")
                }else{
                    resolve(true);
                }
            }, 1000); // Simulate server response delay
        })
    }

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Username: </label>
                <input
                    {...register("username", {
                        validate: async (value) => {
                            const result = await validateUsername(value);
                            return result === true ? true : result;
                            }
                    })}
                    />
                    {errors.username && (
          <p style={{ color: "red" }}>{errors.username.message}</p>
        )}
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default AsyncValidationForm;