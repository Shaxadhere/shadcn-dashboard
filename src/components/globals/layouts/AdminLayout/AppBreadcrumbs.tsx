import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
            <BreadcrumbItem>
              <Link to={item.link}>
                <BreadcrumbLink>{capitalize(item.title)}</BreadcrumbLink>
              </Link>
            </BreadcrumbItem>
          </React.Fragment>
        ))}

        {/* <BreadcrumbItem>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1">
              <BreadcrumbEllipsis className="h-4 w-4" />
              <span className="sr-only">Toggle menu</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem>Documentation</DropdownMenuItem>
              <DropdownMenuItem>Themes</DropdownMenuItem>
              <DropdownMenuItem>GitHub</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/docs/components">Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem> */}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default AppBreadcrumbs;
