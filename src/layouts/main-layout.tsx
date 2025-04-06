import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import Header from '@/modules/header.tsx';
import Footer from '@/modules/footer.tsx';
import { Toaster } from '@/components/ui/sonner.tsx';

export default function MainLayout() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
            <Toaster />
        </>
    );
}
