import { Service } from '@/interfaces';
import { useTranslation } from 'react-i18next';

import ServiceCard from '@/components/service-card.tsx';

export default function Services() {
    const { t } = useTranslation();

    const services: Service[] = t('services', { returnObjects: true }) as Service[];

    return (
        <section className="h-max w-full px-8 py-32 lg:px-16">
            <div className="mx-auto flex max-w-7xl flex-col gap-8">
                <h2 className="text-foreground text-4xl md:text-5xl">{t('servicesModule.title')}</h2>
                <div className="grid h-full grid-cols-1 gap-y-10 md:grid-cols-3 md:gap-x-10">
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
