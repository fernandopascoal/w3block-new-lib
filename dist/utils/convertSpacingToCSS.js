export const convertSpacingToCSS = (spacing) => spacing
    ?.split(',')
    .map((s) => (s || 0) + 'px')
    .join(' ');
