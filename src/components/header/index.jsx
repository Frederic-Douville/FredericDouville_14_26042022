import Logo from '../../assets/Logo.jpg';

function Header() {
    return (
        <div className="header-ctn">
            <img src={Logo} alt="Logo Wealth Health" className="header-logo" />
            <span className="header-title">HRnet</span>
        </div>
    );
}
export default Header;
