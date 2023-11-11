// pages/index.tsx
import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to <span className="text-blue-600">Roomie</span>
        </h1>

        <p className="mt-3 text-2xl">Manage your shared tasks effortlessly!</p>

        <div className="mt-6">
          <Link
            className="px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
            href="/todo-list"
          >
            Go to To-Do List
          </Link>
        </div>

        <div className="mt-6">
          <Link
            className="px-4 py-2 border border-transparent text-base font-medium rounded-md text-blue-600 bg-transparent hover:bg-blue-50 md:py-2 md:text-lg md:px-4"
            href="/sign-out"
          >
            Sign Out
          </Link>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://github.com/your-github-repo"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Roomie
        </a>
      </footer>
    </div>
  );
};

export default Home;
