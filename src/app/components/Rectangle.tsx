interface RectangleProps {
  color: string;
}

export default function Rectangle({ color }: RectangleProps) {
  return <div className={`w-8 h-8 ${color}`}></div>;
}
