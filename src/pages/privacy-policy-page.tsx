import { Trans, useTranslation } from 'react-i18next';

export default function PrivacyPolicyPage() {
    const { t } = useTranslation();

    return (
        <section className="bg-foreground h-full w-full px-4 py-52 sm:px-8">
            <div className="mx-auto flex max-w-7xl flex-col">
                <div className="text-accent mr-auto flex max-w-4xl flex-col gap-4 text-lg">
                    <Trans
                        i18nKey="privacyPolicy"
                        t={t}
                        components={{
                            h1: <h1 className="text-background text-5xl md:text-6xl" />,
                            h2: <h2 className="text-background mt-24 text-4xl font-normal" />,
                            h3: <h3 className="text-background mt-6 text-2xl font-normal" />,
                            ul: <ul className="pl-12" />,
                            li: <li className="list-inside list-disc" />,
                            a: (
                                <a className="text-background hover:text-accent/70 break-all transition-all duration-300 ease-in-out" />
                            ),
                        }}
                    />
                </div>
            </div>
        </section>
    );
}
