import { Service } from '@/interfaces';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';

import NotFoundPage from '@/pages/not-found-page.tsx';
import Contact from '@/modules/contact.tsx';

export default function ServicePage() {
    const { serviceId } = useParams<{ serviceId: string }>();
    const { t } = useTranslation();

    const services: Service[] = t('services', { returnObjects: true }) as Service[];
    const service = services.find((s) => s.id === serviceId);

    if (!service) {
        return <NotFoundPage />;
    }

    const { background, title, hero, intro, items } = service;

    return (
        <>
            <section className="hover__video relative flex h-full max-h-[1500px] w-full flex-col items-center justify-end overflow-hidden">
                <div className="from-background absolute right-0 -bottom-2 left-0 z-10 h-24 w-full bg-gradient-to-t to-transparent lg:h-96"></div>

                <video
                    key={background}
                    autoPlay={true}
                    muted={true}
                    playsInline={true}
                    loop={true}
                    className="absolute top-0 right-0 bottom-0 left-0 z-10 h-full w-full object-cover object-center opacity-[2%] brightness-200 contrast-200 transition-all duration-1000 ease-in-out"
                >
                    <source src={background} />
                </video>

                <div className="z-20 mx-auto mt-[40%] flex h-full w-full max-w-7xl items-center justify-center gap-4 px-8 sm:mt-[25%] md:mt-[20%] lg:px-16">
                    <div className="flex flex-col items-center justify-center gap-5 md:gap-10">
                        <h1 className="text-muted-foreground text-center text-xs font-medium uppercase md:text-base">
                            {title}
                        </h1>
                        <h2 className="text-center text-5xl leading-none md:text-7xl">{hero.slogan}</h2>
                        <span className="mt-8 text-lg font-semibold uppercase underline decoration-1 md:text-2xl">
                            {hero.action}
                        </span>
                    </div>
                </div>

                <img
                    src={hero.image}
                    alt="hero"
                    className="z-0 -mt-10 h-full w-full max-w-[1600px] object-cover object-center"
                />
            </section>

            <section className="h-full w-full px-8 py-32 lg:px-16">
                <div className="text-foreground mx-auto flex max-w-7xl flex-col gap-16 md:flex-row">
                    <h3 className="w-full text-5xl sm:w-[80%] md:w-1/2">{hero.descriptionBold}</h3>
                    <div className="flex w-full flex-col items-center justify-center gap-8 md:w-1/2">
                        <p className="text-muted-foreground text-lg font-light md:text-2xl">{hero.description}</p>
                        {hero.description2 && (
                            <p className="text-muted-foreground text-lg font-light md:text-2xl">{hero.description2}</p>
                        )}
                    </div>
                </div>
            </section>

            <section className="flex h-full w-full flex-col items-center justify-center gap-10 px-8 pt-32 pb-8 md:pb-0 lg:px-16">
                <h4 className="text-foreground mx-auto -my-6 w-full max-w-7xl text-center text-2xl md:text-3xl">
                    {intro.title}
                </h4>
            </section>

            <h2 className="mx-auto max-w-full overflow-hidden text-center font-serif text-[18vw] leading-none text-ellipsis whitespace-nowrap">
                {intro.word}
            </h2>

            <section className="flex h-full w-full flex-col items-center justify-center gap-10 px-8 pb-32 lg:px-16">
                <hr className="border-muted-foreground z-[2] mx-auto my-32 w-[80%] max-w-7xl border-b xl:my-36 2xl:w-full" />
                <div className="mx-auto flex w-full max-w-7xl flex-col gap-20">
                    <p className="text-muted-foreground w-full max-w-3xl text-3xl font-light md:text-4xl">
                        {intro.description}
                    </p>
                    {intro.descriptionBold && (
                        <p className="text-foreground w-full max-w-3xl text-4xl font-bold md:text-5xl">
                            {intro.descriptionBold}
                        </p>
                    )}
                </div>
            </section>

            <section className="h-full w-full px-8 py-32 lg:px-16">
                <div className="mx-auto flex max-w-7xl flex-col gap-28">
                    <h5 className="text-muted-foreground w-full max-w-4xl text-4xl md:text-5xl">{items.title}</h5>
                    <div className="grid grid-cols-1 gap-16 md:grid-cols-3">
                        {items.list.map((item, index) => (
                            <article
                                key={index}
                                className="flex w-full max-w-xs flex-col items-start justify-start gap-3"
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="aspect-square h-[96px] w-[96px]"
                                />
                                <h4 className="text-2xl font-semibold">{item.title}</h4>
                                <p className="text-muted-foreground text-lg">{item.description}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <Contact />
        </>
    );
}
