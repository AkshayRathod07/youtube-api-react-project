import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { login } from '../../../redux/actions/auth.action'
import "./loginScreen.scss"

const LoginScreen = () => {
    const dispatch = useDispatch()

    const accessToken = useSelector(state=>state.auth.accessToken)

    const handleLogin = () => {
        dispatch(login())
    }

    const history = useHistory()

    useEffect(()=>{
        if(accessToken){
            history.push('/')
        }
    },[accessToken,history])

    return (
        <div className="login">
            <div className="login__container">
                <img src="/img/Youtube-logo.png" alt=""/>
                <button onClick={handleLogin}>Login with google</button>
                <p>This Project is made using YouTube Data Api</p>
            </div>
        </div>
    )
}

export default LoginScreen
