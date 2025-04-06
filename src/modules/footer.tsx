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
        <footer className="w-full pt-14 px-8 lg:px-16 pb-14 z-40 -mb-2">
            <div className="flex flex-col items-start justify-center gap-20 max-w-7xl mx-auto">
                <div className="w-full flex flex-col justify-between items-start md:flex-row gap-10">
                    <div className="flex flex-col justify-center items-start gap-10">
                        <h3 className="text-muted-foreground text-2xl max-w-sm">{t('footer.title')}</h3>
                        <NavLink
                            to={`mailto:${t('footer.email')}`}
                            className="flex justify-center items-center gap-4 cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out"
                        >
                            <SendIcon className="w-8 h-8 md:w-10 md:h-10 transform-3d translate-3d" />
                            <span className="text-xl sm:text-2xl md:text-4xl">{t('footer.email')}</span>
                        </NavLink>
                    </div>
                    <nav className="grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-x-8">
                        <div className="w-40 flex flex-col gap-2">
                            <h5 className="mb-2 text-[1rem] md:text-sm text-muted-foreground uppercase">
                                {t('footer.servicesTitle')}
                            </h5>
                            {services.map((service, index) => (
                                <NavLink
                                    key={index}
                                    to={`/service/${service.id}`}
                                    className="text-sm hover:text-foreground/70 transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer"
                                >
                                    {t(service.title)}
                                </NavLink>
                            ))}
                        </div>
                        <div className="w-40 flex flex-col gap-2">
                            <h5 className="mb-2 text-[1rem] md:text-sm text-muted-foreground uppercase">
                                {t('footer.name')}
                            </h5>
                            <NavLink
                                to="/about-us"
                                className="text-sm hover:text-foreground/70 transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer"
                            >
                                {t('mainMenuComponent.aboutUs')}
                            </NavLink>
                            <NavLink
                                to="/projects"
                                className="text-sm hover:text-foreground/70 transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer"
                            >
                                {t('mainMenuComponent.projects')}
                            </NavLink>

                            <NavLink
                                to="/contact"
                                className="text-sm hover:text-foreground/70 transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer"
                            >
                                {t('mainMenuComponent.contact')}
                            </NavLink>
                        </div>
                    </nav>
                </div>
                <div className="w-full flex flex-col md:flex-row justify-between items-center gap-10">
                    <div className="w-full flex flex-col md:flex-row gap-4 lg:gap-8">
                        <NavLink
                            to="/"
                            className="w-14 flex justify-center items-center font-bold opacity-80 hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
                        >
                            NMLSS
                        </NavLink>
                        <span className="text-sm text-muted-foreground">{t('footer.copyright')}</span>
                        <NavLink
                            to="/terms-and-conditions"
                            className="text-sm text-muted-foreground hover:text-foreground/70 transition-all duration-300 ease-in-out hover:scale-[1.02] hover:underline cursor-pointer"
                        >
                            {t('footer.termsConditions')}
                        </NavLink>
                        <NavLink
                            to="/privacy-policy"
                            className="text-sm text-muted-foreground hover:text-foreground/70 transition-all duration-300 ease-in-out hover:scale-[1.02] hover:underline cursor-pointer"
                        >
                            {t('footer.privacyPolicy')}
                        </NavLink>
                        <NavLink
                            to="/cookies-policy"
                            className="text-sm text-muted-foreground hover:text-foreground/70 transition-all duration-300 ease-in-out hover:scale-[1.02] hover:underline cursor-pointer"
                        >
                            {t('footer.cookiePolicy')}
                        </NavLink>
                    </div>

                    <div className="w-full md:w-32 flex justify-end gap-4">
                        <LanguageToggle />
                        <ModeToggle />
                    </div>
                </div>
            </div>
        </footer>
    );
}
