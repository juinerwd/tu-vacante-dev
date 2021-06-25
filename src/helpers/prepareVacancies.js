import moment from 'moment';

export const prepareVacancies = (vacancies = []) => {

    return vacancies.map(
        (e) => ({
            ...e,
            startDate: moment(e.startDate).toDate(),
            finishDate: moment(e.finishDate).toDate(),
        })
    );

}