import { ArrowUpRightIcon } from 'lucide-react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router';

import { cn } from '@/lib/utils.ts';

import { buttonVariants } from '@/components/ui/button.tsx';

export default function HeroHome() {
    const { t } = useTranslation();

    return (
        <section className="hover__video relative flex h-full max-h-[1400px] w-full flex-col items-center justify-end overflow-hidden p-4 sm:p-8">
            <div className="hero-home__gradient"></div>
            <div className="hero-home__noise"></div>

            <video
                autoPlay={true}
                muted={true}
                playsInline={true}
                loop={true}
                className="absolute top-0 right-0 bottom-0 left-0 -z-10 h-full w-full object-cover object-center opacity-10 brightness-200 contrast-200 transition-all duration-1000 ease-in-out md:hidden"
            >
                <source src="/hero-video-mobile.mp4" />
            </video>
            <video
                autoPlay={true}
                muted={true}
                playsInline={true}
                loop={true}
                className="absolute top-0 right-0 bottom-0 left-0 z-0 hidden h-full w-full object-cover object-left opacity-10 brightness-200 contrast-200 transition-all duration-1000 ease-in-out md:block"
            >
                <source src="/hero-video-desktop.mp4" />
            </video>

            <div className="mx-auto flex h-full w-full max-w-7xl flex-col items-start justify-around gap-4 pt-10">
                <div className="relative mx-auto h-[340px] w-[340px] animate-pulse opacity-10 md:mr-0 md:ml-auto"></div>

                <div className="z-[3] max-w-[90%] md:max-w-[75%] lg:max-w-4xl">
                    <h1 className="text-foreground text-5xl font-medium lg:text-7xl">{t('heroHomeModule.title')}</h1>
                    <h2 className="text-muted-foreground my-10 max-w-md text-lg leading-5 sm:text-xl sm:leading-7 md:text-2xl md:leading-8 lg:mt-6 lg:mb-10 lg:max-w-none">
                        {t('heroHomeModule.subtitle')}
                    </h2>
                    <NavLink
                        to="/contact"
                        className="hover:text-foreground/70 flex w-96 items-center justify-start gap-6 text-xs transition-all duration-300 ease-in-out sm:text-base"
                    >
                        <span className="uppercase underline decoration-1">{t('heroHomeModule.cta')}</span>
                        <motion.button
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 1.4 }}
                            className={cn(
                                buttonVariants({ variant: 'default', size: 'icon' }),
                                'hover:bg-foreground/70 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full',
                            )}
                        >
                            <ArrowUpRightIcon />
                        </motion.button>
                    </NavLink>
                </div>

                <hr className="border-b-muted-foreground z-[2] mt-6 w-full" />
            </div>
        </section>
    );
}
