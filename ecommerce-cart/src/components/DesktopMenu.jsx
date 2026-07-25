import { Button } from "./ui/button";
const DesktopMenu = () => {
  const links = ["Collections", "Men", "Women", "About", "Contact"];
  return (
    <div className="hidden xl:flex gap-(--space-m)">
      {links.map((link) => (
        <Button
          key={link}
          variant="link"
          className=" cursor-pointer
        relative
        h-20
        rounded-none
        text-(--dark-grayish-blue)
        after:absolute
        after:left-0
        after:bottom-0
        after:h-1
        after:w-full
        after:origin-left
        after:scale-x-0
        after:bg-(--orange)
        after:transition-transform
        after:duration-300
        hover:after:scale-x-100
      "
        >
          {link}
        </Button>
      ))}
    </div>
  );
};

export default DesktopMenu;
