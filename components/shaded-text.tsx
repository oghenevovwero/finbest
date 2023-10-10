export default function ShadedText({
  leftColor,
  text,
  rightColor,
}: {
  leftColor: string;
  rightColor: string;
  text: string;
}) {
  return (
    <span
      className={`bg-clip-text text-transparent bg-gradient-to-r from-[#005071] to-[#00AACA]`}
    >
      {text}
    </span>
  );
}
