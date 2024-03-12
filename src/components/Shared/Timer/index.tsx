import {useEffect, useState} from 'react';

const Timer = () => {
    const initialSeconds = 4 * 60 * 60 + 30 * 60; // 4 hours and 30 minutes in seconds
    const [seconds, setSeconds] = useState<number>(initialSeconds);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds - 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const formatTime = (totalSeconds: number) => {
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        return `00:${hours<10 ? '0': ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    return (
        <div>
            <h1 className='text-3xl font-bold'>{formatTime(seconds)}</h1>
        </div>
    );
};

export default Timer;
