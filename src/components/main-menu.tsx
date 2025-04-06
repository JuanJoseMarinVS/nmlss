import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { NavLink, useNavigate } from 'react-router';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from '@/components/ui/navigation-menu.tsx';
import { cn } from '@/lib/utils.ts';
import { Service } from '@/interfaces';

export default function MainMenu() {
    const navigate = useNavigate();
    const { t } = useTranslation();

    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);

    const services: Service[] = t('services', { returnObjects: true }) as Service[];

    const toggleMenu = () => {
        if (isOpen) {
            setIsOpen2(false);
            setTimeout(() => {
                setIsOpen(false);
            }, 600); // Match the duration of the animation
        } else {
            setIsOpen(true);
            setTimeout(() => {
                setIsOpen2(true);
            }, 100);
        }
    };

    const handleLinkClick = (to: string) => {
        navigate(to);
        setIsOpen2(false);
        setTimeout(() => {
            setIsOpen(false);
        }, 600); // Match the duration of the animation
    };

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('no__scroll');
        } else {
            document.body.classList.remove('no__scroll');
        }
    }, [isOpen]);

    return (
        <>
            <motion.nav
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-background dark:text-foreground fixed top-2 right-4 z-40 hidden h-10 w-2xl items-center justify-between rounded-full uppercase mix-blend-difference backdrop-blur-3xl lg:top-4 lg:right-8 lg:flex"
            >
                <NavLink
                    to="/"
                    className="z-1 flex h-full w-1/5 cursor-pointer items-center justify-center text-sm font-medium transition-all duration-300 ease-in-out hover:scale-105"
                >
                    {t('mainMenuComponent.home')}
                </NavLink>

                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className="z-1 flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-transparent text-sm font-medium uppercase transition-all duration-300 ease-in-out hover:bg-transparent">
                                {t('mainMenuComponent.services')}
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid w-64 cursor-pointer gap-3 p-1 capitalize">
                                    {services.map((service: Service, index: number) => (
                                        <li key={index}>
                                            <NavigationMenuLink asChild>
                                                <NavLink
                                                    to={`/service/${service.id}`}
                                                    className={cn(
                                                        'hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:scale-105',
                                                    )}
                                                >
                                                    <span className="text-sm leading-none font-medium">
                                                        {service.title}
                                                    </span>
                                                </NavLink>
                                            </NavigationMenuLink>
                                        </li>
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

                <NavLink
                    to="/about-us"
                    className="z-1 flex h-full w-1/5 cursor-pointer items-center justify-center text-sm font-medium transition-all duration-300 ease-in-out hover:scale-105"
                >
                    {t('mainMenuComponent.aboutUs')}
                </NavLink>

                <NavLink
                    to="/projects"
                    className="z-1 flex h-full w-1/5 cursor-pointer items-center justify-center text-sm font-medium transition-all duration-300 ease-in-out hover:scale-105"
                >
                    {t('mainMenuComponent.projects')}
                </NavLink>

                <NavLink
                    to="/contact"
                    className="bg-background/15 dark:bg-foreground/15 z-1 ml-5 flex h-full w-1/5 cursor-pointer items-center justify-center rounded-full text-sm font-medium transition-all duration-300 ease-in-out hover:scale-105"
                >
                    {t('mainMenuComponent.contact')}
                </NavLink>
            </motion.nav>

            <motion.button
                animate={isOpen ? 'open' : 'closed'}
                onClick={toggleMenu}
                className="fixed top-2 right-4 z-50 flex h-12 w-12 cursor-pointer items-center justify-center rounded-[50%] border-none mix-blend-difference backdrop-blur-3xl outline-none md:top-4 md:right-8 lg:hidden"
            >
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 23 23"
                    className="stroke-background dark:stroke-foreground mt-1"
                >
                    <motion.path
                        fill="transparent"
                        strokeWidth="3"
                        strokeLinecap="round"
                        variants={{
                            closed: { d: 'M 2 2.5 L 20 2.5' },
                            open: { d: 'M 3 16.5 L 17 2.5' },
                        }}
                    />
                    <motion.path
                        fill="transparent"
                        strokeWidth="3"
                        strokeLinecap="round"
                        d="M 2 9.423 L 20 9.423"
                        variants={{
                            closed: { opacity: 1 },
                            open: { opacity: 0 },
                        }}
                        transition={{ duration: 0.1 }}
                    />
                    <motion.path
                        fill="transparent"
                        strokeWidth="3"
                        strokeLinecap="round"
                        variants={{
                            closed: { d: 'M 2 16.346 L 20 16.346' },
                            open: { d: 'M 3 2.5 L 17 16.346' },
                        }}
                    />
                </svg>
            </motion.button>

            {isOpen && (
                <motion.nav
                    initial={false}
                    animate={isOpen2 ? 'open' : 'closed'}
                    className="fixed top-0 right-0 bottom-0 left-0 z-40 h-screen w-screen lg:hidden"
                >
                    <motion.div
                        variants={sidebarVariants}
                        className="absolute top-0 right-0 bottom-0 left-0 h-full w-full"
                    >
                        <div className="bg-background relative flex h-full w-full flex-col justify-between px-11 py-24">
                            <div className="flex w-full flex-col gap-16">
                                <button
                                    className="hover:text-foreground/70 w-1/4 cursor-pointer text-start text-3xl font-normal transition-all duration-300 ease-in-out hover:scale-105"
                                    onClick={() => handleLinkClick('/')}
                                >
                                    {t('mainMenuComponent.home')}
                                </button>

                                <div className="flex w-[80%] flex-col gap-4">
                                    <h5 className="text-muted-foreground text-sm uppercase">
                                        {t('mainMenuComponent.services')}
                                    </h5>
                                    <nav className="flex w-full flex-col gap-4">
                                        {services.map((service: Service, index: number) => (
                                            <button
                                                key={index}
                                                className="hover:text-foreground/70 w-full cursor-pointer text-start text-3xl font-normal transition-all duration-300 ease-in-out hover:scale-105"
                                                onClick={() => handleLinkClick(`/service/${service.id}`)}
                                            >
                                                {service.title}
                                            </button>
                                        ))}
                                    </nav>
                                </div>

                                <div className="flex w-1/2 flex-col gap-4">
                                    <button
                                        className="hover:text-foreground/70 w-full cursor-pointer text-start text-3xl font-normal transition-all duration-300 ease-in-out hover:scale-105"
                                        onClick={() => handleLinkClick('/about-us')}
                                    >
                                        {t('mainMenuComponent.aboutUs')}
                                    </button>
                                    <button
                                        className="hover:text-foreground/70 w-full cursor-pointer text-start text-3xl font-normal transition-all duration-300 ease-in-out hover:scale-105"
                                        onClick={() => handleLinkClick('/projects')}
                                    >
                                        {t('mainMenuComponent.projects')}
                                    </button>
                                    <button
                                        className="hover:text-foreground/70 w-full cursor-pointer text-start text-3xl font-normal transition-all duration-300 ease-in-out hover:scale-105"
                                        onClick={() => handleLinkClick('/contact')}
                                    >
                                        {t('mainMenuComponent.contact')}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.nav>
            )}
        </>
    );
}

const sidebarVariants = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at calc(100% - 40px) 32px)`,
        transition: {
            type: 'spring',
            stiffness: 20,
            restDelta: 2,
        },
    }),
    closed: {
        clipPath: 'circle(0 at calc(100% - 40px) 32px)',
        transition: {
            type: 'spring',
            stiffness: 400,
            damping: 40,
        },
    },
};
