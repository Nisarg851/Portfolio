export const getImageUrl = (name) => {
    return new URL(`../assets/organizational_logos/${name}.png`, import.meta.url).href;
}