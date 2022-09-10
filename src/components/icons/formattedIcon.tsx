import React from 'react';
import {
    IconArrowLeft,
    IconArrowRight,
    IconDashboard,
    IconException,
    IconExternal,
    IconForm,
    IconHelp,
    IconNotification,
    IconProfile,
    IconReload,
    IconTriangleDown,
    IconTriangleLeft,
    IconTriangleUp,
    IconTriangleRight,
    IconChevronDown,
    IconChevronLeft,
    IconChevronRight,
    IconChevronUp,
    IconClose,
} from './index';
import IconSearch from './search';
export interface FormattedIconProps {
    name: string;
}
const FormattedIcon: React.FC<FormattedIconProps> = ({name}) => {
    const format = (name: string) => {
        switch (name) {
            case 'Dashboard':
                return <IconDashboard />;
            case 'Profile':
                return <IconProfile />;
            case 'Form':
                return <IconForm />;
            case 'Exception':
                return <IconException />;
            case 'Help':
                return <IconHelp />;
            case 'Notification':
                return <IconNotification />;
            case 'Search':
                return <IconSearch />;
            case 'ArrowLeft':
                return <IconArrowLeft />;
            case 'ArrowRight':
                return <IconArrowRight />;
            case 'Reload':
                return <IconReload />;
            case 'TriangleDown':
                return <IconTriangleDown />;
            case 'TriangleUp':
                return <IconTriangleUp />;
            case 'TriangleLeft':
                return <IconTriangleLeft />;
            case 'TriangleRight':
                return <IconTriangleRight />;
            case 'ChevronDown':
                return <IconChevronDown />;
            case 'ChevronUp':
                return <IconChevronUp />;
            case 'ChevronLeft':
                return <IconChevronLeft />;
            case 'ChevronRight':
                return <IconChevronRight />;
            case 'Close':
                return <IconClose />;
            default:
                return <IconExternal />;
        }
    };
    return <>{format(name)}</>;
};

export default FormattedIcon;
