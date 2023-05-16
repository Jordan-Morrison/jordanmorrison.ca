import { getImages } from "@/components/helpers/helpers";
import MetaTags from '@/components/molecules/MetaTags';
import Home from "@/components/templates/Home";

export default function Adventure(props) {
    return (
        <>
        <MetaTags
            title="Adventure - Jordan Morrison Photography"
            description="Welcome to my portfolio of breathtaking adventure photography. As a passionate adventurer and skilled photographer, I specialize in capturing the thrill and beauty of outdoor exploration. From towering mountain peaks to raging rivers, my photos will transport you to the heart of the action."
            image="/images/thumbnails/adventure.jpg"
            url="jordanmorrison.ca/adventure"
        />
        <Home category="adventure" pageTitle="Adventure" images={props.images}/>
        </>
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