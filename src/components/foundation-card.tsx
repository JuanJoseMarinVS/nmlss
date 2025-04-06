import Icons from '@/components/icons.tsx';
import { cn } from '@/lib/utils.ts';

interface FoundationCardProps {
    className?: string;
    icon: keyof typeof Icons;
    title: string;
    description: string;
}

export default function FoundationCard({ icon, title, description, className }: FoundationCardProps) {
    const IconComponent = Icons[icon];

    return (
        <article className={cn('flex max-w-xs flex-col gap-8 md:mx-auto', className)}>
            <IconComponent className="h-60 w-60 translate-3d transform-3d" />
            <div className="flex flex-col gap-2">
                <h4 className="text-xl font-medium">{title}</h4>
                <p className="text-muted-foreground text-base font-light">{description}</p>
            </div>
        </article>
    );
}
