import { useTranslation } from 'react-i18next';

interface Partner {
    image: string;
    name: string;
}

export default function Partners() {
    const { t } = useTranslation();

    const partners: Partner[] = t('partnersModule.partners', { returnObjects: true }) as Partner[];

    return (
        <section className="w-full h-max flex flex-col justify-center items-center px-8 lg:px-16 py-32 bg-foreground -mt-1">
            <div className="relative w-full h-full flex flex-col justify-center items-start gap-10 max-w-7xl mx-auto">
                <div className="w-full text-background flex justify-center items-center gap-5 md:gap-8">
                    <h2 className="text-2xl md:text-4xl font-light">{t('partnersModule.title')}</h2>
                </div>
                <div className="w-full grid grid-cols-3 md:grid-cols-4 gap-4 md:gap-8">
                    {partners.map((partner: Partner, index: number) => (
                        <div
                            key={index}
                            className="w-full flex justify-center items-center m-auto hover:scale-110 transition-transform duration-500 ease-in-out cursor-pointer"
                        >
                            <img
                                src={partner.image}
                                alt={partner.name}
                                className="w-32 h-full object-contain object-center aspect-video"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
