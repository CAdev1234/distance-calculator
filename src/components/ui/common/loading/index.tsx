import React from 'react';
import './loading.css';
interface LoadingProps {
    ratio?: number;
}
const Loading: React.FC<LoadingProps> = ({ratio = 1}) => {
    return (
        <div className="loading">
            <div className="lds-spinner" style={{transform: `scale(${ratio})`}}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};
export default Loading;
