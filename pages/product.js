import { getImages } from "@/components/helpers/helpers";
import Home from "@/components/templates/Home";

export default function Product(props) {
    return (
        <Home category="product" images={props.images}/>
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
