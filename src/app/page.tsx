import Link from "next/link";
import Rectangle from "./components/Rectangle";

export default function Home() {
  return (
   <div className="min-h-screen flex items-center justify-center">
        <Rectangle color="bg-red-700"/>
      <Link href="page2" className="text-blue-500 hover:underline">
            Go to page2
        </Link>
        <Link href="page3" className="text-blue-500 hover:underline">
            Go to grid
        </Link>

   </div>
  );
}
