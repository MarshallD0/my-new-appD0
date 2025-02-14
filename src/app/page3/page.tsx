// Grid.js
import Link from "next/link";
import Rectangle from "../components/Rectangle";

export default function Grid() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="grid grid-cols-3 gap-2">
        <Rectangle color="bg-yellow-700"/>
        <Rectangle color="bg-red-700"/>
        <Rectangle color="bg-blue-700"/>
        <Rectangle color="bg-red-700"/>
        <Rectangle color="bg-blue-700"/>
        <Rectangle color="bg-red-700"/>
        <Rectangle color="bg-blue-700"/>
        <Rectangle color="bg-red-700"/>
        <Rectangle color="bg-blue-700"/>
      </div>
      <Link href="/" className="text-blue-500 hover:underline">
        Go to home
      </Link>
    </div>
  );
}
