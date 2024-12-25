import { useCallback } from 'react';

function useNotification() {
    const sendNotification = useCallback((message) => {
        if (!("Notification" in window)) {
            console.error("This browser does not support notifications.");
            return;
        }

        if (Notification.permission === "granted") {
            new Notification(message);
        } else if (Notification.permission !== "denied") {
            Notification.requestPermission().then((permission) => {
                if (permission === "granted") {
                    new Notification(message);
                }
            });
        }
    }, []);

    const sendDelayedNotification = useCallback((message, delay) => {
        setTimeout(() => sendNotification(message), delay);
    }, [sendNotification]);

    return { sendNotification, sendDelayedNotification };
}

export default useNotification;
