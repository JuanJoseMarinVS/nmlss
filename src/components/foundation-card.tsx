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
        <article className={cn('max-w-xs flex flex-col gap-8 md:mx-auto', className)}>
            <IconComponent className="w-60 h-60 transform-3d translate-3d" />
            <div className="flex flex-col gap-2">
                <h4 className="text-xl font-medium">{title}</h4>
                <p className="text-base font-light text-muted-foreground">{description}</p>
            </div>
        </article>
    );
}
