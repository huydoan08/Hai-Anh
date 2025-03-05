import {
 Sprout,
  LucideIcon,
  LandPlot,
  AlignHorizontalDistributeCenter,
  Image
} from "lucide-react";

type Submenu = {
  href: string;
  label: string;
  active?: boolean;
};

type Menu = {
  href: string;
  label: string;
  active?: boolean;
  icon: LucideIcon;
  submenus?: Submenu[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "",
          label: "Bộ ảnh của Dâu Tây",
          icon: Image,
          submenus: [
            {
              href: "/dau-tay-0-den-1-tuoi",
              label: "Dâu Tây từ 0 đến 1 tuổi"
            },
            {
              href: "/dau-tay-1-den-2-tuoi",
              label: "Dâu Tây từ 1 đến 2 tuổi"
            }
          ]
        }
      ]
    },
    {
      groupLabel: "",
      menus: [
        {
          href: "",
          label: "Bộ video của Dâu Tây",
          icon: Image,
          submenus: [
            {
              href: "/dau-tay-0-den-1-tuoi-video",
              label: "Dâu Tây từ 0 đến 1 tuổi"
            }
          ]
        }
      ]
    }
  ];
}
