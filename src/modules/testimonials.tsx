import { useRef } from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Swiper, SwiperSlide } from 'swiper/react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import 'swiper/css';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import 'swiper/css/pagination';
import { buttonVariants } from '@/components/ui/button.tsx';
import { cn } from '@/lib/utils.ts';
import { Testimonial } from '@/interfaces';

export default function Testimonials() {
    const { t } = useTranslation();
    const swiperRef = useRef(null);

    const testimonials: Testimonial[] = t('testimonials', { returnObjects: true }) as Testimonial[];

    return (
        <section className="bg-foreground -mt-1 flex h-max w-full flex-col items-center justify-center px-8 py-32 lg:px-16">
            <div className="relative mx-auto flex h-full w-full max-w-7xl flex-col items-start justify-center gap-16">
                <div className="text-background flex w-full items-center justify-start gap-5 md:gap-8">
                    <h2 className="text-4xl font-light md:text-6xl">{t('testimonialsModule.title')}</h2>
                </div>
                <div className="flex h-full w-full flex-col items-center justify-center gap-4">
                    <div className="flex w-full items-center justify-end gap-5">
                        <motion.button
                            whileHover={{ scale: 1.4 }}
                            whileTap={{ scale: 2 }}
                            className={cn(
                                buttonVariants({
                                    variant: 'default',
                                    size: 'icon',
                                }),
                                'text-muted cursor-pointer rounded-full',
                            )}
                            onClick={() => {
                                if (swiperRef.current) {
                                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                    // @ts-expect-error
                                    swiperRef.current.swiper.slidePrev();
                                }
                            }}
                        >
                            <ArrowLeftIcon />
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.4 }}
                            whileTap={{ scale: 2 }}
                            className={cn(
                                buttonVariants({
                                    variant: 'default',
                                    size: 'icon',
                                }),
                                'text-muted cursor-pointer rounded-full',
                            )}
                            onClick={() => {
                                if (swiperRef.current) {
                                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                    // @ts-expect-error
                                    swiperRef.current.swiper.slideNext();
                                }
                            }}
                        >
                            <ArrowRightIcon />
                        </motion.button>
                    </div>
                    <Swiper
                        ref={swiperRef}
                        slidesPerView={'auto'}
                        spaceBetween={30}
                        className="w-full"
                    >
                        {testimonials.map((testimonial: Testimonial, index: number) => (
                            <SwiperSlide
                                key={index}
                                className="text-background flex h-full w-full max-w-sm cursor-pointer flex-col items-start justify-start gap-8 md:max-w-lg"
                            >
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.author}
                                    className="aspect-video h-16 rounded-full object-contain object-center"
                                />
                                <p className="text-base font-light">{testimonial.text}</p>
                                <div className="mt-6 flex flex-col">
                                    <p className="text-xl">{testimonial.author}</p>
                                    <p className="text-muted text-xs">{testimonial.role}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
