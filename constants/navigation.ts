import SearchIcon from "@mui/icons-material/Search";
import InsertInvitationIcon from "@mui/icons-material/InsertInvitation";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import LibraryAddCheckIcon from "@mui/icons-material/LibraryAddCheck";
import { SvgIconComponent } from "@mui/icons-material";

export interface SideTabItem {
  label: string;
  icon: SvgIconComponent;
  path?: string;
}

export const SideTabs: SideTabItem[] = [
  { label: "Search", icon: SearchIcon, path: "/task-search" },
  { label: "Today", icon: InsertInvitationIcon, path: "/today" },
  { label: "Upcoming", icon: CalendarMonthIcon, path: "/upcoming" },
  { label: "Filters", icon: FilterAltIcon, path: "/filters" },
  { label: "Completed", icon: LibraryAddCheckIcon, path: "/completed" },
  { label: "Appearance", icon: ColorLensIcon, path: "/appearance" },
];
