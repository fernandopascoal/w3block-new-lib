/* eslint-disable @typescript-eslint/no-explicit-any */
import { JSX, ReactNode, lazy, useMemo } from 'react';
import { PixwayUISdkLocale } from '../contexts/LocaleContext';
import { W3blockUISDKGereralConfigContext } from '../contexts/W3blockUISDKGeneralConfigContext';
import { W3blockApiProvider } from './W3blockApiProvider';
import { EnvironmentContext } from '../contexts/EnvironmentContext';
import { MetamaskProviderUiSDK } from './MetamaskProviderUiSDK';
import { SocketProviderUiSDK } from './SocketProviderUiSDK';
import { CartProvider } from './cartProvider';
import { TagManagerProvider } from './TagManagerProvider';
import { ErrorProvider } from './ErrorProvider';
import { LocaleProvider } from './LocaleProvider';


interface Props extends JSX.IntrinsicAttributes {
  children: ReactNode;
  api: {
    idUrl: string;
    keyUrl: string;
    commerceUrl: string;
    pdfUrl: string;
    pollUrl?: string;
    passUrl: string;
    directory?: string;
  };
  locale: PixwayUISdkLocale;
  companyId: string;
  logoUrl: string;
  isProduction: boolean;
  appBaseUrl: string;
  connectProxyPass?: string;
  name?: string;
  logError?(error: any, extra?: object): void;
  gtag?(event: any, params?: object): void;
}

export const W3blockUISDKGeneralConfigProvider = ({
  children,
  api,
  locale,
  companyId,
  logoUrl,
  isProduction,
  appBaseUrl,
  connectProxyPass = '',
  name = '',
  logError,
  gtag,
}: Props) => {
  const companyValue = useMemo(
    () => ({ companyId, logoUrl, appBaseUrl, connectProxyPass, name }),
    [logoUrl, companyId, appBaseUrl, connectProxyPass, name]
  );

  const environmentValue = useMemo(
    () => ({
      isProduction,
    }),
    [isProduction]
  );

  return (
    <W3blockUISDKGereralConfigContext.Provider value={companyValue}>
      <EnvironmentContext.Provider value={environmentValue}>
        <W3blockApiProvider
          w3BlockPollApiUrl={api.pollUrl ?? ''}
          w3blockIdAPIUrl={api.idUrl}
          w3blockKeyAPIUrl={api.keyUrl}
          w3blockCommerceAPIUrl={api.commerceUrl}
          w3blockPdfAPIUrl={api.pdfUrl}
          w3BlockPassApiUrl={api.passUrl ?? ''}
        >
          <MetamaskProviderUiSDK>
            <SocketProviderUiSDK>
              <CartProvider>
                <TagManagerProvider gtag={gtag}>
                  <ErrorProvider logError={logError}>
                    <LocaleProvider locale={locale}>{children}</LocaleProvider>
                  </ErrorProvider>
                </TagManagerProvider>
              </CartProvider>
            </SocketProviderUiSDK>
          </MetamaskProviderUiSDK>
        </W3blockApiProvider>
      </EnvironmentContext.Provider>
    </W3blockUISDKGereralConfigContext.Provider>
  );
};
