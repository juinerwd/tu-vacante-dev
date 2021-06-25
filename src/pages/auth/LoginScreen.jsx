import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Login from './Login';
import Register from './Register';

const LoginScreen = ({history}) => {
    const [changeFormAuth, setChangeFormAuth] = useState(true);
    const { uid } = useSelector(state => state.auth);

    if (!!uid) {
        history.goBack();
    }

    return (
        <div>
            <Login changeFormAuth={changeFormAuth} setChangeFormAuth={setChangeFormAuth} history={history} />
            <Register changeFormAuth={changeFormAuth} setChangeFormAuth={setChangeFormAuth} />
        </div>
    )
}

export default LoginScreen;
