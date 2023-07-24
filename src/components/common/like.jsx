import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const attr = {
  size: "1.5rem",
  className: "like-btn",
};

export default function Like({ liked, onToggleLike }) {
  const Icon = liked ? AiFillHeart : AiOutlineHeart;
  return <Icon onClick={onToggleLike} {...attr} />;
}
