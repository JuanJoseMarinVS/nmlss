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
        <section className="relative flex h-max w-full flex-col items-center justify-center">
            <div className="absolute top-0 right-0 left-0 -z-10 mx-auto h-full max-h-[1200px] w-[100%]">
                <img
                    src="https://cdn.prod.website-files.com/6564b69607ddc080dcbef99d/65881c4cf416b931295790b9_aboutus-nebula.webp"
                    alt="Nebula"
                    className="h-full w-full object-cover object-center md:object-contain"
                />
            </div>
            <div className="flex h-full w-full flex-col items-center justify-center px-8 py-52 lg:px-16">
                <div className="mx-auto flex h-full w-full max-w-7xl flex-col items-start justify-center gap-10 pb-20 md:gap-20">
                    <div className="text-foreground flex w-full max-w-xl flex-col gap-5 md:gap-8">
                        <h2 className="text-4xl md:text-6xl">{t('brandStoryModule.title')}</h2>
                    </div>
                    <div className="flex h-full w-full flex-col gap-8">
                        <div className="flex w-full flex-col items-end justify-center gap-8 md:gap-16">
                            <div className="h-full w-full">
                                <Icons.BrandStory className="mx-auto my-8 h-full max-h-[510px] w-full max-w-[700px] translate-3d transform-3d" />
                            </div>
                            <div className="max-w-64">
                                <div className="text-foreground">{t('brandStoryModule.brandName')}</div>
                                <p className="text-muted-foreground text-sm">
                                    {t('brandStoryModule.brandDescription')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative mx-auto grid h-full w-full max-w-7xl grid-cols-1 gap-32 pt-20 md:w-auto md:grid-cols-2">
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
            </div>
        </section>
    );
}
