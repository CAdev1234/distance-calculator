import React, {useEffect, useState} from 'react';
import './input.scss';

export interface InputValueType {
    name: string;
    value: string | number;
}
export interface InputProps {
    type: string;
    name: string;
    defaultVal?: string | number;
    placeholder?: string;
    disabled?: boolean;
    onChange?: (val: InputValueType) => void;
}
const Input: React.FC<InputProps> = ({
    defaultVal,
    type,
    placeholder = 'Please',
    name,
    disabled = false,
    onChange,
}) => {
    const [inputVal, setInputVal] = useState(defaultVal);
    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        onChange({
            name: name,
            value:
                type === 'number' ? Number(evt.target.value) : evt.target.value,
        });
    };
    useEffect(() => {
        setInputVal(defaultVal);
    }, []);
    return (
        <>
            <input
                className={`input ${type}_input ${disabled ? 'disabled' : ''}`}
                type={type}
                name={name}
                placeholder={placeholder}
                value={inputVal}
                onChange={(evt) => {
                    handleChange(evt);
                }}
            />
        </>
    );
};

export default Input;
