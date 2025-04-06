import TeamOverview from '@/modules/team-overview.tsx';
import BrandStory from '@/modules/brand-story.tsx';
import Testimonials from '@/modules/testimonials.tsx';
import Partners from '@/modules/partners.tsx';
import Contact from '@/modules/contact.tsx';

export default function AboutUsPage() {
    return (
        <>
            <TeamOverview />
            <BrandStory />
            <Testimonials />
            <Partners />
            <Contact />
        </>
    );
}
