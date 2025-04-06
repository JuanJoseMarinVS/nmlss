import ProjectCard from '@/components/project-card.tsx';
import { NavLink } from 'react-router';
import { cn } from '@/lib/utils.ts';
import { motion } from 'motion/react';
import { buttonVariants } from '@/components/ui/button.tsx';
import { useTranslation } from 'react-i18next';
import { Project } from '@/interfaces';

export default function Projects() {
    const { t } = useTranslation();

    const projects: Project[] = t('projects', { returnObjects: true }) as Project[];

    return (
        <section className="bg-foreground h-full w-full px-8 py-32 lg:px-16">
            <div className="mx-auto flex max-w-7xl flex-col gap-24">
                <h2 className="text-background max-w-xl text-4xl md:text-5xl">{t('projectsModule.title')}</h2>
                <div className="grid h-full grid-cols-1 gap-y-14 md:grid-cols-2 md:gap-x-8">
                    {projects.slice(0, 6).map((project: Project, index: number) => (
                        <ProjectCard
                            key={index}
                            image={project.image}
                            background={project.background}
                            to={`/project/${project.id}`}
                            title={project.title}
                            services={project.services}
                        />
                    ))}
                </div>
                <NavLink to="/projects">
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 1.04 }}
                        className={cn(
                            buttonVariants({
                                variant: 'default',
                                size: 'lg',
                            }),
                            'text-foreground bg-background hover:bg-background/90 mx-auto flex h-14 max-w-96 cursor-pointer items-center justify-center rounded-3xl text-lg transition-all duration-300 ease-in-out',
                        )}
                    >
                        {t('projectsModule.cta')}
                    </motion.button>
                </NavLink>
            </div>
        </section>
    );
}
