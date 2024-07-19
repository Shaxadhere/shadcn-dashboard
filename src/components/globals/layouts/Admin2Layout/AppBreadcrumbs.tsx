import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import useBreadcrumbs from "@/hooks/useBreadcrumbs";
import { capitalize } from "@/lib/string-utils";
import React from "react";
import { Link } from "react-router-dom";

const AppBreadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs();
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbs?.map((item, index) => (
          <React.Fragment key={index}>
            {index > 0 && <BreadcrumbSeparator />}
            <Link to={item.link}>
              <BreadcrumbItem>{capitalize(item.title)}</BreadcrumbItem>
            </Link>
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default AppBreadcrumbs;
