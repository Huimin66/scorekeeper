import Player from "./Player";

export default {
  title: "Components/Player",
  component: Player,
};

export const Default = () => {
  return <Player name="Jone" score="0"></Player>;
};
