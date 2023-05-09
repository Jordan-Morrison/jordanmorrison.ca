import { getImages } from "@/components/helpers/helpers";
import Home from "@/components/templates/Home";

export default function RealEstate(props) {
    return (
        <Home category="real-estate" pageTitle="Real Estate" images={props.images}/>
    )
}

export async function getStaticProps() {

    let images = await getImages("real-estate");

    return {
        props: {
            images
        }
    }
}
