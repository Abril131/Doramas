import logoApp from '../assets/img/TEAM_WANG.png'
import"../assets/style/Estilo.css"
function Header(){
    return(
        <header>
            <img src={logoApp} alt="Kdrama" width={350}/>
        </header>
    )
}

export default Header;