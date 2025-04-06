import { Trans, useTranslation } from 'react-i18next';

export default function TermsAndConditionsPage() {
    const { t } = useTranslation();

    return (
        <section className="w-full h-full px-8 lg:px-16 py-52 bg-foreground">
            <div className="w-full flex flex-col max-w-7xl mx-auto">
                <div className="w-full flex flex-col gap-4 max-w-4xl mr-auto text-accent text-lg">
                    <Trans
                        i18nKey="termsAndConditions"
                        t={t}
                        components={{
                            h1: <h1 className="text-5xl md:text-6xl text-background" />,
                            h2: <h2 className="font-normal text-4xl text-background mt-24" />,
                            h3: <h3 className="font-normal text-2xl text-background mt-6" />,
                            ul: <ul className="pl-12" />,
                            li: <li className="list-disc list-inside" />,
                            a: (
                                <a className="text-background hover:text-accent/70 transition-all duration-300 ease-in-out break-all" />
                            ),
                        }}
                    />
                </div>
            </div>
        </section>
    );
}
