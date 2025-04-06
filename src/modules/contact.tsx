import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router';

import Icons from '@/components/icons.tsx';

export default function Contact() {
    const { t } = useTranslation();

    return (
        <section className="hover__video relative h-max w-full px-8 py-32 lg:px-16">
            <div className="hero-home__noise -z-0"></div>
            <div className="from-background absolute -top-1 right-0 left-0 -z-1 h-96 w-full bg-gradient-to-b to-transparent"></div>
            <div className="from-background absolute right-0 -bottom-1 left-0 -z-1 h-96 w-full bg-gradient-to-t to-transparent"></div>
            <div className="absolute top-0 right-0 bottom-0 left-0 -z-10 h-full w-full overflow-hidden">
                <video
                    autoPlay={true}
                    muted={true}
                    playsInline={true}
                    loop={true}
                    className="-mb-[10%] h-[125%] w-full object-cover object-center opacity-10 brightness-200 contrast-200 transition-all duration-1000 ease-in-out md:h-full"
                >
                    <source src="/contact-video.mp4" />
                </video>
            </div>
            <div className="z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-20 md:flex-row">
                <div className="flex w-full flex-col gap-6 md:w-1/2">
                    <h2 className="text-foreground text-4xl md:max-w-md md:text-5xl">{t('contactModule.title')}</h2>
                    <p className="text-muted-foreground text-2xl md:max-w-sm md:text-xl">
                        {t('contactModule.description')}
                    </p>
                </div>
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 1.2 }}
                    className="w-full md:w-1/2"
                >
                    <NavLink
                        to="/contact"
                        className="relative flex min-h-[290px] w-full min-w-[290px] cursor-pointer items-center justify-center py-40"
                    >
                        <Icons.ContactCircle className="growing__circle stroke-foreground absolute top-0 right-0 bottom-0 left-0 m-auto h-[290px] w-[290px] translate-3d transition-all duration-300 ease-in-out transform-3d hover:scale-125" />
                        <span className="text-foreground text-xl font-medium uppercase">{t('contactModule.cta')}</span>
                    </NavLink>
                </motion.div>
            </div>
        </section>
    );
}
