import React, { useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { register } from 'timeago.js';

// import DashBoardRoutes from './DashboardRoutes';

import Home from '../pages/Home';
import Vacancies from '../pages/Vacancies';
import Vacancy from '../pages/Vacancy';
import NavBar from '../components/NavBar';
import ProfileDev from '../pages/dev/ProfileDev';
import ProfileRecruiter from '../pages/recruiter/ProfileRecruiter';
import { startCheking } from '../actions/auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import LoginScreen from '../pages/auth/LoginScreen';
import Footer from '../components/Footer';
import AccountDev from '../pages/dev/AccountDev';
import AccountRecruiter from '../pages/recruiter/AccountRecruiter';
import CreateVacancy from '../pages/recruiter/CreateVacancy';
import { startGetCountries } from '../actions/country';
import { startGetCurrencies } from '../actions/currency';
import { startGetProfileUser } from '../actions/user';
import Myvacancies from '../pages/recruiter/pages/Myvacancies';
import { vacanciesStartLoading } from '../actions/vacancy';
import Vacancycandidate from '../pages/recruiter/pages/Vacancycandidate';
import { startGetTypesContracts, startGetWorkingDays } from '../actions/job';


const AppRouter = () => {

    const dispatch = useDispatch();
    const { checking, uid, name } = useSelector(state => state.auth);
    let clearName = '';

    if(!!name){
        clearName = name.replace(/\s+/g, '');
    }
     

    useEffect(() => {
        
        dispatch(startCheking());
        dispatch(startGetCountries());
        dispatch(startGetCurrencies());
        dispatch(vacanciesStartLoading());
        dispatch(startGetTypesContracts());
        dispatch(startGetWorkingDays());

    }, [dispatch]);

    const localeFunc = (number, index, totalSec) => {
        return [
            ['Ahora', 'Ahora mismo'],
            ['Hace %s segundos', 'in %s seconds'],
            ['Hace un minuto', 'in 1 minute'],
            ['Hace %s minutos', 'in %s minutes'],
            ['Hace una hora', 'in 1 hour'],
            ['Hace %s horas', 'in %s hours'],
            ['Hace un día', 'in 1 day'],
            ['Hace %s días', 'in %s days'],
            ['Hace una semana', 'in 1 week'],
            ['Hace %s semanas', 'in %s weeks'],
            ['Hace un mes', 'in 1 month'],
            ['Hace %s meses', 'in %s months'],
            ['Hace un año', 'in 1 year'],
            ['%s years ago', 'in %s years']
          ][index];
    }
    // register your locale with timeago
    register('es_ES', localeFunc);

    if (!!uid) {
        dispatch(startGetProfileUser());
    }

    if (checking) {
        return (<h1>Por favor espere...</h1>);
    }

    return (
        <Router>
            <NavBar />
            <div>
                <Switch>
                    <PublicRoute exact path="/login" component={LoginScreen} isAuthenticated={ !!uid } />
                    <PublicRoute exact path="/vacancies" component={Vacancies} isAuthenticated={ !!uid } />
                    <PublicRoute exact path="/vacancy/:id" component={Vacancy} isAuthenticated={ !!uid } />
                    <PublicRoute exact path="/" component={Home} isAuthenticated={ !!uid } />

                    <PrivateRoute exact path="/home" component={ Home } isAuthenticated={ !!uid } />
                    <PrivateRoute exact path="/create-vacancy" component={ CreateVacancy } isAuthenticated={ !!uid } />

                    <PrivateRoute exact path={`/profile-dev/${clearName}`} component={ ProfileDev } isAuthenticated={ !!uid } />
                    <PrivateRoute exact path={`/profile-recruiter/${clearName}`} component={ ProfileRecruiter } isAuthenticated={ !!uid } />

                    <PrivateRoute exact path={`/account-dev/${clearName}/edit`} component={AccountDev} isAuthenticated={ !!uid } />
                    <PrivateRoute exact path={`/account-recruiter/${clearName}/edit`} component={AccountRecruiter} isAuthenticated={ !!uid } />
                    <PrivateRoute exact path="/my-vacancies" component={Myvacancies} isAuthenticated={ !!uid } />
                    <PrivateRoute exact path="/vacancy-candidates/:id" component={Vacancycandidate} isAuthenticated={ !!uid } />

                    <Redirect to="/" /> 
                </Switch>
            </div>
            <Footer />
        </Router>
    )
}

export default AppRouter;
