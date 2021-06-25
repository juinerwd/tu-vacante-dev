// import { fetchWithToken } from './fetch';
import Swal from 'sweetalert2';

export const uploadFile = async ( file ) => {

    const cloudUrl = 'http://localhost:4001/api/uploads';
    const token = localStorage.getItem('token') || '';

    const formData = new FormData(); //fieldname
    // formData.append('fieldname', 'curriculum');
    formData.append('curriculum', file);

    const resp = await fetch(cloudUrl, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/pdf',
            'x-token': token
        },
        body: {
            curriculum: formData
        }
    });

    const body = await resp.json();

    if (body.ok) {
        Swal.fire(
            'Curriculum',
            'El archivo se subio correctamente',
            'info'
        );
    }

}