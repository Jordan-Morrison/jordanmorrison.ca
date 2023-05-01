import { readdirSync } from 'fs';

export async function getImages(category) {

    let images = await readdirSync(`./public/images/${category}`, {withFileTypes: true})
    .filter(item => !item.isDirectory())
    .filter(item => ["jpeg", "jpg", "png"].some(extension => item.name.includes(extension)))
    .map(item => `${process.env.IMAGE_BASE_URL}/images/${category}/` + item.name);

    return images;
}