import { ChangeEvent, FormEvent, useState } from 'react';
import '../styles/styles.css'


export const RegisterPage = () => {
    
    const [registerData, setRegisterData] = useState({
        name: '',
        email: '',
        pasword1: '',
        pasword2: '',
        terms: true
    });

    const onChange = ( event: ChangeEvent<HTMLInputElement>) => {
        setRegisterData( prev => ({
            ...prev,
            [event.target.name] : event.target.value
        }))
    }

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log( registerData );       
    }

    const { name, email, pasword1, pasword2 } = registerData;

    
    return (
        <div>
            <h1>Register Page</h1>

            <form noValidate onSubmit={ onSubmit }>
                <input 
                    type="text"
                    placeholder="Name"
                    value={ name }
                    name = "name"
                    onChange={ ev => onChange(ev) }
                />
                <input 
                    type="email"
                    placeholder="Email"
                    value={ email }
                    name = "email"
                    onChange={ onChange }
                />
                <input 
                    type="password"
                    placeholder="Password"
                    value={ pasword1 }
                    name = "pasword1"
                    onChange={ onChange }
                />
                <input 
                    type="password"
                    placeholder="Repeat Password"
                    value= { pasword2 }
                    name = "pasword2"
                    onChange={ onChange }
                />
                <button
                    type="submit"
                >
                    Create
                </button>
            </form>
        </div>
    )
}
