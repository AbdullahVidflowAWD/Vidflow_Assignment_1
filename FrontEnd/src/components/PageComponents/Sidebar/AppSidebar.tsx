'use client';

import * as React from 'react';
import {
  Home,
  Search,
  Heart,
  Send,
  Plus,
  SquarePlay,
} from 'lucide-react';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from '@/components/ui/sidebar';
import { SidebarHeaderLogo } from './Sidebar-Header-Logo';
import { SidebarProfile } from './Sidebar-Porfile';
import { SidebarNavOptions } from './SIdebar-Navigation-Options';

// This is sample data.
const data = {
  user: {
    name: 'shadcn',
    email: 'm@example.com',
    avatar: '/avatars/shadcn.jpg',
  },

  navMain: [
    {
      title: 'Home',
      url: '/',
      icon: Home,
    },
    {
      title: 'Search',
      url: '/',
      icon: Search,
    },
    {
      title: 'Reels',
      url: '/',
      icon: SquarePlay, 
    },
    {
      title: 'Messages',
      url: '/',
      icon: Send,
    },
    {
      title: 'Notifications',
      url: '/',
      icon: Heart,
    },
    {
      title: 'Create',
      url: '/',
      icon: Plus,
    },
  ],
 
};

export function AppSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      className="px-[10px]"
      {...props}

    >
      <SidebarHeader className="h-28 justify-center bg-background">
        <SidebarHeaderLogo />
      </SidebarHeader>
      <SidebarContent className='bg-background'>
        <SidebarNavOptions items={data.navMain} />
      </SidebarContent>
      <SidebarFooter className='bg-background'>
        <SidebarProfile user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
