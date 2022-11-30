import React, { useEffect, useState } from 'react'

const Mouse = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const logmousePosition = (e) => {
        console.log('Mouse event');
        setX(e.ClientX)
        setY(e.ClientY)
    }

    // // without cleanup
    // useEffect(() => {
    //     console.log("use effect called");
    //     window.addEventListener("mousemove", logmousePosition)
    // }, [])

    //with cleanup

    useEffect(() => {
        console.log("use effect called");
        window.addEventListener("mousemove", logmousePosition)

        return () => {
            console.log("component unmounting Code");
            window.removeEventListener("mousemove", logmousePosition)
        }
    }, [])

    return (
        <div>
            Hooks X- {x} , Y - {y}
        </div>
    )
}

export default Mouse