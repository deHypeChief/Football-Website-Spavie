import './style.css'
import logo from '../../assets/icons/White Logo Png.png'
export default function Loading(){
    return(
        <>
            <section className="load">
                <img src={logo} alt="logo" />
            </section>
        </>
    )
}