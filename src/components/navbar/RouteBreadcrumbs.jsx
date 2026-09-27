import { useMatches } from "react-router";
import Breadcrumb from "../Breadcrumb.jsx";

function RouteBreadcrumbs() {
  const matches = useMatches();
  const crumbs = matches.filter((match) => match.handle?.breadcrumb);

  return (
    <Breadcrumb>
      {crumbs.map((match, index) => {
        const isLast = index === crumbs.length - 1;
        const label =
          typeof match.handle.breadcrumb === "function"
            ? match.handle.breadcrumb(match.data, match.params)
            : match.handle.breadcrumb;

        return (
          <span key={match.pathname} className="flex items-center gap-2">
            {index > 0 && <Breadcrumb.Separator />}
            <Breadcrumb.Item to={match.pathname} isCurrent={isLast}>
              {label}
            </Breadcrumb.Item>
          </span>
        );
      })}
    </Breadcrumb>
  );
}
export default RouteBreadcrumbs;
