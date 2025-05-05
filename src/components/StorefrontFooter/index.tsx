import { CSSProperties } from "react";

import { ReactComponent as DiscordIcon } from "../../assets/icons/discord.svg";
import { ReactComponent as FacebookIcon } from "../../assets/icons/facebook.svg";
import { ReactComponent as GlobeIcon } from "../../assets/icons/globe.svg";
import { ReactComponent as InstagramIcon } from "../../assets/icons/instagram.svg";
import { ReactComponent as LinkedinIcon } from "../../assets/icons/linkedin.svg";
import { ReactComponent as TelegramIcon } from "../../assets/icons/message.svg";
import { ReactComponent as TwitterIcon } from "../../assets/icons/twitter.svg";
import { ReactComponent as WeblockLogo } from "../../assets/icons/w3block_logo_white.svg";
import { ReactComponent as WhatsappIcon } from "../../assets/icons/whatsapp.svg";

import { FooterData } from "../../interfaces/Theme";
import { useThemeConfig } from "../../hooks/useThemeConfig/useThemeConfig";
import { useMobilePreferenceDataWhenMobile } from "../../hooks/useMergeMobileData/useMergeMobileData";
import { convertSpacingToCSS } from "../../utils/convertSpacingToCSS";
import { getI18nString } from "../../hooks/useDynamicString/useDynamicString";
import { useLocale } from "../../hooks/useLocale";

type SVG = React.FunctionComponent<
  React.SVGProps<SVGSVGElement> & {
    title?: string | undefined;
  }
>;

export const StorefrontFooter = ({ data }: { data: FooterData }) => {
  const { styleData, contentData, mobileStyleData, mobileContentData } = data;
  const locale = useLocale();
  const theme = useThemeConfig();
  const mergedStyleData = useMobilePreferenceDataWhenMobile(
    styleData,
    mobileStyleData
  );
  const mergedContentData =
    useMobilePreferenceDataWhenMobile(contentData, mobileContentData) || {};

  const {
    backgroundColor,
    textColor,
    menuLinks,
    menuLinksColor,
    menuLinksHoverColor,
    socialNetworksIconColor,
    socialNetworksIconHoverColor,
    socialNetworks,
    w3blockSignature,
    margin,
    // padding,
  } = mergedStyleData;

  const { description } = mergedContentData;

  const iconsMap: Record<SocialNetworkType, SVG> = {
    twitter: TwitterIcon,
    telegram: TelegramIcon,
    discord: DiscordIcon,
    instagram: InstagramIcon,
    facebook: FacebookIcon,
    linkedin: LinkedinIcon,
    whatsapp: WhatsappIcon,
    website: GlobeIcon,
  };

  const names: (keyof FooterData["contentData"])[] = [
    "twitter",
    "telegram",
    "discord",
    "instagram",
    "facebook",
    "linkedin",
    "whatsapp",
    "website",
  ];

  const socialLinks = names.map((name) => ({
    url: mergedContentData?.[name],
    type: name as SocialNetworkType,
  }));

  return (
    <div
      id="sf-footer"
      style={{
        margin: convertSpacingToCSS(margin),
        // padding: convertSpacingToCSS(padding),
      }}
    >
      <div
        style={{ backgroundColor }}
        className="pw-w-full pw-shadow-[0px_-4px_16px_rgba(0,0,0,0.15)] pw-flex pw-justify-center pw-items-center"
      >
        <div className="pw-pb-6 pw-justify-center pw-items-center pw-max-w-[1440px] pw-w-full pw-pt-10">
          <div className="pw-w-full pw-font-semibold pw-text-sm pw-gap-2 sm:pw-gap-[26px] pw-flex pw-items-center pw-justify-center pw-flex-col sm:pw-flex-row">
            {menuLinks?.map(({ label, value }) => {
              const { text: pageTitle } = getI18nString(label, locale, theme);
              return (
                <a
                  key={label}
                  href={value}
                  className="footer-menu"
                  style={
                    {
                      textDecoration: "none",
                      "--footer-menu-color": menuLinksColor,
                      "--footer-menu-hover-color": menuLinksHoverColor,
                    } as CSSProperties
                  }
                >
                  {pageTitle}
                </a>
              );
            })}
          </div>

          <div className="pw-w-full pw-bg-[#ffffffaa] pw-h-[1px] pw-my-[10px]" />

          <div
            style={{ color: textColor }}
            className="pw-text-sm pw-leading-5 pw-text-center pw-px-7 sm:pw-px-28"
          >
            <p className="pw-text-center">{description}</p>
          </div>

          {socialNetworks && (
            <div className="pw-w-full pw-flex pw-flex-wrap pw-gap-2 pw-justify-center pw-pt-4">
              {socialLinks.map((socialLink) => {
                if (!socialLink.url || socialLink.url == "") return null;

                const Icon = iconsMap[socialLink.type];

                return (
                  <a
                    key={socialLink.type}
                    href={socialLink.url}
                    target="_blank"
                    className="pw-rounded-full pw-grid pw-place-items-center pw-p-2 footer-social-network"
                    style={
                      {
                        "--footer-social-network-color":
                          socialNetworksIconColor,
                        "--footer-social-network-hover-color":
                          socialNetworksIconHoverColor,
                      } as CSSProperties
                    }
                    rel="noreferrer"
                  >
                    <Icon className="pw-fill-white pw-w-4 pw-h-4" />
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {w3blockSignature && (
        <div className="pw-w-full pw-flex pw-justify-center pw-items-center pw-h-[14px] pw-bg-black pw-font-medium pw-text-xs pw-py-[25px]">
          <a
            href="https://w3block.io"
            className="pw-flex"
            target="_blank"
            rel="noreferrer"
          >
            <p className="pw-text-center pw-text-white pw-font-medium pw-text-[11px] pw-mr-[6px]">
              {"Powered by"}
            </p>
            <WeblockLogo width={56} height={16} />
          </a>
        </div>
      )}
    </div>
  );
};

type SocialNetworkType =
  | "twitter"
  | "telegram"
  | "discord"
  | "instagram"
  | "facebook"
  | "linkedin"
  | "whatsapp"
  | "website";
