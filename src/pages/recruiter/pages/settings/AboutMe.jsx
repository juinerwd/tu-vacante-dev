import React from 'react';
import { useDispatch } from 'react-redux';
import { startUpdateAboutMe } from '../../../../actions/user';
import { useForm } from '../../../../hooks/useForm';

import '../../../../styles/components/userData.scss';

const AboutMe = () => {

    const dispatch = useDispatch();
    // const {about_me, years_experience, portafolio_url} = useSelector(state => state.profile);
    
    // console.log(about_me);
    const [ updateProfileInfo, handleUpdateProfileInfo] = useForm({
        aboutme: '',
        yearsExperience: '',
        briefcase: ''
    });

    const { aboutme, yearsExperience, briefcase } = updateProfileInfo;

    const handleSubmitUpdateProfile = (e) => {
        e.preventDefault();
        
        dispatch(startUpdateAboutMe(aboutme, yearsExperience, briefcase));
    }
    return (
        <>
            <div className="col-12">
                <div className="user__form--update">
                    <form className="user__form" onSubmit={handleSubmitUpdateProfile}>
                        <div className="row">
                            <div className="col-12">
                                <div className="form-group">
                                    <label htmlFor="fullName" className="form-label">Sobre mi</label>
                                    <textarea 
                                        className="form-control" 
                                        name="aboutme" 
                                        id="aboutme" 
                                        rows="6" 
                                        value={aboutme}
                                        onChange={handleUpdateProfileInfo}
                                        placeholder="Sobre mi"></textarea>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-group">
                                    <label htmlFor="country" className="form-label">Años de experiencia</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        name="yearsExperience" 
                                        value={yearsExperience}
                                        onChange={handleUpdateProfileInfo}
                                        placeholder="Años de experiencia" />
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-group">
                                    <label htmlFor="telephoneNumber" className="form-label">Portafolio</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        name="briefcase" 
                                        value={briefcase}
                                        onChange={handleUpdateProfileInfo}
                                        placeholder="Número de contacto" />
                                </div>
                            </div>
                        </div>
                        <div className="row user__btn-update">
                            <button type="submit">Actualizar</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AboutMe;
