import Contact from '@/modules/contact.tsx';
import HeroHome from '@/modules/hero-home.tsx';
import Projects from '@/modules/projects.tsx';
import Services from '@/modules/services.tsx';
import Testimonials from '@/modules/testimonials.tsx';

export default function HomePage() {
    return (
        <>
            <HeroHome />
            <Services />
            <Projects />
            <Testimonials />
            <Contact />
        </>
    );
}
