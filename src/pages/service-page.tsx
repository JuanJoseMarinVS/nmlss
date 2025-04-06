import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';
import { Service } from '@/interfaces';
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
            <section className="relative h-full w-full max-h-[1500px] flex justify-end items-center flex-col hover__video overflow-hidden">
                <div className="absolute -bottom-2 right-0 left-0 w-full h-24 lg:h-96 bg-gradient-to-t from-background to-transparent z-10"></div>

                <video
                    key={background}
                    autoPlay={true}
                    muted={true}
                    playsInline={true}
                    loop={true}
                    className="absolute top-0 bottom-0 right-0 left-0 w-full h-full object-cover object-center z-10 contrast-200 brightness-200 opacity-[2%] transition-all duration-1000 ease-in-out"
                >
                    <source src={background} />
                </video>

                <div className="flex justify-center items-center w-full h-full gap-4 max-w-7xl px-8 lg:px-16 mt-[40%] sm:mt-[25%] md:mt-[20%] mx-auto z-20">
                    <div className=" flex flex-col justify-center items-center gap-5 md:gap-10">
                        <h1 className="text-xs md:text-base text-muted-foreground font-medium text-center uppercase">
                            {title}
                        </h1>
                        <h2 className="text-5xl md:text-7xl leading-none text-center">{hero.slogan}</h2>
                        <span className="uppercase underline decoration-1 text-lg md:text-2xl font-semibold mt-8">
                            {hero.action}
                        </span>
                    </div>
                </div>

                <img
                    src={hero.image}
                    alt="hero"
                    className="w-full max-w-[1600px] h-full object-cover object-center z-0 -mt-10"
                />
            </section>

            <section className="w-full h-full px-8 lg:px-16 py-32">
                <div className="flex flex-col md:flex-row gap-16 max-w-7xl mx-auto text-foreground">
                    <h3 className="text-5xl w-full sm:w-[80%] md:w-1/2">{hero.descriptionBold}</h3>
                    <div className="w-full md:w-1/2 flex flex-col justify-center items-center gap-8">
                        <p className="text-lg md:text-2xl text-muted-foreground font-light">{hero.description}</p>
                        {hero.description2 && (
                            <p className="text-lg md:text-2xl text-muted-foreground font-light">{hero.description2}</p>
                        )}
                    </div>
                </div>
            </section>

            <section className="w-full h-full flex flex-col justify-center items-center gap-10 px-8 lg:px-16 pt-32 pb-8 md:pb-0">
                <h4 className="text-2xl md:text-3xl w-full text-center -my-6 max-w-7xl mx-auto text-foreground">
                    {intro.title}
                </h4>
            </section>

            <h2 className="text-[18vw] max-w-full font-serif text-center mx-auto leading-none whitespace-nowrap overflow-hidden text-ellipsis">
                {intro.word}
            </h2>

            <section className="w-full h-full flex flex-col justify-center items-center gap-10 px-8 lg:px-16 pb-32">
                <hr className="border-b border-muted-foreground w-[80%] 2xl:w-full max-w-7xl z-[2] my-32 xl:my-36 mx-auto" />
                <div className="w-full flex flex-col gap-20 max-w-7xl mx-auto">
                    <p className="w-full max-w-3xl font-light text-3xl md:text-4xl text-muted-foreground">
                        {intro.description}
                    </p>
                    {intro.descriptionBold && (
                        <p className="w-full max-w-3xl font-bold text-4xl md:text-5xl text-foreground">
                            {intro.descriptionBold}
                        </p>
                    )}
                </div>
            </section>

            <section className="w-full h-full px-8 lg:px-16 py-32">
                <div className="flex flex-col gap-28 max-w-7xl mx-auto">
                    <h5 className="text-4xl md:text-5xl w-full max-w-4xl text-muted-foreground">{items.title}</h5>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                        {items.list.map((item, index) => (
                            <article
                                key={index}
                                className="w-full flex flex-col gap-3 justify-start items-start max-w-xs"
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-[96px] h-[96px] aspect-square"
                                />
                                <h4 className="text-2xl font-semibold">{item.title}</h4>
                                <p className="text-lg text-muted-foreground">{item.description}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <Contact />
        </>
    );
}
