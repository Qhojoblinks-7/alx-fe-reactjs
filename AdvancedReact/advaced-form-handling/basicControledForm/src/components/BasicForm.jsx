import { useState } from 'react'


function ControlledForm() {
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        password: '',
    });

    const [error, setError] = useState('');
    const [loading, setLoading] = useState('');

    
    const handleChange = (event) => {
        const { name, value } = event.target; //dynamically get the name and value of the field
        setFormValues((prevValues) => ({
            ...prevValues, [name]: value,// Dynamically update the value based on input name
        }))
    }
    const handleSubmission = async (event) => {
        event.preventDefault();

        //Simple form validation
    if (Object.values(formValues).some((val) => val.trim() === '')) {
        setError('All fields are required!');
        return;
    }

    setError('');
    setLoading(true);

    try{
        //simulate an async API call
        await new Promise((resolve) => setTimeout(resolve, 1000));

        console.log('Submitted Value:', inputValue);
        setInputValues({
            name: '',
            email: '',
            password: ''
        });
    }
    catch(error){
        console.log('Something went wrong:', error);
        setError('Submission failed. please try again.');
    }
    finally {
        setLoading(false);
    }
        
    }

    return(
        <form onSubmit={handleSubmission}>
            <div>
            <input
                type="text"
                name='name'
                value={formValues.name}
                onChange={handleChange}
                placeholder='Name'
            />
            <div>
            <input
                type="email"
                name='name'
                value={formValues.email}
                onChange={handleChange}
                placeholder='Email'
            />
            </div>
            <div>
            <input
                type="password"
                name='password'
                value={formValues.password}
                onChange={handleChange}
                placeholder='Password'
            />
            </div>
            <button type='submit' disabled={loading}>{loading ? 'Submitting...' : 'Submit'}</button>
            {error && <p style={{color: 'red'}}>{error}</p>}{/*show error if any*/}
            {/* <p>Current Value: {formValues}</p> */}
        </div>
        </form>
    );
}

export default ControlledForm;