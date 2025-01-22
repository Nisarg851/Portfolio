export const getImageUrl = (path,name,file_name) => {
    return new URL(`${path}/${name}.${file_name}`, import.meta.url).href;
}