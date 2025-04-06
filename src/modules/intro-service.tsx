import { Service } from '@/interfaces';

export default function IntroService({ service }: { service: Service }) {
    const { intro } = service;

    return (
        <section className="w-full h-full flex flex-col justify-center items-center gap-10 px-8 lg:px-16 py-32">
            <h3 className="text-2xl md:text-3xl w-full text-center -my-6 max-w-7xl mx-auto text-foreground">
                {intro.title}
            </h3>
            <h2 className="text-[22vw] w-full font-serif text-center mx-auto -my-10 md:-my-[6%]">{intro.word}</h2>
            <hr className="border-b border-muted-foreground w-[80%] 2xl:w-full max-w-7xl z-[2] my-16 xl:my-36 mx-auto" />
            <div className="w-full flex flex-col gap-20 max-w-7xl mx-auto">
                <p className="w-full max-w-3xl font-light text-3xl md:text-4xl text-muted-foreground">
                    {intro.description}
                </p>
                {intro.descriptionBold && (
                    <p className="w-full max-w-3xl font-bold text-5xl md:text-6xl text-foreground">
                        {intro.descriptionBold}
                    </p>
                )}
            </div>
        </section>
    );
}
