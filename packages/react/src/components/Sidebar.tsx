"use client";

import React, {useState} from "react";
import {NavigationTreeLink} from "@mockline/themes";
import {MHeader} from "./Header.js";
import {MContentNavigationTree} from "./content/ContentNavigationTree.js";

type MSidebarProps = {
  links: NavigationTreeLink[];
  minSize?: number;
  maxSize?: number;
  collapsedSize?: number;
  defaultSize?: number;
  version?: string;
};

export const MSidebar: React.FC<MSidebarProps> = ({
                                                    links,
                                                    minSize = 200,
                                                    maxSize = 300,
                                                    collapsedSize = 60,
                                                    defaultSize = 250,
                                                    version = "1.0.0",
                                                  }) => {
  const [collapsed, setCollapsed] = useState(defaultSize <= collapsedSize);


  const toggleSidebar = () => {
    setCollapsed((prev) => !prev);
  };

  const sidebarWidth = collapsed ? `${collapsedSize}px` : `${maxSize}px`;

  return (
    <nav
      className={`flex flex-col h-screen bg-gray-800 text-white transition-all duration-300`}
      style={{width: sidebarWidth}}
    >
      {/* Header */}
      <MHeader className="flex items-center justify-between px-4 py-3 border-b border-gray-700">
        <span className="text-lg font-bold">Mockline</span>
        <button onClick={toggleSidebar}>
          <i className="text-lg lucide:menu"/>
        </button>
      </MHeader>

      {/* Navigation */}
      <MContentNavigationTree links={links} getClasses={(key: string, classes: Record<string, boolean>) => {
        if (classes?.active) {
          return "bg-gray-700";
        }
        if (classes?.disabled) {
          return "text-gray-400";
        }
        return "";
      }}/>

      {/* Footer */}
      <footer className="px-4 py-3 border-t border-gray-700">
        <span className="bg-gray-600 px-2 py-1 rounded text-xs">
          v{version}
        </span>
      </footer>


    </nav>
  );
};
