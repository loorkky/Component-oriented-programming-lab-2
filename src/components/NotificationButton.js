import React from 'react';
import useNotification from '../hooks/useNotification';

function NotificationButton() {
    const { sendNotification, sendDelayedNotification } = useNotification();

    return (
        <div>
            <button onClick={() => sendNotification("Сповіщення надіслано!")}>
                Надіслати сповіщення
            </button>
            <button onClick={() => sendDelayedNotification("Сповіщення через 5 секунд!", 5000)}>
                Надіслати сповіщення за 5 секунд
            </button>
        </div>
    );
}

export default NotificationButton;
