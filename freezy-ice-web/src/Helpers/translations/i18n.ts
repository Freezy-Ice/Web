import React from 'react';
import ReactDOM from 'react-dom';
import i18n from 'i18next';
import { useTranslation, initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: {
                monday: 'Poniedziałek',
                tuesday: 'Wtorek',
                wednesday: 'Środa',
                thursday: 'Czwartek',
                friday: 'Piątek',
                saturday: 'Sobota',
                sunday: 'Niedziela',
                openingHours: 'Godziny otwarcia',
                closed: 'Nieczynne',
                price: 'Cena',
                tastes: 'Smaki',
                calories: 'Kalorie',
                category: 'Rodzaj',
                categories: 'Rodzaje',
                description: 'Opis',
                rates: 'Opinie',
                search: 'Szukaj',
                from: 'Od',
                to: 'Do',
                city: 'Miasto',
                shopName: 'Nazwa lodziarni',
                priceAsc: 'Cena rosnąco',
                priceDsc: 'Cena malejąco',
                ratingAsc: 'Ocena rosnąco',
                ratingDsc: 'Ocena majejąco',
                updatedAtAsc: 'Najnowsze',
                updatedAtDsc: 'Najstarsze',
            },
        },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false,
    },
});
