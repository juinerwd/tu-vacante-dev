import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { startUpdateStudies } from '../../../../actions/user';

import { useForm } from '../../../../hooks/useForm';

import '../../../../styles/components/studies.scss';

const Studies = () => {

    const dispatch = useDispatch()
    const [fileData, setFileData] = useState("");
    const {active} = useSelector(state => state.profile);

    const [ updateProfileInfo, handleUpdateProfileInfo] = useForm({
        applied_studies: active.studies,
        skills: '',
        tools_technologies: active.tools_technologies,
        featured_projects: active.featured_projects,
        certifications: '',
        languages: active.idiomas,
    });

    const handleFilePDF = (file) => {
        setFileData(file);
    }

    const {applied_studies, skills, tools_technologies, featured_projects, certifications, languages} = updateProfileInfo;

    const handleUpdateProfileStudies = (e) => {
        e.preventDefault();
        if (!fileData || fileData.type !== 'application/pdf') {
            Swal.fire(
                'Archivo no valido',
                'El archivo debe ser en PDF',
                'info'
            );
            return false;
        }
        // uploadFile(fileData);
        dispatch(startUpdateStudies(applied_studies, skills, featured_projects, certifications, tools_technologies, languages));
    }

    return (
        <div className="studies">
            <form className="studies__form" onSubmit={handleUpdateProfileStudies}>
                <div className="row">
                    <div className="col-12">
                        <div className="form-group">
                            <label htmlFor="applied_studies" className="form-label">Estudios realizados</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                name="applied_studies" 
                                id="applied_studies"
                                value={applied_studies}
                                onChange={handleUpdateProfileInfo}
                                placeholder="Estudios realizados" />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-group">
                            <label htmlFor="skills" className="form-label">Habilidades</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                name="skills" 
                                id="skills"
                                value={skills}
                                onChange={handleUpdateProfileInfo}
                                placeholder="Habilidades" />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-group">
                            <label htmlFor="tools_technologies" className="form-label">Tecnologías y/o lenguajes de programación</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                name="tools_technologies" 
                                id="tools_technologies"
                                value={tools_technologies}
                                onChange={handleUpdateProfileInfo}
                                placeholder="Tecnologías y/o lenguajes de programación" />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-group">
                            <label htmlFor="featured_projects" className="form-label">Proyectos destacados</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                name="featured_projects" 
                                id="featured_projects"
                                value={featured_projects}
                                onChange={handleUpdateProfileInfo}
                                placeholder="Proyectos destacados" />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-group">
                            <label htmlFor="certifications" className="form-label">Certificaciones</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                name="certifications" 
                                id="certifications"
                                value={certifications}
                                onChange={handleUpdateProfileInfo}
                                placeholder="Certificaciones" />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-group">
                            <label htmlFor="languages" className="form-label">Idiomas</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                name="languages" 
                                id="languages"
                                value={languages}
                                onChange={handleUpdateProfileInfo}
                                placeholder="Idiomas" />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-group">
                            <label htmlFor="curriculum" className="form-label">Cargar curriculum  (PDF Máximo 1MB)</label>
                            <input 
                                type="file" 
                                className="form-control" 
                                name="curriculum" 
                                id="curriculum"
                                onChange={(event) => handleFilePDF(event.target.files[0])}
                                placeholder="Cargar curriculum" />
                        </div>
                    </div>
                    <div className="col-12">
                        <button type="submit">Actualizar</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Studies;
