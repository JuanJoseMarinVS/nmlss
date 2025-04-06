import { NavLink } from 'react-router';
import { ProjectsCardProps } from '@/interfaces';

export default function ProjectCard({ image, background, title, services, to }: ProjectsCardProps) {
    return (
        <NavLink
            to={to}
            className="flex h-full max-h-[750px] w-full flex-col items-center justify-start gap-4"
        >
            <div className="relative aspect-square h-full max-h-[600px] w-full overflow-hidden rounded-lg">
                <video
                    autoPlay={true}
                    muted={true}
                    playsInline={true}
                    loop={true}
                    className="absolute top-0 right-0 bottom-0 left-0 aspect-square h-full w-full cursor-pointer object-cover object-center opacity-25 transition-all duration-1000 ease-in-out hover:scale-125"
                >
                    <source
                        src={background}
                        type="video/mp4"
                    />
                </video>
                <img
                    src={image}
                    alt={title}
                    className="aspect-square h-full w-full cursor-pointer rounded-lg object-cover object-center transition-all duration-1000 ease-in-out hover:scale-125"
                />
            </div>
            <div className="flex w-full flex-col items-start justify-center gap-2">
                <h3 className="text-background text-3xl">{title}</h3>
                <span className="text-muted text-base leading-5">{services.join(', ')}</span>
            </div>
        </NavLink>
    );
}
