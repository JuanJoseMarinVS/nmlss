import { motion } from 'motion/react';
import { NavLink } from 'react-router';

import { cn } from '@/lib/utils.ts';

export default function Brand() {
    return (
        <NavLink
            to="/"
            className="fixed top-2 left-4 z-30 flex h-10 items-center justify-center mix-blend-difference lg:top-4 lg:left-8"
        >
            <motion.h2
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                className={cn(
                    `hover:text-muted-foreground logo text-background dark:text-foreground cursor-pointer text-2xl font-bold hover:scale-105 md:text-3xl`,
                )}
            >
                NMLSS
            </motion.h2>
        </NavLink>
    );
}
