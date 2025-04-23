import { breakpointsEnum } from "../../enums/breakpointsEnum";
import { useBreakpoints } from "../useBreakpoints/useBreakpoints";
const mobileBreakpoints = [breakpointsEnum.SM, breakpointsEnum.XS];
export const useMobilePreferenceDataWhenMobile = (desktopData, mobileData) => {
    const breakpoint = useBreakpoints();
    return mobileBreakpoints.includes(breakpoint)
        ? { ...desktopData, ...mobileData }
        : desktopData;
};
