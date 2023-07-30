import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="bg-slate-800 h-12 flex justify-between p-2">
      <h1 className="text-2xl  font-bold">Welcome to Blog</h1>
      <div className="flex gap-2 text-white font-bold">
        <Link
          to="/blogs/create"
          className="bg-slate-700 hover:bg-slate-900  py-2 px-4 rounded-xl flex items-center"
        >
          Add New
        </Link>
        <button className="bg-slate-700 hover:bg-slate-900   py-2 px-4 rounded-xl flex items-center">
          logout
        </button>
      </div>
    </nav>
  );
}
