import menu from "../images/icon-menu.svg";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
const MobileMenu = () => {
  const links = ["Collections", "Men", "Women", "About", "Contact"];
  return (
    <aside>
      <Sheet>
        <SheetTrigger>
          <img src={menu} className="xl:hidden" alt="menu-icon" />
        </SheetTrigger>
        <SheetContent
          side="left"
          className="py-(--space-xl) px-(--space-m) md:py-(--space-2xl) md:px-(--space-l)"
        >
          {links.map((link) => (
            <SheetClose asChild className="text-left">
              <Button variant="link" className="text-(length:--fs-1) font-bold text-black/75">
                {link}
              </Button>
            </SheetClose>
          ))}
        </SheetContent>
      </Sheet>
    </aside>
  );
};

export default MobileMenu;
