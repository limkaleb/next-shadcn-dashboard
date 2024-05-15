"use client"

import React, { useState } from 'react'
import { Nav } from './ui/nav'
import {
  LayoutDashboard,
  UsersRound,
  ChevronRight,
  ShoppingCart,
  Settings,
} from "lucide-react"
import { Button } from './ui/button'
import Image from 'next/image'

type Props = {}

export default function Sidebar({}: Props) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  function toggleSidebar() {
    setIsCollapsed(!isCollapsed);
  }

  return (
    <div className=" relative min-w-[80px] border-r px-3 pb-10 pt-24">
      <Image
        src="/hospitality_logo.png"
        width={50}
        height={50}
        alt="Picture of the author"
        className="py-2"
      />
      <div className=" absolute right-[-20px] top-7">
        <Button
          variant="secondary"
          className="rounded-full p-2"
          onClick={toggleSidebar}
        >
          <ChevronRight />
        </Button> 
      </div>
      <Nav
        isCollapsed={isCollapsed}
        links={[
          {
            title: "Dashboard",
            href: "/",
            icon: LayoutDashboard,
            variant: "ghost",
          },
          {
            title: "Users",
            href: "/users",
            icon: UsersRound,
            variant: "ghost",
          },
          {
            title: "Orders",
            href: "/orders",
            icon: ShoppingCart,
            variant: "ghost",
          },
          {
            title: "Settings",
            href: "/settings",
            icon: Settings,
            variant: "ghost",
          },
        ]}
      />
    </div>
  )
}