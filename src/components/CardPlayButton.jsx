import { Pause, Play } from "./Player";
import { usePlayerStore } from "@/store/playerStore";

export function CardPlayButton({ id }) {
  const { 
    currentMusic, 
    isPlaying, 
    setIsPlaying, 
    setCurrentMusic 
  } = usePlayerStore((state) => state);

  const isPlayingPlaylist = isPlaying && currentMusic?.playlist.id === id;

  const handleClick = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <button
      onClick={handleClick}
      className="card-play-button rounded-full bg-green-600 p-4"
    >
      {isPlaying ? <Pause /> : <Play />}
    </button>
  );
}
