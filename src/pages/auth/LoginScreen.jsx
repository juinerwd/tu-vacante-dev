import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Login from './Login';
import Register from './Register';
import RecoverPassword from './RecoverPassword';


const LoginScreen = ({history}) => {
    const [changeFormAuth, setChangeFormAuth] = useState(1);
    const { uid } = useSelector(state => state.auth);

    if (!!uid) {
        history.goBack();
    }

    return (
        <div>
            <Login changeFormAuth={changeFormAuth} setChangeFormAuth={setChangeFormAuth} history={history} />
            <Register changeFormAuth={changeFormAuth} setChangeFormAuth={setChangeFormAuth} />
            <RecoverPassword changeFormAuth={changeFormAuth} setChangeFormAuth={setChangeFormAuth} />
        </div>
    )
}

export default LoginScreen;
