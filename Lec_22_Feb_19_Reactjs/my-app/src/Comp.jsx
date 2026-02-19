import { useEffect } from "react"


function Comp() {

    useEffect(() => {
        return () => {
            console.log('Comp unmount...')
        }
    }, [])

    return (
        <>
            <h2>this is Comp componet</h2>
        </>
    )
}

export default Comp