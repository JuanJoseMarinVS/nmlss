import { useState } from 'react';
import { NavLink } from 'react-router';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { Trans, useTranslation } from 'react-i18next';
import { toast } from 'sonner';
import { motion } from 'motion/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { buttonVariants } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea.tsx';
import { cn } from '@/lib/utils.ts';

export function ContactForm() {
    const { t } = useTranslation();

    const [disabled, setDisabled] = useState(false);

    const FormSchema = z.object({
        name: z.string().min(2, { message: t('contactForm.nameValidation') }),
        projectName: z.string().min(2, { message: t('contactForm.projectNameValidation') }),
        phone: z.string().min(10, { message: t('contactForm.phoneValidation') }),
        email: z.string().email({ message: t('contactForm.emailValidation') }),
        howDidYouHear: z.string().min(20, { message: t('contactForm.howDidYouHearValidation') }),
        terms: z.boolean().refine((val) => val, { message: t('contactForm.termsValidation') }),
    });

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            name: '',
            projectName: '',
            phone: '',
            email: '',
            howDidYouHear: '',
            terms: false,
        },
    });

    function onSubmit(data: z.infer<typeof FormSchema>) {
        setDisabled(true);

        toast(t('contactForm.successMessage'), {
            description: `Nombre: ${data.name}, Proyecto: ${data.projectName}, Teléfono: ${data.phone}, Email: ${data.email}, Cómo nos conociste: ${data.howDidYouHear}, Acepto los términos y condiciones`,
            duration: 3000,
            action: {
                label: 'Deshacer',
                onClick: () => console.log(t('contactForm.successMessage')),
            },
        });

        setTimeout(() => {
            setDisabled(false);
        }, 5000);
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-full space-y-12 text-background"
            >
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-2xl text-accent normal-case">
                                {t('contactForm.nameLabel')}
                            </FormLabel>
                            <FormControl>
                                <Input
                                    placeholder={t('contactForm.namePlaceholder')}
                                    className="border-transparent h-12 border-b-background rounded-none"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-2xl text-accent normal-case">
                                {t('contactForm.emailLabel')}
                            </FormLabel>
                            <FormControl>
                                <Input
                                    type="email"
                                    placeholder={t('contactForm.emailPlaceholder')}
                                    className="border-transparent h-12 border-b-background rounded-none"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-2xl text-accent normal-case">
                                {t('contactForm.phoneLabel')}
                            </FormLabel>
                            <FormControl>
                                <Input
                                    type="number"
                                    placeholder={t('contactForm.phonePlaceholder')}
                                    className="border-transparent h-12 border-b-background rounded-none"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="projectName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-2xl text-accent normal-case">
                                {t('contactForm.projectNameLabel')}
                            </FormLabel>
                            <FormControl>
                                <Input
                                    placeholder={t('contactForm.projectNamePlaceholder')}
                                    className="border-transparent h-12 border-b-background rounded-none"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="howDidYouHear"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-2xl text-accent normal-case">
                                {t('contactForm.howDidYouHearLabel')}
                            </FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder={t('contactForm.howDidYouHearPlaceholder')}
                                    className="border-transparent h-12 border-b-background rounded-none min-h-40"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="terms"
                    render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border">
                            <FormControl>
                                <Checkbox
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                    className="border-background cursor-pointer h-6 w-6 rounded-md"
                                />
                            </FormControl>
                            <div className="space-y-1 leading-none text-background">
                                <FormLabel className="cursor-pointer">{t('contactForm.termsLabel')}</FormLabel>
                                <FormDescription className="text-muted">
                                    <Trans
                                        i18nKey="contactForm.termsPlaceholder"
                                        t={t}
                                        components={{
                                            1: (
                                                <NavLink
                                                    to="/privacy-policy"
                                                    className="text-background hover:text-accent/70 transition-all duration-300 ease-in-out"
                                                />
                                            ),
                                        }}
                                    />
                                </FormDescription>
                            </div>
                        </FormItem>
                    )}
                />
                <motion.button
                    disabled={!form.formState.isValid || disabled}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 1.4 }}
                    className={cn(buttonVariants({ variant: 'secondary' }), 'cursor-pointer p-8 text-xl rounded-full')}
                >
                    {t('contactForm.submitLabel')}
                </motion.button>
            </form>
        </Form>
    );
}
