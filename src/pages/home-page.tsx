import HeroHome from '@/modules/hero-home.tsx';
import Services from '@/modules/services.tsx';
import Projects from '@/modules/projects.tsx';
import Testimonials from '@/modules/testimonials.tsx';
import Contact from '@/modules/contact.tsx';

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
