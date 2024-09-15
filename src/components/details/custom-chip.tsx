import { Chip } from "@mui/joy";

type textProps = {
  text: string;
};

export default function CustomChip({ text }: textProps) {
  const getColor = () => {
    switch (text) {
      case "easy":
        return "success";
      case "medium":
        return "warning";
      case "hard":
        return "danger";
      default:
        return "neutral";
    }
  };

  return (
    <Chip color={getColor()} variant="solid">
      {text.toUpperCase()}
    </Chip>
  );
}
