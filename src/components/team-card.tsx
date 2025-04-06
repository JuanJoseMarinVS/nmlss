import { NavLink } from 'react-router';
import { cn } from '@/lib/utils.ts';
import { buttonVariants } from '@/components/ui/button.tsx';

interface TeamCardProps {
    name: string;
    position: string;
    image: string;
    description: string;
    link: string;
}

export default function TeamCard({ name, position, image, description, link }: TeamCardProps) {
    return (
        <article className="w-full flex flex-col items-center justify-center gap-4 text-background">
            <div className="overflow-hidden w-full h-full flex justify-center items-center rounded-md aspect-video">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover object-center rounded-md hover:scale-125 transition-transform duration-500 ease-in-out"
                />
            </div>
            <div className="flex flex-col justify-center items-start">
                <h3 className="text-2xl">{name}</h3>
                <p className="text-sm text-muted">{position}</p>
                <p className="text-justify text-base leading-5 mt-4">{description}</p>
                <NavLink
                    to={link}
                    target="_blank"
                    className={cn(
                        buttonVariants({
                            variant: 'secondary',
                            size: 'icon',
                        }),
                        'mt-6',
                    )}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-linkedin-icon lucide-linkedin"
                    >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect
                            width="4"
                            height="12"
                            x="2"
                            y="9"
                        />
                        <circle
                            cx="4"
                            cy="4"
                            r="2"
                        />
                    </svg>
                </NavLink>
            </div>
        </article>
    );
}
