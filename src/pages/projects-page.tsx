import ProjectCard from '@/components/project-card.tsx';
import { useTranslation } from 'react-i18next';
import { Project } from '@/interfaces';
import Contact from '@/modules/contact.tsx';

export default function ProjectsPage() {
    const { t } = useTranslation();

    const projects: Project[] = t('projects', { returnObjects: true }) as Project[];

    return (
        <>
            <section className="bg-foreground h-full w-full px-8 py-52 lg:px-16">
                <div className="mx-auto flex max-w-7xl flex-col gap-24">
                    <div className="text-background flex w-full flex-col gap-5 md:gap-8">
                        <h1 className="text-6xl md:text-8xl">{t('projectsPage.title')}</h1>
                        <p className="text-muted text-3xl md:text-5xl">{t('projectsPage.description')}</p>
                    </div>
                    <div className="grid h-full grid-cols-1 gap-y-14 md:grid-cols-2 md:gap-x-8">
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
