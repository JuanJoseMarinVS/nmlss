import { useTranslation } from 'react-i18next';
import { ContactForm } from '@/components/contact-form.tsx';

export default function ContactPage() {
    const { t } = useTranslation();

    return (
        <section className="w-full h-max flex justify-center items-center px-8 lg:px-16 py-52 bg-foreground">
            <div className="w-full h-full flex flex-col md:flex-row justify-center items-start gap-10 md:gap-20 max-w-7xl mx-auto">
                <div className="w-full md:w-1/2 text-background flex flex-col gap-5 md:gap-8">
                    <h1 className="text-4xl md:text-6xl max-w-xl">{t('contactPage.title')}</h1>
                    <p className="text-xl md:text-2xl">{t('contactPage.description')}</p>
                </div>
                <div className="w-full md:w-1/2 h-full flex flex-col gap-8">
                    <ContactForm />
                </div>
            </div>
        </section>
    );
}
