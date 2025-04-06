import { NavLink } from 'react-router';
import { useTranslation } from 'react-i18next';
import { SendIcon } from 'lucide-react';
import { LanguageToggle } from '@/components/language-toggle.tsx';
import { ModeToggle } from '@/components/mode-toggle.tsx';
import { Service } from '@/interfaces';

export default function Footer() {
    const { t } = useTranslation();

    const services: Service[] = t('services', { returnObjects: true }) as Service[];

    return (
        <footer className="z-40 -mb-2 w-full px-8 pt-14 pb-14 lg:px-16">
            <div className="mx-auto flex max-w-7xl flex-col items-start justify-center gap-20">
                <div className="flex w-full flex-col items-start justify-between gap-10 md:flex-row">
                    <div className="flex flex-col items-start justify-center gap-10">
                        <h3 className="text-muted-foreground max-w-sm text-2xl">{t('footer.title')}</h3>
                        <NavLink
                            to={`mailto:${t('footer.email')}`}
                            className="flex cursor-pointer items-center justify-center gap-4 transition-all duration-300 ease-in-out hover:scale-105"
                        >
                            <SendIcon className="h-8 w-8 translate-3d transform-3d md:h-10 md:w-10" />
                            <span className="text-xl sm:text-2xl md:text-4xl">{t('footer.email')}</span>
                        </NavLink>
                    </div>
                    <nav className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-8">
                        <div className="flex w-40 flex-col gap-2">
                            <h5 className="text-muted-foreground mb-2 text-[1rem] uppercase md:text-sm">
                                {t('footer.servicesTitle')}
                            </h5>
                            {services.map((service, index) => (
                                <NavLink
                                    key={index}
                                    to={`/service/${service.id}`}
                                    className="hover:text-foreground/70 cursor-pointer text-sm transition-all duration-300 ease-in-out hover:scale-105"
                                >
                                    {t(service.title)}
                                </NavLink>
                            ))}
                        </div>
                        <div className="flex w-40 flex-col gap-2">
                            <h5 className="text-muted-foreground mb-2 text-[1rem] uppercase md:text-sm">
                                {t('footer.name')}
                            </h5>
                            <NavLink
                                to="/about-us"
                                className="hover:text-foreground/70 cursor-pointer text-sm transition-all duration-300 ease-in-out hover:scale-105"
                            >
                                {t('mainMenuComponent.aboutUs')}
                            </NavLink>
                            <NavLink
                                to="/projects"
                                className="hover:text-foreground/70 cursor-pointer text-sm transition-all duration-300 ease-in-out hover:scale-105"
                            >
                                {t('mainMenuComponent.projects')}
                            </NavLink>

                            <NavLink
                                to="/contact"
                                className="hover:text-foreground/70 cursor-pointer text-sm transition-all duration-300 ease-in-out hover:scale-105"
                            >
                                {t('mainMenuComponent.contact')}
                            </NavLink>
                        </div>
                    </nav>
                </div>
                <div className="flex w-full flex-col items-center justify-between gap-10 md:flex-row">
                    <div className="flex w-full flex-col gap-4 md:flex-row lg:gap-8">
                        <NavLink
                            to="/"
                            className="flex w-14 cursor-pointer items-center justify-center font-bold opacity-80 transition-all duration-300 ease-in-out hover:scale-105"
                        >
                            NMLSS
                        </NavLink>
                        <span className="text-muted-foreground text-sm">{t('footer.copyright')}</span>
                        <NavLink
                            to="/terms-and-conditions"
                            className="text-muted-foreground hover:text-foreground/70 cursor-pointer text-sm transition-all duration-300 ease-in-out hover:scale-[1.02] hover:underline"
                        >
                            {t('footer.termsConditions')}
                        </NavLink>
                        <NavLink
                            to="/privacy-policy"
                            className="text-muted-foreground hover:text-foreground/70 cursor-pointer text-sm transition-all duration-300 ease-in-out hover:scale-[1.02] hover:underline"
                        >
                            {t('footer.privacyPolicy')}
                        </NavLink>
                        <NavLink
                            to="/cookies-policy"
                            className="text-muted-foreground hover:text-foreground/70 cursor-pointer text-sm transition-all duration-300 ease-in-out hover:scale-[1.02] hover:underline"
                        >
                            {t('footer.cookiePolicy')}
                        </NavLink>
                    </div>

                    <div className="flex w-full justify-end gap-4 md:w-32">
                        <LanguageToggle />
                        <ModeToggle />
                    </div>
                </div>
            </div>
        </footer>
    );
}
