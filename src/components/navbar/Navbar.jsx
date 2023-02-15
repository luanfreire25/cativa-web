import "../../styles/Navbar.css"

const Navbar = ({cwLogo, switchBtn}) => {

    return (
      <div className="navbar">
        {cwLogo}
        <ul className="itens">
          <li>Home</li>
          <li>Serviços</li>
          <li>Sobre</li>
          <li>Soluções</li>
          <li>FAQ</li>
          <li>Contato</li>
        </ul>
        {switchBtn}
      </div>
    );
  };
  
export default Navbar;  