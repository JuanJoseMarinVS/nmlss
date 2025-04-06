import { useTranslation } from 'react-i18next';
import FoundationCard from '@/components/foundation-card.tsx';
import Icons from '@/components/icons.tsx';
import { cn } from '@/lib/utils.ts';

interface Foundation {
    icon: keyof typeof Icons;
    title: string;
    description: string;
}

export default function BrandStory() {
    const { t } = useTranslation();

    const foundations: Foundation[] = t('brandStoryModule.foundations', { returnObjects: true }) as Foundation[];

    return (
        <section className="w-full h-max flex flex-col justify-center items-center px-8 lg:px-16 py-32">
            <div className="relative w-full h-full flex flex-col justify-center items-start gap-10 pb-20 md:gap-20 max-w-7xl mx-auto">
                <div className="w-full text-foreground flex flex-col gap-5 md:gap-8">
                    <h2 className="text-4xl md:text-6xl">{t('brandStoryModule.title')}</h2>
                </div>
                <div className="w-full h-full flex flex-col gap-8">
                    <div className="absolute top-0 right-0 left-0 w-full h-full -z-10">
                        <img
                            src="https://cdn.prod.website-files.com/6564b69607ddc080dcbef99d/65881c4cf416b931295790b9_aboutus-nebula.webp"
                            alt="Nebula"
                            className="w-full h-full object-cover object-center rounded-lg"
                        />
                    </div>
                    <div className="w-full flex flex-col justify-center items-end gap-8 md:gap-20">
                        <div className="w-full">
                            <Icons.BrandStory className="w-full max-w-[700px] h-full max-h-[510px] translate-3d transform-3d mx-auto my-8" />
                        </div>
                        <div className="max-w-64">
                            <div className="text-foreground">{t('brandStoryModule.brandName')}</div>
                            <p className="text-muted-foreground text-sm">{t('brandStoryModule.brandDescription')}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative h-full w-full md:w-auto grid grid-cols-1 md:grid-cols-2 pt-20 gap-32 max-w-7xl mx-auto">
                {foundations.map((item, index) => (
                    <FoundationCard
                        key={index}
                        icon={item.icon}
                        title={item.title}
                        description={item.description}
                        className={cn(index % 2 === 0 ? '' : 'md:translate-y-48')}
                    />
                ))}
            </div>
        </section>
    );
}
