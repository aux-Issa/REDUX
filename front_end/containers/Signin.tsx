import * as React from 'react';
import {tryLogin} from '../modules/actions/ActionCreater'
import { connect } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux';
import {useState} from 'react';

export default function SigninForm() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = () => {
        console.log("dispatchだよ");
        console.log(email);
        console.log(password);
        dispatch(tryLogin(email, password))
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, type:string) => {
        if(type === "email"){
            setEmail(e.target.value)
          }else if (type === "password") {
            setPassword(e.target.value)
        }
        console.log(email);
        console.log(password);
    }

        return(
            <div>
                <h1>サインイン</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                    Email
                    <input name="email" type="email" placeholder="Email" 
                        onChange = {(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, "email")}
                    />
                    </label>
                    <label>
                    Password
                    <input name="password" type="password" placeholder="Password" 
                        onChange = {(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, "password")}/>
                    </label>
                    <button type="submit">Log in</button>
                </form>
                <p>email: test@kmail.com</p>
                <p>password: aaaaa</p>
            </div>
        )
    }


