import logo from "../images/logo.svg";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";
import Avatar from "./Avatar";
const Header = () => {
  return (
    <header className="w-full flex items-center p-(--space-s) justify-between md:w-[80%] md:mx-auto lg:p-(--space-l) lg:border-b">
      <div className="flex items-baseline lg:items-center gap-(--space-xs) lg:gap-(--space-l)">
        <MobileMenu />
        <img src={logo} alt="logo" />
        <DesktopMenu />
      </div>
      <Avatar />
    </header>
  );
};

export default Header;
