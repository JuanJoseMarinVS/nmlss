import BrandStory from '@/modules/brand-story.tsx';
import Contact from '@/modules/contact.tsx';
import Partners from '@/modules/partners.tsx';
import TeamOverview from '@/modules/team-overview.tsx';
import Testimonials from '@/modules/testimonials.tsx';

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
