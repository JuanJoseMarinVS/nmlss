import { NavLink } from 'react-router';
import { ProjectsCardProps } from '@/interfaces';

export default function ProjectCard({ image, background, title, services, to }: ProjectsCardProps) {
    return (
        <NavLink
            to={to}
            className="flex flex-col gap-4 items-center justify-start w-full h-full max-h-[750px]"
        >
            <div className="relative w-full h-full max-h-[600px] aspect-square overflow-hidden rounded-lg">
                <video
                    autoPlay={true}
                    muted={true}
                    playsInline={true}
                    loop={true}
                    className="absolute top-0 bottom-0 right-0 left-0 w-full h-full aspect-square object-cover object-center hover:scale-125 transition-all duration-1000 ease-in-out cursor-pointer opacity-25"
                >
                    <source
                        src={background}
                        type="video/mp4"
                    />
                </video>
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full aspect-square rounded-lg hover:scale-125 transition-all duration-1000 ease-in-out object-cover object-center cursor-pointer"
                />
            </div>
            <div className="w-full flex flex-col gap-2 items-start justify-center">
                <h3 className="text-background text-3xl">{title}</h3>
                <span className="text-base leading-5 text-muted">{services.join(', ')}</span>
            </div>
        </NavLink>
    );
}
