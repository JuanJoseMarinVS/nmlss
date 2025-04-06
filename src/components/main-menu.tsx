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
                className="hidden fixed top-2 lg:top-4 right-4 lg:right-8 w-2xl h-10 lg:flex justify-between items-center rounded-full backdrop-blur-3xl uppercase z-40 mix-blend-difference text-background dark:text-foreground"
            >
                <NavLink
                    to="/"
                    className="w-1/5 h-full flex justify-center items-center text-sm font-medium transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer z-1"
                >
                    {t('mainMenuComponent.home')}
                </NavLink>

                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className="w-full h-full bg-transparent hover:bg-transparent flex justify-center items-center rounded-full text-sm font-medium transition-all duration-300 ease-in-out cursor-pointer uppercase z-1">
                                {t('mainMenuComponent.services')}
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="w-64 grid gap-3 p-1 cursor-pointer capitalize">
                                    {services.map((service: Service, index: number) => (
                                        <li key={index}>
                                            <NavigationMenuLink asChild>
                                                <NavLink
                                                    to={`/service/${service.id}`}
                                                    className={cn(
                                                        'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground hover:scale-105',
                                                    )}
                                                >
                                                    <span className="text-sm font-medium leading-none">
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
                    className="w-1/5 h-full flex justify-center items-center text-sm font-medium transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer z-1"
                >
                    {t('mainMenuComponent.aboutUs')}
                </NavLink>

                <NavLink
                    to="/projects"
                    className="w-1/5 h-full flex justify-center items-center text-sm font-medium transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer z-1"
                >
                    {t('mainMenuComponent.projects')}
                </NavLink>

                <NavLink
                    to="/contact"
                    className="w-1/5 h-full flex justify-center items-center text-sm font-medium bg-background/15 dark:bg-foreground/15 rounded-full transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer z-1 ml-5"
                >
                    {t('mainMenuComponent.contact')}
                </NavLink>
            </motion.nav>

            <motion.button
                animate={isOpen ? 'open' : 'closed'}
                onClick={toggleMenu}
                className="lg:hidden w-12 h-12 fixed top-2 md:top-4 right-4 md:right-8 flex justify-center items-center z-50 backdrop-blur-3xl rounded-[50%] outline-none border-none cursor-pointer mix-blend-difference"
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
                    className="lg:hidden fixed top-0 bottom-0 left-0 right-0 z-40 h-screen w-screen"
                >
                    <motion.div
                        variants={sidebarVariants}
                        className="absolute top-0 bottom-0 right-0 left-0 w-full h-full"
                    >
                        <div className="relative w-full h-full flex flex-col justify-between px-11 py-24 bg-background">
                            <div className="w-full flex flex-col gap-16">
                                <button
                                    className="w-1/4 text-start font-normal text-3xl hover:text-foreground/70 transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer"
                                    onClick={() => handleLinkClick('/')}
                                >
                                    {t('mainMenuComponent.home')}
                                </button>

                                <div className="w-[80%] flex flex-col gap-4">
                                    <h5 className="uppercase text-muted-foreground text-sm">
                                        {t('mainMenuComponent.services')}
                                    </h5>
                                    <nav className="w-full flex flex-col gap-4">
                                        {services.map((service: Service, index: number) => (
                                            <button
                                                key={index}
                                                className="w-full text-start font-normal text-3xl hover:text-foreground/70 transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer"
                                                onClick={() => handleLinkClick(`/service/${service.id}`)}
                                            >
                                                {service.title}
                                            </button>
                                        ))}
                                    </nav>
                                </div>

                                <div className="w-1/2 flex flex-col gap-4">
                                    <button
                                        className="w-full text-start font-normal text-3xl hover:text-foreground/70 transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer"
                                        onClick={() => handleLinkClick('/about-us')}
                                    >
                                        {t('mainMenuComponent.aboutUs')}
                                    </button>
                                    <button
                                        className="w-full text-start font-normal text-3xl hover:text-foreground/70 transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer"
                                        onClick={() => handleLinkClick('/projects')}
                                    >
                                        {t('mainMenuComponent.projects')}
                                    </button>
                                    <button
                                        className="w-full text-start font-normal text-3xl hover:text-foreground/70 transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer"
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
