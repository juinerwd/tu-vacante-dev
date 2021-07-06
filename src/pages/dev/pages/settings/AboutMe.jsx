import React from 'react';
import { useDispatch } from 'react-redux';
import { startUpdateAboutMe } from '../../../../actions/user';
import { useForm } from '../../../../hooks/useForm';
import Input  from '../../../../components/Input';


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
                            <Input 
                                col="col-12"
                                label="Años de experiencia"
                                type="text"
                                classname="form-control"
                                name="yearsExperience"
                                id="yearsExperience"
                                value={yearsExperience}
                                onChange={handleUpdateProfileInfo}
                                placeholder="Años de experiencia"
                            />
                            <Input 
                                col="col-12"
                                label="Portafolio"
                                type="text"
                                classname="form-control"
                                name="briefcase"
                                id="briefcase"
                                value={briefcase}
                                onChange={handleUpdateProfileInfo}
                                placeholder="Número de contacto"
                            />
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
