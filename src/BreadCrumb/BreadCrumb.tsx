import React from "react";
import { useLocation, Link } from "react-router-dom";

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  const paths = location.pathname.split("/").filter((path) => path);

  return (
    <nav className="text-sm text-gray-500 py-4">
      <ul className="flex space-x-2">
        {/* Home Link */}
        <li>
          <Link to="/home" className="text-[#000000B0] hover:underline">
            Home
          </Link>
        </li>

        {/* Templates Link */}
        {paths.length > 0 && (
          <>
            <li className="flex items-center">
              <span className="mx-2">›</span>
              <Link
                to="/template"
                className="text-[#000000B0] hover:underline"
              >
                Templates
              </Link>
            </li>
          </>
        )}

        {/* Letterhead Templates Link (Always before the template name) */}
        {paths.includes("template") && (
          <>
            <li className="flex items-center">
              <span className="mx-2">›</span>
              <Link to="/template" className="text-[#000000B0] hover:underline">
                Letterhead Templates
              </Link>
            </li>
          </>
        )}

        {/* Dynamic breadcrumbs for specific templates */}
        {paths
          .filter((path) => path !== "template") // Exclude "template" since we added it manually
          .map((path, index) => {
            const fullPath = `/${paths.slice(0, index + 1).join("/")}`;
            return (
              <li key={fullPath} className="flex items-center">
                <span className="mx-2">›</span>
                <Link to={""} className="[#000000B0] hover:underline">
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
