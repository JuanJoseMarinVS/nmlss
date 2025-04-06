import { useTranslation } from 'react-i18next';

import TeamCard from '@/components/team-card.tsx';

interface TeamMember {
    name: string;
    position: string;
    description: string;
    image: string;
    linkedin: string;
}

export default function TeamOverview() {
    const { t } = useTranslation();

    const teamMembers: TeamMember[] = t('teamOverviewModule.members', { returnObjects: true }) as TeamMember[];

    return (
        <section className="bg-foreground flex h-max w-full items-center justify-center px-8 pt-52 pb-32 lg:px-16">
            <div className="mx-auto flex h-full w-full max-w-7xl flex-col items-start justify-center gap-20">
                <div className="text-background flex w-full flex-col gap-5 md:gap-8">
                    <h1 className="text-6xl md:text-8xl">{t('teamOverviewModule.title')}</h1>
                    <p className="text-muted text-3xl md:text-5xl">{t('teamOverviewModule.description')}</p>
                </div>
                <div className="grid h-full w-full grid-cols-1 gap-12 md:grid-cols-2">
                    {teamMembers.map((member: TeamMember, index: number) => (
                        <TeamCard
                            key={index}
                            name={member.name}
                            position={member.position}
                            image={member.image}
                            description={member.description}
                            link={member.linkedin}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
