import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { startUpdateStudies } from '../../../../actions/user';
import Input from '../../../../components/Input';

import { useForm } from '../../../../hooks/useForm';

import '../../../../styles/components/studies.scss';

const Studies = () => {

    const dispatch = useDispatch()
    const [fileData, setFileData] = useState("");

    const [ updateProfileInfo, handleUpdateProfileInfo] = useForm({
        applied_studies: '',
        skills: '',
        tools_technologies: '',
        featured_projects: '',
        certifications: '',
        languages: '',
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
                    <Input
                        col="col-12"
                        label="Estudios realizados"
                        type="text"
                        classname="form-control"
                        name="applied_studies"
                        id="applied_studies"
                        value={applied_studies}
                        onChange={handleUpdateProfileInfo}
                        placeholder="Estudios realizados"
                     />
                    <Input
                        col="col-12"
                        label="Habilidades"
                        type="text"
                        classname="form-control"
                        name="skills"
                        id="skills"
                        value={skills}
                        onChange={handleUpdateProfileInfo}
                        placeholder="Habilidades"
                     />
                    <Input
                        col="col-12"
                        label="Tecnologías y/o lenguajes de programación"
                        type="text"
                        classname="form-control"
                        name="tools_technologies"
                        id="tools_technologies"
                        value={tools_technologies}
                        onChange={handleUpdateProfileInfo}
                        placeholder="Tecnologías y/o lenguajes de programación"
                     />
                    <Input
                        col="col-12"
                        label="Proyectos destacados"
                        type="text"
                        classname="form-control"
                        name="featured_projects"
                        id="featured_projects"
                        value={featured_projects}
                        onChange={handleUpdateProfileInfo}
                        placeholder="Proyectos destacados"
                     />
                    <Input
                        col="col-12"
                        label="Certificaciones"
                        type="text"
                        classname="form-control"
                        name="certifications"
                        id="certifications"
                        value={certifications}
                        onChange={handleUpdateProfileInfo}
                        placeholder="Certificaciones"
                     />
                    <Input
                        col="col-12"
                        label="Idiomas"
                        type="text"
                        classname="form-control"
                        name="languages"
                        id="languages"
                        value={languages}
                        onChange={handleUpdateProfileInfo}
                        placeholder="Idiomas"
                    />
                    <div className="col-12">
                        <div className="form-group">
                            <label htmlFor="applied_studies" className="form-label">Cargar curriculum  (PDF Máximo 1MB)</label>
                            <input 
                                type="file" 
                                className="form-control"
                                name="curriculum" 
                                id="curriculum"
                                onChange={(event) => handleFilePDF(event.target.files[0])}
                                placeholder="Cargar curriculum" />
                        </div>
                    </div>
                    <div className="col-12 btn-update">
                        <button type="submit">Actualizar</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Studies;
