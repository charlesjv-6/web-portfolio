import React, { useEffect, useState } from "react"

export default function Error(){
    const [ progress, setProgress ] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prevProgress => {
                if (prevProgress === 100) {
                    window.location.href = '/';
                } else {
                    return prevProgress + 1; 
                }
            });
        }, 150);

        return () => clearInterval(interval); 
    }, []);
    return (
        <section className="error-page">
            <header className="error-title">
                <h1>{':)'}</h1>
            </header>
            <div className="error-content">
                <span>Your PC haven't run into a problem it couldn't handle, and it does not need a restart. We'll just count to 100 and redirect you to the homepage</span><br/><br/>
                <span>{`${typeof progress == 'number' ? progress : 100}% complete`}</span>
            </div>
            <footer className="error-footer">
                <span>It will restart if you restart it</span>
            </footer>
        </section>
    )
}