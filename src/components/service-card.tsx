import { ArrowUpRightIcon } from 'lucide-react';
import { motion } from 'motion/react';
import { NavLink } from 'react-router';

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
        <article className="flex h-full w-full flex-col items-start gap-4 md:max-h-[690px] md:max-w-md">
            <NavLink
                to={to}
                className="h-auto w-full rounded-lg"
            >
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 1.04 }}
                    className="relative h-full w-full rounded-lg"
                >
                    <video
                        autoPlay={true}
                        muted={true}
                        playsInline={true}
                        loop={true}
                        className="absolute top-0 right-0 bottom-0 left-0 h-full w-full cursor-pointer rounded-2xl object-cover object-center opacity-90 transition-all duration-1000 ease-in-out hover:scale-110"
                    >
                        <source
                            src={background}
                            type="video/mp4"
                        />
                    </video>
                    <img
                        src={image}
                        alt={title}
                        className="aspect-square h-full w-full cursor-pointer rounded-2xl object-cover object-center opacity-50 transition-all duration-1000 ease-in-out hover:scale-105 hover:opacity-40"
                    />
                </motion.div>
            </NavLink>
            <div className="flex flex-col items-start gap-2">
                <h3 className="text-foreground text-xl">{title}</h3>
                <p className="text-muted-foreground text-sm leading-5">{description}</p>
            </div>

            <NavLink to={to}>
                <motion.button
                    whileHover={{ scale: 1.4 }}
                    whileTap={{ scale: 2 }}
                    className={cn(
                        buttonVariants({ variant: 'outline', size: 'icon' }),
                        'flex cursor-pointer items-center justify-center rounded-full',
                    )}
                >
                    <ArrowUpRightIcon />
                </motion.button>
            </NavLink>
        </article>
    );
}
