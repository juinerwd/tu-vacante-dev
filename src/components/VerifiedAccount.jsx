import React from 'react';
import { useSelector } from 'react-redux';

const VerifiedAccount = () => {
    
    const { verified_account } = useSelector(state => state.auth);

    const stylesVerifiedAccount = {
        height: '35px',
        padding:'5px',
        borderRadius: 0,
        margin: 0
    };
    
    return (
        <div className={!verified_account === true && verified_account === false ? 'alert alert-danger':'d-none'} role="alert" style={stylesVerifiedAccount}>
            Tu cuenta no esta verificada. Por favor, rebisa tu correo electronico. 
        </div>
    )
}

export default VerifiedAccount;
