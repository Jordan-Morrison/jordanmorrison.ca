import { getImages } from "@/components/helpers/helpers";
import Home from "@/components/templates/Home";

export default function Adventure(props) {
    return (
        <Home category="adventure" pageTitle="Adventure" images={props.images}/>
    )
}

export async function getStaticProps() {

    let images = await getImages("adventure");

    return {
        props: {
            images
        }
    }
}