import {string} from 'prop-types';
import './style.css'

export default function Button(props){
    const {children, type} = props

    return(
        <button className={type || 'bttn-primary'}>
            {children}
        </button>  
    )
}

Button.propTypes = {
    children: string.isRequired,
    type: string,
};
