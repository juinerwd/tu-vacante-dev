import React from 'react';

const StudiesSkills = ({activeSection}) => {
    return (
        <div className={(activeSection === 3) ? 'container' : 'd-none'}>
            <div className="studies__skills--experiences">
                <h3>Experiencias</h3>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
            </div>  
            <div className="studies__skills--technologies">
                <h3>Tecnologías y/o lenguajes de programación</h3>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JAVASCRIPT</li>
                    <li>REACTJS</li>
                    <li>ANGULARJS</li>
                    <li>NODEJS</li>
                </ul>
            </div>
            <div className="studies__skills--projects">
                <h3>Proyectos destacados</h3>
                <ul>
                    <li>www.proyecto1.com</li>
                    <li>www.proyecto2.com</li>
                    <li>www.proyecto3.com</li>
                </ul>
            </div>   
        </div>
    )
}

export default StudiesSkills;
