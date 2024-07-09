import { useState } from "react";
import { HeartIcon } from "../icons/HeartIcon";
import "./LikeButton.css";
import SpinnerIcon from "../icons/LikeIcon";

interface ButtonState {
  liked: boolean;
  loading: boolean;
}

export default function LikeButton() {
  const [state, setState] = useState<ButtonState>({
    liked: false,
    loading: false,
  });

  async function handleToggleLike() {
    setState((state) => ({ ...state, loading: true }));
    try {
      const res = await fetch(
        "https://www.greatfrontend.com/api/questions/like-button",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            action: state.liked ? "unlike" : "like",
          }),
        },
      );

      if (res.ok) {
        setState((state) => ({ ...state, liked: !state.liked }));
      }
    } catch {
      console.log("eror");
    } finally {
      setState((state) => ({ ...state, loading: false }));
    }
  }

  function renderIcon() {
    if (state.loading) return <SpinnerIcon />;
    return <HeartIcon />;
  }

  return (
    <button
      className={[
        "like-button",
        state.liked ? "like-button--liked" : "like-button--default",
      ]
        .filter(Boolean)
        .join(" ")}
      onClick={handleToggleLike}
    >
      {renderIcon()} Like
    </button>
  );
}
