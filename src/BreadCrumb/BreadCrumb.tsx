import React from "react";
import { useLocation, Link } from "react-router-dom";

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  const paths = location.pathname.split("/").filter((path) => path);

  return (
    <nav className="text-sm text-gray-500 py-2 lg:py-4 overflow-x-auto whitespace-nowrap">
      <ul className="flex space-x-2 items-center">
        {/* Home Link */}
        <li>
          <Link to="/home" className="text-[#000000B0] hover:underline">
            Home
          </Link>
        </li>

        {/* Templates Link */}
        {paths.length > 0 && (
          <li className="flex items-center">
            <span className="mx-2">›</span>
            <Link to="/template" className="text-[#000000B0] hover:underline">
              Templates
            </Link>
          </li>
        )}

        {/* Letterhead Templates Link */}
        {paths.includes("template") && (
          <li className="flex items-center">
            <span className="mx-2">›</span>
            <Link to="/template" className="text-[#000000B0] hover:underline">
              Letterhead Templates
            </Link>
          </li>
        )}

        {/* Dynamic breadcrumbs */}
        {paths
          .filter((path) => path !== "template") // Exclude "template"
          .map((path, index) => {
            const fullPath = `/${paths.slice(0, index + 1).join("/")}`;
            return (
              <li key={fullPath} className="flex items-center">
                <span className="mx-2">›</span>
                <Link
                  to={fullPath}
                  className="text-[#000000B0] hover:underline"
                >
                  {path.replace(/_/g, " ")}
                </Link>
              </li>
            );
          })}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
