import * as React from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const NavButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <NavigationMenu className="md:hidden">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <HamburgerMenuIcon className="w-6 h-6" />
          </NavigationMenuTrigger>

          <NavigationMenuContent>
            <ul className="flex flex-col gap-3 p-6">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Button
                    onClick={() => navigate("/aboutme")}
                    variant={"ghost"}
                    size="sm"
                    className="text-lg px-1"
                  >
                    About Me
                  </Button>
                </NavigationMenuLink>
              </li>

              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Button
                    onClick={() => navigate("/experiences")}
                    variant={"ghost"}
                    size="sm"
                    className="text-lg px-1"
                  >
                    Experiences
                  </Button>
                </NavigationMenuLink>
              </li>

              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Button
                    onClick={() => navigate("/projects")}
                    variant={"ghost"}
                    size="sm"
                    className="text-lg px-1"
                  >
                    Projects
                  </Button>
                </NavigationMenuLink>
              </li>

              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Button
                    onClick={() => navigate("/education")}
                    variant={"ghost"}
                    size="sm"
                    className="text-lg px-1"
                  >
                    Education
                  </Button>
                </NavigationMenuLink>
              </li>

              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Button
                    onClick={() => navigate("/cca")}
                    variant={"ghost"}
                    size="sm"
                    className="text-lg px-1"
                  >
                    CCAs
                  </Button>
                </NavigationMenuLink>
              </li>

              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Button
                    variant={"ghost"}
                    size="sm"
                    className="text-lg px-1"
                  >
                    <a href="/WU_XIAOYUN_CV_v2.3.pdf" download>
                      Resume
                    </a>
                  </Button>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
