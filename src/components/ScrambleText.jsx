import { useState, useEffect, useCallback } from 'react';

const CHARS = '!<>-_\\/[]{}—=+*^?#________';

export default function ScrambleText({ text, speed = 30, delay = 0, className = "" }) {
    const [displayText, setDisplayText] = useState(text);
    const [isScrambling, setIsScrambling] = useState(false);

    const scramble = useCallback(() => {
        let iteration = 0;
        let interval = null;

        clearInterval(interval);

        interval = setInterval(() => {
            setDisplayText(prev => 
                text.split("")
                    .map((char, index) => {
                        if (index < iteration) {
                            return text[index];
                        }
                        return CHARS[Math.floor(Math.random() * CHARS.length)];
                    })
                    .join("")
            );

            if (iteration >= text.length) {
                clearInterval(interval);
                setIsScrambling(false);
            }

            iteration += 1 / 3;
        }, speed);
    }, [text, speed]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsScrambling(true);
            scramble();
        }, delay);
        return () => {
            clearTimeout(timer);
        };
    }, [scramble, delay]);

    return (
        <span className={className}>
            {displayText}
        </span>
    );
}
