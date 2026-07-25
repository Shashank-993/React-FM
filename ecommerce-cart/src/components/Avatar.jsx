import avatar from "../images/image-avatar.png";
import Cart from './Cart';
const Avatar = () => {
  return (
    <div className="flex items-center gap-(--space-s) lg:gap-(--space-l)">
      <Cart />
      <img
        src={avatar}
        className="w-7 h-7 lg:w-13 lg:h-13 rounded-full cursor-pointer border-2 border-transparent hover:border-(--orange)"
        alt="user-avatar"
      />
    </div>
  );
}

export default Avatar