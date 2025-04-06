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
        <section className="w-full h-max flex flex-col justify-center items-center px-8 lg:px-16 py-32 bg-foreground -mt-1">
            <div className="relative w-full h-full flex flex-col justify-center items-start gap-16 max-w-7xl mx-auto">
                <div className="w-full text-background flex justify-start items-center gap-5 md:gap-8">
                    <h2 className="text-4xl md:text-6xl font-light">{t('testimonialsModule.title')}</h2>
                </div>
                <div className="flex flex-col justify-center items-center gap-4 w-full h-full">
                    <div className="w-full flex justify-end items-center gap-5">
                        <motion.button
                            whileHover={{ scale: 1.4 }}
                            whileTap={{ scale: 2 }}
                            className={cn(
                                buttonVariants({
                                    variant: 'default',
                                    size: 'icon',
                                }),
                                'rounded-full cursor-pointer text-muted',
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
                                'rounded-full cursor-pointer text-muted',
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
                                className="w-full h-full flex flex-col justify-start items-start gap-8 text-background max-w-sm md:max-w-lg cursor-pointer"
                            >
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.author}
                                    className="h-16 rounded-full object-contain object-center aspect-video"
                                />
                                <p className="text-base font-light">{testimonial.text}</p>
                                <div className="flex flex-col mt-6">
                                    <p className="text-xl">{testimonial.author}</p>
                                    <p className="text-xs text-muted">{testimonial.role}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
