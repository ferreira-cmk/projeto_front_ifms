import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-900 p-4 shadow-lg">
      <ul className="flex justify-center gap-8 text-purple-400 font-bold text-lg">
        <li>
          <Link
            to="/"
            className="hover:text-green-400 transition-colors duration-200"
          >
            Início
          </Link>
        </li>
        <li>
          <Link
            to="/sobre"
            className="hover:text-green-400 transition-colors duration-200"
          >
            Sobre
          </Link>
        </li>
        <li>
          <Link
            to="/pessoas"
            className="hover:text-green-400 transition-colors duration-200"
          >
            Personagens
          </Link>
        </li>
      </ul>
    </nav>
  );
}
