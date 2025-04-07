import { useState, useEffect } from 'react';
import {
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
} from '@/components/ui/sidebar';
import { Link, usePage } from '@inertiajs/react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { type NavItem } from '@/types';

interface NavMainProps {
    items: NavItem[];
}

export function NavMain({ items }: NavMainProps) {
    const { url: currentUrl } = usePage(); // Get the current page URL
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    // Automatically open the dropdown if a child is active
    useEffect(() => {
        items.forEach((item) => {
            if (item.children?.some((child) => currentUrl.startsWith(child.href))) {
                setOpenDropdown(item.title);
            }
        });
    }, [currentUrl, items]);

    const toggleDropdown = (title: string) => {
        setOpenDropdown((prev) => (prev === title ? null : title));
    };

    return (
        <SidebarMenu>
            {items.map((item) => {
                const Icon = item.icon;

                return (
                    <SidebarMenuItem key={item.title}>
                        {item.children ? (
                            <>
                                <SidebarMenuButton
                                    onClick={() => toggleDropdown(item.title)}
                                >
                                    <Icon className="w-5 h-5 mr-2" />
                                    {item.title}
                                    {openDropdown === item.title ? <ChevronDown /> : <ChevronRight />}
                                </SidebarMenuButton>

                                {openDropdown === item.title && (
                                    <div className="ml-6">
                                        {item.children.map((child) => {
                                            const ChildIcon = child.icon;

                                            return (
                                                <SidebarMenuItem key={child.title}>
                                                    <SidebarMenuButton
                                                        asChild
                                                        isActive={currentUrl.startsWith(child.href)}
                                                    >
                                                        <Link href={child.href} prefetch>
                                                            <ChildIcon className="w-4 h-4 mr-2" />
                                                            {child.title}
                                                        </Link>
                                                    </SidebarMenuButton>
                                                </SidebarMenuItem>
                                            );
                                        })}
                                    </div>
                                )}
                            </>
                        ) : (
                            <SidebarMenuButton
                                asChild
                                isActive={currentUrl.startsWith(item.href)}
                                
                            >
                                <Link href={item.href} prefetch>
                                    <Icon className="w-5 h-5 mr-2" />
                                    {item.title}
                                </Link>
                            </SidebarMenuButton>
                        )}
                    </SidebarMenuItem>
                );
            })}
        </SidebarMenu>
    );
}
