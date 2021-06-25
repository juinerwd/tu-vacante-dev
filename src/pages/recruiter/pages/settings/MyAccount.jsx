import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startUploading } from '../../../../actions/user';

import '../../../../styles/components/myAccount.scss';

const MyAccount = () => {

    const dispatch = useDispatch();

    const { profilePhoto } = useSelector(state => state.auth);

    const handlechangeImageProfile = async (file) => {
        dispatch(startUploading(file));
    }

    return (
        <section className="myAccount">
            <form className="myAccount__form">
                <div className="myAccount__file">
                    <div className="text-center">
                        <div className="myAccount_profilephoto">
                            <img src={profilePhoto} alt="Foto" />
                        </div>

                        <p>
                            Arrastra aquí tu imagen de perfil <br />
                            o <label className="label_file" htmlFor="file">Elige tu foto</label>
                        </p>
                        <input type="file" name="file" id="file" onChange={(event) => handlechangeImageProfile(event.target.files[0])} />
                    </div>
                </div>
            </form>
        </section>
    )
}

export default MyAccount;
