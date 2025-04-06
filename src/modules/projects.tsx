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
        <section className="w-full h-full px-8 lg:px-16 py-32 bg-foreground">
            <div className="flex flex-col gap-24 max-w-7xl mx-auto">
                <h2 className="text-background text-4xl md:text-5xl max-w-xl">{t('projectsModule.title')}</h2>
                <div className="h-full grid grid-cols-1 md:grid-cols-2 gap-y-14 md:gap-x-8">
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
                            'h-14 text-foreground bg-background rounded-3xl flex justify-center items-center text-lg max-w-96 mx-auto hover:bg-background/90 transition-all duration-300 ease-in-out cursor-pointer',
                        )}
                    >
                        {t('projectsModule.cta')}
                    </motion.button>
                </NavLink>
            </div>
        </section>
    );
}
