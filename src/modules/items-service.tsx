import { Service } from '@/interfaces';

export default function ItemsService({ service }: { service: Service }) {
    const { items } = service;
    return (
        <section className="w-full h-full px-8 lg:px-16 py-32">
            <div className="flex flex-col gap-28 max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl w-full max-w-4xl text-muted-foreground">{items.title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                    {items.list.map((item, index) => (
                        <article
                            key={index}
                            className="w-full flex flex-col gap-3 justify-start items-start max-w-xs"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-[96px] h-[96px] aspect-square"
                            />
                            <h4 className="text-2xl font-semibold">{item.title}</h4>
                            <p className="text-lg text-muted-foreground">{item.description}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
