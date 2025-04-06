import { NavLink } from 'react-router';
import { cn } from '@/lib/utils.ts';

export default function Brand() {
    return (
        <NavLink
            to="/"
            className="fixed h-10 top-2 lg:top-4 left-4 lg:left-8 flex justify-center items-center mix-blend-difference z-30"
        >
            <h2
                className={cn(
                    `text-2xl md:text-3xl font-bold hover:scale-105 hover:text-muted-foreground cursor-pointer logo transition-all duration-300 ease-in-out text-background dark:text-foreground`,
                )}
            >
                NMLSS
            </h2>
        </NavLink>
    );
}
