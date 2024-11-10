'use client'

import { Home, Inbox, Bell, ChevronUp } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useSession } from "next-auth/react"

const items = [
  {
    title: "Home",
    url: "/home",
    icon: Home,
  },
  {
    title: "Projects",
    url: "/projects",
    icon: Inbox,
  },
  {
    title: "Notifications",
    url: "/notifications",
    icon: Bell,
  }
]

export function AppSidebar() {

  const { data: session } = useSession()

  const pathname = usePathname()

  const name = typeof session?.user?.name === 'string' ? session.user.name : ''
  const image = typeof session?.user?.image === 'string' ? session.user.image : ''
  const email = typeof session?.user?.email === 'string' ? session.user.email : ''

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Aplication</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {
                items.map(item => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={item.url === pathname}>
                      <Link href={item.url}>
                        <item.icon />
                        {item.title}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))
              }
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenuItem>
          <SidebarMenuButton className="h-[72px]">
            <Avatar>
              <AvatarImage src={image} alt={name} />
              <AvatarFallback>US</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="block font-bold">{name}</span>
              <span className="block text-xs truncate overflow-hidden max-w-[8rem]">{email}</span>
            </div>
            <ChevronUp className='ml-auto' />
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarFooter>
    </Sidebar>
  )
}