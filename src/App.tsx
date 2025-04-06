import { BrowserRouter, Route, Routes } from 'react-router';

import './styles/App.css';

import { GlobalProvider } from '@/context';

import { ThemeProvider } from '@/providers/theme-provider.tsx';

import MainLayout from '@/layouts/main-layout.tsx';
import AboutUsPage from '@/pages/about-us-page.tsx';
import ContactPage from '@/pages/contact-page.tsx';
import CookiesPolicyPage from '@/pages/cookies-policy-page.tsx';
import HomePage from '@/pages/home-page.tsx';
import NotFoundPage from '@/pages/not-found-page.tsx';
import PrivacyPolicyPage from '@/pages/privacy-policy-page.tsx';
import ProjectPage from '@/pages/project-page.tsx';
import ProjectsPage from '@/pages/projects-page.tsx';
import ServicePage from '@/pages/service-page.tsx';
import TermsAndConditionsPage from '@/pages/terms-and-conditions-page.tsx';

function App() {
    return (
        <ThemeProvider
            defaultTheme="dark"
            storageKey="nmlss-ui-theme"
        >
            <GlobalProvider>
                <BrowserRouter>
                    <Routes>
                        <Route element={<MainLayout />}>
                            <Route
                                index
                                element={<HomePage />}
                            />
                            <Route
                                path="contact"
                                element={<ContactPage />}
                            />
                            <Route
                                path="about-us"
                                element={<AboutUsPage />}
                            />
                            <Route
                                path="projects"
                                element={<ProjectsPage />}
                            />
                            <Route
                                path="project/:projectId"
                                element={<ProjectPage />}
                            />
                            <Route
                                path="service/:serviceId"
                                element={<ServicePage />}
                            />
                            <Route
                                path="terms-and-conditions"
                                element={<TermsAndConditionsPage />}
                            />
                            <Route
                                path="privacy-policy"
                                element={<PrivacyPolicyPage />}
                            />
                            <Route
                                path="cookies-policy"
                                element={<CookiesPolicyPage />}
                            />
                            <Route
                                path="*"
                                element={<NotFoundPage />}
                            />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </GlobalProvider>
        </ThemeProvider>
    );
}

export default App;
