import { useEffect, useState } from 'react';

function WidthCalculation() {
    const [screenWidth, setScreenWidth] = useState(0);
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
        
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    if (!hasMounted) {
        return null;
    }

    return screenWidth
}

export default WidthCalculation
