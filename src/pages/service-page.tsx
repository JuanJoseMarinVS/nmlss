import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';
import { Service } from '@/interfaces';
import NotFoundPage from '@/pages/not-found-page.tsx';
import Contact from '@/modules/contact.tsx';
import IntroService from '@/modules/intro-service.tsx';
import ItemsService from '@/modules/items-service.tsx';

export default function ServicePage() {
    const { serviceId } = useParams<{ serviceId: string }>();
    const { t } = useTranslation();

    const services: Service[] = t('services', { returnObjects: true }) as Service[];
    const service = services.find((s) => s.id === serviceId);

    if (!service) {
        return <NotFoundPage />;
    }

    const { background, title, hero } = service;

    return (
        <>
            <section className="relative h-full w-full max-h-[1500px] flex justify-end items-center flex-col hover__video overflow-hidden">
                <div className="absolute -bottom-2 right-0 left-0 w-full h-96 bg-gradient-to-t from-background to-transparent z-10"></div>

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
                        <h2 className="text-6xl md:text-8xl leading-none text-center">{hero.slogan}</h2>
                        <span className="uppercase underline decoration-1 text-sm md:text-2xl font-semibold mt-8">
                            {hero.action}
                        </span>
                    </div>
                </div>

                <img
                    src={hero.image}
                    alt="hero"
                    className=" w-full max-w-[1300px] h-full object-cover object-center z-0"
                />
            </section>

            <section className="w-full h-full px-8 lg:px-16 py-32">
                <div className="flex flex-col md:flex-row gap-16 max-w-7xl mx-auto text-foreground">
                    <h2 className="text-5xl w-full sm:w-[80%] md:w-1/2">{hero.descriptionBold}</h2>
                    <div className="w-full md:w-1/2 flex flex-col justify-center items-center gap-8">
                        <p className="text-lg md:text-2xl text-muted-foreground font-light">{hero.description}</p>
                        {hero.description2 && (
                            <p className="text-lg md:text-2xl text-muted-foreground font-light">{hero.description2}</p>
                        )}
                    </div>
                </div>
            </section>
            <IntroService service={service} />
            <ItemsService service={service} />
            <Contact />
        </>
    );
}
