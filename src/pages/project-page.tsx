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
            <section className="bg-foreground h-full w-full px-8 py-52 lg:px-16">
                <div className="mx-auto flex max-w-7xl flex-col gap-36 md:gap-52">
                    <div className="flex w-full flex-col gap-5 md:gap-8 lg:gap-14">
                        <h1 className="text-background text-7xl md:text-8xl">{project.title}</h1>
                        <h2 className="text-muted text-2xl font-light md:text-6xl">{project.slogan}</h2>
                        <img
                            src={project.hero}
                            alt="hero"
                            className="mt-12 h-full w-full max-w-[1300px] object-cover object-center"
                        />
                    </div>

                    <div className="flex w-full flex-col gap-12 md:flex-row">
                        <h3 className="text-background w-[40%] text-5xl md:text-6xl">{t('projectPage.project')}</h3>
                        <div className="text-muted flex flex-col gap-5 text-xl md:w-[60%] md:text-2xl">
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

                    <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2">
                        {project.images.map((media, i) => {
                            const isRectangular = new Image();
                            isRectangular.src = media;
                            const isWide = isRectangular.width > isRectangular.height;

                            return isImage(media) ? (
                                <img
                                    key={i}
                                    src={media}
                                    alt="project"
                                    className={`h-full w-full ${isWide ? 'md:col-span-2' : ''}`}
                                />
                            ) : isVideo(media) ? (
                                <video
                                    key={i}
                                    autoPlay={true}
                                    muted={true}
                                    playsInline={true}
                                    loop={true}
                                    className={`h-full w-full ${isWide ? 'md:col-span-2' : ''}`}
                                >
                                    <source src={media} />
                                </video>
                            ) : null;
                        })}
                    </div>

                    <div className="text-accent ml-auto flex w-full flex-col gap-4 md:max-w-1/2">
                        <h4 className="w-full text-sm font-semibold uppercase md:text-lg">{t('projectPage.review')}</h4>
                        <p className="text-3xl font-light">{review.text}</p>
                        <div className="mt-6 flex flex-col">
                            <p className="text-2xl">{review.author}</p>
                            <p className="text-muted text-lg">{review.role}</p>
                        </div>
                    </div>

                    <div className="flex w-full flex-col gap-12">
                        <hr className="border-background w-full" />

                        <h5 className="text-background w-full text-5xl font-light md:text-4xl">
                            {t('projectPage.moreProjects')}
                        </h5>

                        <div className="grid h-full grid-cols-1 gap-y-14 md:grid-cols-2 md:gap-x-8">
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
