"use client";

import { useState } from "react";

import { Button, DropdownColumn } from "@/components/ui";

import { DropdownMenuProps } from "./types";

export function DropdownMenu({ data, label }: DropdownMenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="flex flex-col "
      onClick={() => open ?setOpen(false):setOpen(true)}
    >
      <Button
        className="flex justify-start"
        type="button"
        variant="ghost"
      >
        {label}
      </Button>

      {open && (
        <div >
          <div className="backdrop-blur-3xl fixed z-0 top-0 left-0 overflow-hidden w-full h-full">
          </div>
          <div className="flex items-center gap-[0.875rem] z-10 absolute ">
            {data.map((section, Index) => {
            const [title, items] = Object.entries(section)[0];
            return (
              <DropdownColumn
                items={items}
                key={`${title}-${Index}`}
                title={title}
              />
            );
          })}
          </div>

        </div>

      )}
    </div>
  );
}