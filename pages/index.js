import { getImages } from "@/components/helpers/helpers";
import MetaTags from '@/components/molecules/MetaTags';
import Home from "@/components/templates/Home";

export default function Index(props) {
    return (
        <>
            <MetaTags
                title="Jordan Morrison Photography"
                description="Welcome to my portfolio showcasing my passion for adventure, real estate, and product photography. As a skilled photographer, I aim to capture the beauty and essence of every subject, whether it's a rugged landscape, a stunning home, or a cutting-edge product. Take a look at my work and let me tell your story through captivating and unique imagery."
                image="/images/thumbnails/adventure.jpg"
                url="jordanmorrison.ca"
            />
            <Home category="adventure" images={props.images}/>
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