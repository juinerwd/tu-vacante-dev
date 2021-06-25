import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import UserData from '../UserData';
import { startGetCountry } from '../../actions/country';

import '../../styles/components/account.scss';

import AboutMe from './pages/settings/AboutMe';
import MyAccount from './pages/settings/MyAccount';
import ChangePassword from '../ChangePassword';

const Account = ({history}) => {
    const dispatch = useDispatch();
    const { name, role } = useSelector(state => state.auth);
    const [activeSectionAccount, setActiveSectionAccount] = useState(1);
    let clearName = '';

    if(!!name){
        clearName = name.replace(/\s+/g, '');
    }

    useEffect(() => {
        dispatch(startGetCountry());
    }, [dispatch])

    const handleSectionsAccount = ({target}) => {
        // console.log(target.value);
        if (target.value === 'ip') {
            setActiveSectionAccount(1);
        }
        if (target.value === 'ism') {
            setActiveSectionAccount(2);
        }
        if (target.value === 'st') {
            setActiveSectionAccount(3);
        }
        if (target.value === 'pass') {
            setActiveSectionAccount(4);
        }
        if (target.value === 'account') {
            setActiveSectionAccount(5);
        }
    }

    if (role === 'DEV_ROLE') {
        history.replace(`/account-dev/${clearName}/edit`);
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h3 className="title_page mb-5">Configuración de cuenta</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                    <div className="sidebar__account">
                        <ul className="sidebar__account--menu">
                            <li>
                                <button value="ip" onClick={handleSectionsAccount} className={activeSectionAccount === 1 ? 'item_active' : ''}>
                                    Información personal 
                                </button>
                            </li>
                            <li>
                                <button value="ism" onClick={handleSectionsAccount} className={activeSectionAccount === 2 ? 'item_active' : ''}>
                                    Información sobre la empresa 
                                </button>
                            </li>
                            <li>
                                <button value="pass" onClick={handleSectionsAccount} className={activeSectionAccount === 4 ? 'item_active' : ''}>
                                    Contraseña 
                                </button>
                                </li>
                            <li>
                                <button value="account" onClick={handleSectionsAccount} className={activeSectionAccount === 5 ? 'item_active' : ''}>
                                    Cuenta 
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-8">
                    <div className={activeSectionAccount === 1 ? '' : 'd-none'}>
                        <UserData />
                    </div>
                    <div className={activeSectionAccount === 2 ? '' : 'd-none'}>
                        <AboutMe />
                    </div>
                    <div className={activeSectionAccount === 4 ? '' : 'd-none'}>
                        <ChangePassword />
                    </div>
                    <div className={activeSectionAccount === 5 ? '' : 'd-none'}>
                        <MyAccount />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Account;
