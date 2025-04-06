import { useTranslation } from 'react-i18next';
import ServiceCard from '@/components/service-card.tsx';
import { Service } from '@/interfaces';

export default function Services() {
    const { t } = useTranslation();

    const services: Service[] = t('services', { returnObjects: true }) as Service[];

    return (
        <section className="w-full h-max px-8 lg:px-16 py-32">
            <div className="flex flex-col gap-8 max-w-7xl mx-auto">
                <h2 className="text-foreground text-4xl md:text-5xl">{t('servicesModule.title')}</h2>
                <div className="h-full grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-x-10">
                    {services.map((service: Service, index: number) => (
                        <ServiceCard
                            key={index}
                            image={service.miniature}
                            background={service.background}
                            to={`/service/${service.id}`}
                            title={service.title}
                            description={service.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
