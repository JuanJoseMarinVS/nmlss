import ProjectCard from '@/components/project-card.tsx';
import { useTranslation } from 'react-i18next';
import { Project } from '@/interfaces';
import Contact from '@/modules/contact.tsx';

export default function ProjectsPage() {
    const { t } = useTranslation();

    const projects: Project[] = t('projects', { returnObjects: true }) as Project[];

    return (
        <>
            <section className="w-full h-full px-8 lg:px-16 py-52 bg-foreground">
                <div className="flex flex-col gap-24 max-w-7xl mx-auto">
                    <div className="w-full text-background flex flex-col gap-5 md:gap-8">
                        <h1 className="text-6xl md:text-8xl">{t('projectsPage.title')}</h1>
                        <p className="text-3xl md:text-5xl text-muted">{t('projectsPage.description')}</p>
                    </div>
                    <div className="h-full grid grid-cols-1 md:grid-cols-2 gap-y-14 md:gap-x-8">
                        {projects.map((project: Project, index: number) => (
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
                </div>
            </section>

            <Contact />
        </>
    );
}
