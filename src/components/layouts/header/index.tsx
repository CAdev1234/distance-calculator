import React from 'react';
import './header.scss';
import Button from '@components/ui/common/button/index';
import {useNavigate} from 'react-router-dom';
import storage, {StorageType} from '@utils/storage';
import {Storage_Key} from '@data/constant';
const Header = () => {
    const navigate = useNavigate();
    const format = () => {
        storage.rcRemoveItem(StorageType.local, Storage_Key.city_data);
        navigate('/');
    };
    const handleHelp = () => {
        console.log('Handle help called');
    };
    const handleNoti = () => {
        console.log('Handle noti called');
    };
    return (
        <>
            <header>
                <div
                    className="header-logo"
                    onClick={() => {
                        format();
                    }}>
                    <img
                        src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
                        width={28}
                        height={28}
                        alt="logo"
                    />
                    <h1>Pro Test</h1>
                </div>
                <div className="header-options">
                    <Button
                        iconName="Help"
                        onClick={() => {
                            handleHelp();
                        }}></Button>
                    <Button
                        iconName="Notification"
                        onClick={() => {
                            handleNoti();
                        }}></Button>
                </div>
            </header>
        </>
    );
};

export default Header;
