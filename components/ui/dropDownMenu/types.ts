export interface DropdownColumnProps {
  items: DropdownItem[];
  title: string;
}
export interface DropdownItem {
  href: string;
  id: number;
  item: string;
}

export interface DropdownMenuProps {
  data: DropdownSection[];
  label: string;
}

type DropdownSection = Record<string, DropdownItem[]>;
