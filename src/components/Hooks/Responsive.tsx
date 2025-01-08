"use client";
import { useState, useEffect } from 'react';

export function useResponsive() {
    const [windowSize, setWindowSize] = useState({
        width: 0,
        height: 0,
    });

    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);  // クライアントサイドでのみ処理を行う
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });

        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isSP = windowSize.width <= 768;
    const isTB = windowSize.width > 768 && windowSize.width <= 1024;
    const isTBDown = isSP || isTB;
    const isPC = windowSize.width > 1024;

    // サーバーサイドではデフォルトの状態を返す
    if (!isClient) {
        return {
            width: 0,
            height: 0,
            isSP: false,
            isTB: false,
            isTBDown: false,
            isPC: false,
        };
    }

    return { ...windowSize, isSP, isTB, isTBDown, isPC };
}