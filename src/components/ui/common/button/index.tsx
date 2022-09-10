import React from 'react';
import './button.scss';
import {FormattedIcon} from '@components/icons';
export interface ButtonProps {
    iconName?: string;
    disabled?: boolean;
    onClick: () => void;
}
const Button: React.FC<ButtonProps> = ({
    iconName,
    children,
    disabled = false,
    onClick,
}) => {
    return (
        <>
            <button
                className={`btn ${iconName ? 'icon-btn' : 'txt-btn'}`}
                disabled={disabled}
                onClick={onClick}>
                {iconName ? <FormattedIcon name={iconName} /> : ''}
                {children}
            </button>
        </>
    );
};

export default Button;
