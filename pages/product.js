import { getImages } from "@/components/helpers/helpers";
import MetaTags from '@/components/molecules/MetaTags';
import Home from "@/components/templates/Home";

export default function Product(props) {
    return (
        <>
            <MetaTags
                title="Product - Jordan Morrison Photography"
                description="Elevate your product’s success with my captivating and innovative product photography. I specialize in creating images that not only showcase the features of your product but also tell its story. From the smallest details to the big picture, my photos will help your product stand out and make a lasting impression."
                image="/images/thumbnails/product.jpg"
                url="jordanmorrison.ca/product"
            />
            <Home category="product" pageTitle="Product" images={props.images}/>
        </>
    )
}

export async function getStaticProps() {

    let images = await getImages("product");

    return {
        props: {
            images
        }
    }
}
