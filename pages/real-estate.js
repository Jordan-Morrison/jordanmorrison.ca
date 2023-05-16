import { getImages } from "@/components/helpers/helpers";
import MetaTags from '@/components/molecules/MetaTags';
import Home from "@/components/templates/Home";

export default function RealEstate(props) {
    return (
        <>
            <MetaTags
                title="Real Estate - Jordan Morrison Photography"
                description="Discover the beauty and elegance of real estate through my expertly crafted photography. Capturing the essence of each property, whether it's a modern city condo or a sprawling countryside estate. As a certified drone pilot I can capture stunning images from within and above your home. Browse my portfolio and let my photos help you showcase the unique features and style of your property."
                image="/images/thumbnails/real-estate.jpg"
                url="jordanmorrison.ca/real-estate"
            />
            <Home category="real-estate" pageTitle="Real Estate" images={props.images}/>
        </>
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
