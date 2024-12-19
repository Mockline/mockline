import Link from "next/link";

export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold">
        Welcome to the Next Playground
      </h1>
      <p className="mt-2 text-gray-12">
        This is a playground for testing and showcasing Next components.
      </p>
      <div className="mt-4">
        <Link href="/playground/button" className="text-blue-600 hover:underline">
          Button
        </Link>
      </div>
    </div>
  );
}
