import { NavLink } from 'react-router';
import { ArrowUpRightIcon } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils.ts';
import { buttonVariants } from '@/components/ui/button.tsx';

interface ServiceCardProps {
    image: string;
    background: string;
    title: string;
    description: string;
    to: string;
}

export default function ServiceCard({ image, background, title, description, to }: ServiceCardProps) {
    return (
        <article className="flex flex-col gap-4 items-start h-full w-full md:max-w-md md:max-h-[690px]">
            <NavLink
                to={to}
                className="w-full h-auto rounded-lg"
            >
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 1.04 }}
                    className="relative w-full h-full rounded-lg"
                >
                    <video
                        autoPlay={true}
                        muted={true}
                        playsInline={true}
                        loop={true}
                        className="absolute top-0 bottom-0 right-0 left-0 rounded-2xl w-full h-full object-cover object-center hover:scale-110 transition-all duration-1000 ease-in-out cursor-pointer opacity-90"
                    >
                        <source
                            src={background}
                            type="video/mp4"
                        />
                    </video>
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full aspect-square rounded-2xl hover:scale-105 transition-all duration-1000 ease-in-out object-cover object-center cursor-pointer opacity-50 hover:opacity-40"
                    />
                </motion.div>
            </NavLink>
            <div className="flex flex-col gap-2 items-start">
                <h3 className="text-foreground text-xl">{title}</h3>
                <p className="text-sm leading-5 text-muted-foreground">{description}</p>
            </div>

            <NavLink to={to}>
                <motion.button
                    whileHover={{ scale: 1.4 }}
                    whileTap={{ scale: 2 }}
                    className={cn(
                        buttonVariants({ variant: 'outline', size: 'icon' }),
                        'flex items-center justify-center rounded-full cursor-pointer',
                    )}
                >
                    <ArrowUpRightIcon />
                </motion.button>
            </NavLink>
        </article>
    );
}
