export function unescapeHtml(input) {
    const doc = new DOMParser().parseFromString(input, 'text/html');
    let text = doc.body.textContent || '';
    const specialEntities = {
        '&nbsp;': ' ',
        '&amp;': '&',
        '&lt;': '<',
        '&gt;': '>',
        '&quot;': '"',
        '&#039;': "'",
        '&apos;': "'",
    };
    text = text.replace(/&(nbsp|amp|lt|gt|quot|#039|apos);/g, (match) => specialEntities[match] || match);
    return text;
}
