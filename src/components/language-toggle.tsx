import { LanguagesIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function LanguageToggle() {
    const { t, i18n } = useTranslation();

    const handleLanguageChange = async (lang: string) => {
        await i18n.changeLanguage(lang);
        localStorage.setItem('nmlss-language', lang);
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="outline"
                    size="icon"
                >
                    <LanguagesIcon />
                    <span className="sr-only">{t('languageToggle.toggleLanguage')}</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem
                    onClick={async () => {
                        await handleLanguageChange('es');
                    }}
                >
                    {t('languageToggle.spanish')}
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={async () => {
                        await handleLanguageChange('en');
                    }}
                >
                    {t('languageToggle.english')}
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
