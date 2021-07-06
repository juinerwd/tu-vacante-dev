import React from 'react';

const ComponentInput = ({col, label, type, classname, name, id, value, onChange, placeholder}) => {
    return (
        <div className={col}>
            <div className="form-group">
                <label htmlFor={id} className="form-label">{label}</label>
                <input 
                    type={type} 
                    className={classname}
                    name={name} 
                    id={id}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder} />
            </div>
        </div>
    )
}

export default ComponentInput;
