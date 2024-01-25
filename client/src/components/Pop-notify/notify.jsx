import './styles.css'
import { string } from 'prop-types';
import { useNavigate } from 'react-router-dom'

export function Notify_Success(props) {
    const { children } = props

    const navTo = useNavigate()

    function navigate() {
        navTo('/')
    }

    return (
        <>
            <main>
                <div className="NotifyBox">
                    <div className="notify_BoxImg"></div>
                    <h2>{children}</h2>
                    <button onClick={navigate}>Done</button>
                </div></main>
        </>
    )
}

Notify_Success.propTypes = {
    children: string.isRequired,
};