import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import moment from 'moment';

import SidebarVacancies from '../components/SidebarVacancies';
import CardVacancy from '../components/CardVacancy';


function Vacancies() {
    const [publicationTime, setPublicationTime] = useState('1');
    const { vacancies } = useSelector(state => state.vacancy);

    const [filters, setFilters] = useState([]);

    useEffect(() => {
        const handlefilters = () => {
            let filter = [];
            vacancies.map(vacancy => (
                (publicationTime === '1' || moment(vacancy.createdAt).format('L') === publicationTime || (moment(vacancy.createdAt).format('L') >= publicationTime && moment(vacancy.createdAt).format('L') <= publicationTime)) && (
                    filter = [...filter, vacancy]
                )
            ))
            setFilters(filter);
        }
        handlefilters();
    }, [vacancies, publicationTime]);

    return (
        <>
            <Container>
                <Row className="pt-5">
                    <Col xs={12} md={4}>
                        <SidebarVacancies publicationTime={publicationTime} setPublicationTime={setPublicationTime} />
                    </Col>
                    <Col xs={12} md={8}>
                        <div>
                            {
                                filters.map( vacancy => (
                                    <CardVacancy key={vacancy.vid} vacancy={vacancy} />
                                ))
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Vacancies;
