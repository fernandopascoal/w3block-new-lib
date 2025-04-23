export function modifyStringPath(input, insertion) {
    const lastDotIndex = input.lastIndexOf('.');
    if (lastDotIndex === -1) {
        return `${insertion}.${input}`;
    }
    const start = input.slice(0, lastDotIndex);
    const end = input.slice(lastDotIndex + 1);
    return `${start}.${insertion}.${end}`;
}
