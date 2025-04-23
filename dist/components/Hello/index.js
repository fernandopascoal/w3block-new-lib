import { jsx as _jsx } from "react/jsx-runtime";
export const Hello = () => {
    console.log('link funcionando');
    return (_jsx("div", { children: _jsx("p", { className: 'pw-text-red-600 pw-font-bold', children: "teste lib linkado" }) }));
};
