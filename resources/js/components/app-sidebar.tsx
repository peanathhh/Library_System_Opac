import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { Book, BookIcon, BookOpen, Folder, LayoutGrid, PlusCircle } from 'lucide-react';
import AppLogo from './app-logo';
import { ArrowRightLeft } from 'lucide-react';

const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
        icon: LayoutGrid, // Icon for Dashboard
    },
    {
        title: 'Transaction',
        href: '/transaction',
        icon: ArrowRightLeft, // Icon for Transaction
        children: [ // Dropdown items
            {
                title: 'IssuedList',
                href: '/Issuedlist',
                icon: BookIcon, // Icon for Issue Books
            },
            {
                title: 'ReturnedList',
                href: '/ReturnedList',
                icon: BookIcon, // Icon for Returned Books
            },
            {
                title: 'LostList',
                href:  '/LostList',
                icon: BookIcon,
            }
        ],
    },
    {
        title: 'Manage Books',
        href: '/managebooks',
        icon: Book, // Icon for Manage Books
        children: [ // Dropdown items
            {
                title: 'BookList',
                href: '/Bookslist',
                icon: BookIcon, // Icon for Book list
            },
            {
                title: 'Category',
                href: '/Category',
                icon: Folder, // Icon for Category
            },
        ],
    }, 
];

const footerNavItems: NavItem[] = [
    {
        title: 'Repository',
        href: 'https://github.com/laravel/react-starter-kit',
        icon: Folder, // Icon for Repository
    },
    {
        title: 'Documentation',
        href: 'https://laravel.com/docs/starter-kits',
        icon: BookOpen, // Icon for Documentation
    },
];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="floating">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/dashboard" prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
