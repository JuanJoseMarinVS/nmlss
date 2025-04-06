import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router';
import { motion } from 'motion/react';
import Icons from '@/components/icons.tsx';

export default function Contact() {
    const { t } = useTranslation();

    return (
        <section className="relative w-full h-max px-8 lg:px-16 py-32 hover__video">
            <div className="hero-home__noise -z-0"></div>
            <div className="absolute -top-1 right-0 left-0 w-full h-96 bg-gradient-to-b from-background to-transparent -z-1"></div>
            <div className="absolute -bottom-1 right-0 left-0 w-full h-96 bg-gradient-to-t from-background to-transparent -z-1"></div>
            <div className="absolute -z-10 top-0 bottom-0 right-0 left-0 w-full h-full overflow-hidden">
                <video
                    autoPlay={true}
                    muted={true}
                    playsInline={true}
                    loop={true}
                    className="w-full h-[125%] md:h-full object-cover object-center contrast-200 brightness-200 opacity-10 -mb-[10%] transition-all duration-1000 ease-in-out"
                >
                    <source src="/contact-video.mp4" />
                </video>
            </div>
            <div className="w-full flex flex-col md:flex-row justify-center items-center gap-20 max-w-7xl mx-auto z-10">
                <div className="w-full md:w-1/2 flex flex-col gap-6">
                    <h2 className="text-foreground text-4xl md:text-5xl md:max-w-md">{t('contactModule.title')}</h2>
                    <p className="text-2xl md:text-xl text-muted-foreground md:max-w-sm">
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
                        className="w-full relative flex justify-center items-center py-40 min-w-[290px] min-h-[290px] cursor-pointer"
                    >
                        <Icons.ContactCircle className="growing__circle stroke-foreground absolute top-0 bottom-0 left-0 right-0 m-auto w-[290px] h-[290px] transform-3d translate-3d hover:scale-125 transition-all duration-300 ease-in-out" />
                        <span className="uppercase font-medium text-xl text-foreground">{t('contactModule.cta')}</span>
                    </NavLink>
                </motion.div>
            </div>
        </section>
    );
}
