import { NavLink } from 'react-router';
import { Trans, useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils.ts';
import { buttonVariants } from '@/components/ui/button.tsx';

export default function NotFoundPage() {
    const { t } = useTranslation();

    return (
        <section className="relative w-full h-screen flex justify-end items-center flex-col p-4 sm:p-8 hover__video overflow-hidden">
            <div className="hero-home__gradient"></div>
            <div className="hero-home__noise"></div>

            <video
                autoPlay={true}
                muted={true}
                playsInline={true}
                loop={true}
                className="md:hidden absolute top-0 bottom-0 right-0 left-0 w-full h-full object-cover object-center -z-10 contrast-200 brightness-200 opacity-10 transition-all duration-1000 ease-in-out"
            >
                <source src="/hero-video-mobile.mp4" />
            </video>
            <video
                autoPlay={true}
                muted={true}
                playsInline={true}
                loop={true}
                className="hidden md:block absolute top-0 bottom-0 right-0 left-0 w-full h-full object-cover object-left z-0 contrast-200 brightness-200 opacity-10 transition-all duration-1000 ease-in-out"
            >
                <source src="/hero-video-desktop.mp4" />
            </video>

            <div className="flex justify-around items-start flex-col w-full h-full gap-4 max-w-7xl pt-10 mx-auto">
                <div className="relative w-[340px] h-[340px] mx-auto md:ml-auto md:mr-0 animate-pulse opacity-10"></div>

                <div className="z-[3] max-w-[90%] md:max-w-[75%] lg:max-w-4xl">
                    <h1 className="text-5xl lg:text-7xl text-foreground font-medium mb-10">
                        {t('notFoundPage.title')}
                    </h1>
                    <Trans
                        i18nKey="notFoundPage.description"
                        t={t}
                        components={{
                            p: (
                                <p className="text-lg sm:text-xl md:text-2xl leading-5 sm:leading-7 md:leading-8 text-muted-foreground max-w-md lg:max-w-none" />
                            ),
                        }}
                    />
                    <NavLink
                        to="/"
                        className="w-96 flex justify-start items-center gap-6 text-xs sm:text-base hover:text-foreground/70 transition-all duration-300 ease-in-out mt-10"
                    >
                        <motion.button
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 1.4 }}
                            className={cn(
                                buttonVariants({ variant: 'default' }),
                                'flex justify-center items-center cursor-pointer rounded-full hover:bg-foreground/70',
                            )}
                        >
                            {t('notFoundPage.cta')}
                        </motion.button>
                    </NavLink>
                </div>
            </div>
        </section>
    );
}
