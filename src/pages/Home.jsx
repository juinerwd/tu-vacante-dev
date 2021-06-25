import React from 'react'
import { useSelector } from 'react-redux';
// import { useSelector } from 'react-redux';
import Banner from '../components/Banner';
import NewVacancy from '../components/NewVacancy';

function Home() {
    const { vacancies } = useSelector(state => state.vacancy);
    const styles = {
        color: "rgba(34, 51, 68, 0.5)",
        height: "1px"
    };

    return (
        <div>
            <Banner />
            <div className="container">
                <h3>Nuevas ofertas</h3>
                <hr style={styles} />
                <div className="row">
                    {
                        vacancies.map(vacancy => (
                            <NewVacancy key={vacancy.vid} vacancy={vacancy} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Home;
