import { useTranslation } from 'react-i18next';
import { ContactForm } from '@/components/contact-form.tsx';

export default function ContactPage() {
    const { t } = useTranslation();

    return (
        <section className="bg-foreground flex h-max w-full items-center justify-center px-8 py-52 lg:px-16">
            <div className="mx-auto flex h-full w-full max-w-7xl flex-col items-start justify-center gap-20 md:flex-row md:gap-20">
                <div className="text-background flex w-full flex-col gap-5 md:w-1/2 md:gap-8">
                    <h1 className="max-w-xl text-4xl md:text-6xl">{t('contactPage.title')}</h1>
                    <p className="text-xl md:text-2xl">{t('contactPage.description')}</p>
                </div>
                <div className="flex h-full w-full flex-col gap-8 md:w-1/2">
                    <ContactForm />
                </div>
            </div>
        </section>
    );
}
