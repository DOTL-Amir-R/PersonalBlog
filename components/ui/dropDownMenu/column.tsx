import Link from "next/link";

import { DropdownColumnProps } from "./types";

export const DropdownColumn = ({ items, title }: DropdownColumnProps)=> {
  return (
    <div className="flex items-center flex-col  opacity-100 gap-[0.875rem]">
      <p className="border-r-[0.25rem] border-pink-500 pr-[0.625rem] text-[1rem] font-semibold text-neutral-900">
        {title}
      </p>

      <ul className="flex flex-col gap-[0.625rem]">
        {items.map((link) => (
          <li className="flex" key={link.id}>
            <Link
              className="flex items-center gap-[0.375rem] text-[0.875rem] text-neutral-600 transition-colors hover:text-pink-600"
              href={link.href}
            >
              <span className="text-[0.75rem] text-neutral-400">‹</span>
              <span>{link.item}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};