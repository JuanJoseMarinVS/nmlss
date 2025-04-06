import { useTranslation } from 'react-i18next';

interface Partner {
    image: string;
    name: string;
}

export default function Partners() {
    const { t } = useTranslation();

    const partners: Partner[] = t('partnersModule.partners', { returnObjects: true }) as Partner[];

    return (
        <section className="bg-foreground -mt-1 flex h-max w-full flex-col items-center justify-center px-8 py-32 lg:px-16">
            <div className="relative mx-auto flex h-full w-full max-w-7xl flex-col items-start justify-center gap-10">
                <div className="text-background flex w-full items-center justify-center gap-5 md:gap-8">
                    <h2 className="text-2xl font-light md:text-4xl">{t('partnersModule.title')}</h2>
                </div>
                <div className="grid w-full grid-cols-3 gap-4 md:grid-cols-4 md:gap-8">
                    {partners.map((partner: Partner, index: number) => (
                        <div
                            key={index}
                            className="m-auto flex w-full cursor-pointer items-center justify-center transition-transform duration-500 ease-in-out hover:scale-110"
                        >
                            <img
                                src={partner.image}
                                alt={partner.name}
                                className="aspect-video h-full w-32 object-contain object-center"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
