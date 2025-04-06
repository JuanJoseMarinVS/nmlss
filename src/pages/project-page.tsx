import { Trans, useTranslation } from 'react-i18next';
import { useParams } from 'react-router';
import { Project, Testimonial } from '@/interfaces';
import NotFoundPage from '@/pages/not-found-page.tsx';
import ProjectCard from '@/components/project-card.tsx';
import Contact from '@/modules/contact.tsx';

export default function ProjectPage() {
    const { projectId } = useParams<{ projectId: string }>();
    const { t } = useTranslation();

    const projects: Project[] = t('projects', { returnObjects: true }) as Project[];
    const project = projects.find((s) => s.id === projectId);

    const shuffledProjects = projects
        .sort(() => 0.5 - Math.random())
        .filter((p) => p.id !== projectId)
        .slice(0, 2);

    const testimonials: Testimonial[] = t('testimonials', { returnObjects: true }) as Testimonial[];
    const review = testimonials.find((s) => s.id === projectId);

    const isImage = (url: string) => {
        return /\.(jpg|jpeg|png|webp|svg)$/.test(url);
    };

    const isVideo = (url: string) => {
        return /\.(mp4|webm|ogg)$/.test(url);
    };

    if (!project || !review) {
        return <NotFoundPage />;
    }

    return (
        <>
            <section className="w-full h-full px-8 lg:px-16 py-52 bg-foreground">
                <div className="flex flex-col gap-36 md:gap-52 max-w-7xl mx-auto">
                    <div className="w-full flex flex-col gap-5 md:gap-8 lg:gap-14">
                        <h1 className="text-7xl md:text-8xl text-background">{project.title}</h1>
                        <h2 className="text-2xl md:text-6xl font-light text-muted">{project.slogan}</h2>
                        <img
                            src={project.hero}
                            alt="hero"
                            className="w-full max-w-[1300px] h-full object-cover object-center mt-12"
                        />
                    </div>

                    <div className="w-full flex flex-col md:flex-row gap-12">
                        <h3 className="w-[40%] text-5xl md:text-6xl text-background">{t('projectPage.project')}</h3>
                        <div className="md:w-[60%] flex flex-col gap-5 text-muted text-xl md:text-2xl">
                            <Trans
                                i18nKey={project.description}
                                t={t}
                                components={{
                                    p: <p />,
                                }}
                            />
                        </div>
                        s
                    </div>

                    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
                        {project.images.map((media, i) => {
                            const isRectangular = new Image();
                            isRectangular.src = media;
                            const isWide = isRectangular.width > isRectangular.height;

                            return isImage(media) ? (
                                <img
                                    key={i}
                                    src={media}
                                    alt="project"
                                    className={`w-full h-full ${isWide ? 'md:col-span-2' : ''}`}
                                />
                            ) : isVideo(media) ? (
                                <video
                                    key={i}
                                    autoPlay={true}
                                    muted={true}
                                    playsInline={true}
                                    loop={true}
                                    className={`w-full h-full ${isWide ? 'md:col-span-2' : ''}`}
                                >
                                    <source src={media} />
                                </video>
                            ) : null;
                        })}
                    </div>

                    <div className="w-full md:max-w-1/2 flex flex-col gap-4 ml-auto text-accent">
                        <h4 className="w-full text-sm md:text-lg uppercase font-semibold">{t('projectPage.review')}</h4>
                        <p className="text-3xl font-light">{review.text}</p>
                        <div className="flex flex-col mt-6">
                            <p className="text-2xl">{review.author}</p>
                            <p className="text-lg text-muted">{review.role}</p>
                        </div>
                    </div>

                    <div className="w-full flex flex-col gap-12">
                        <hr className="w-full border-background" />

                        <h5 className="w-full text-5xl md:text-4xl font-light text-background">
                            {t('projectPage.moreProjects')}
                        </h5>

                        <div className="h-full grid grid-cols-1 md:grid-cols-2 gap-y-14 md:gap-x-8">
                            {shuffledProjects.map((project: Project, index: number) => (
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
                </div>
            </section>

            <Contact />
        </>
    );
}
