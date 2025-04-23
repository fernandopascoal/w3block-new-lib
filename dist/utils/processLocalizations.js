export function processLocalizations(items) {
    return items.map((item) => {
        const { attributes } = item;
        const { localizations, locale: parentLocale, ...rest } = attributes;
        const splittedLocale = parentLocale.split('-')?.[0];
        const mergedLocalizations = {
            [splittedLocale]: rest,
        };
        localizations?.data?.forEach((localization) => {
            const locale = localization?.attributes?.locale.split('-')?.[0];
            mergedLocalizations[locale] = { ...rest, ...localization?.attributes };
        });
        return {
            ...item,
            attributes: {
                ...attributes,
                localizations: mergedLocalizations,
            },
        };
    });
}
