import TeamCard from '@/components/team-card.tsx';
import { useTranslation } from 'react-i18next';

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
        <section className="w-full h-max flex justify-center items-center px-8 lg:px-16 pt-52 pb-32 bg-foreground">
            <div className="w-full h-full flex flex-col justify-center items-start gap-20 max-w-7xl mx-auto">
                <div className="w-full text-background flex flex-col gap-5 md:gap-8">
                    <h1 className="text-6xl md:text-8xl">{t('teamOverviewModule.title')}</h1>
                    <p className="text-3xl md:text-5xl text-muted">{t('teamOverviewModule.description')}</p>
                </div>
                <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-12">
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
