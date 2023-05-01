import Home from "@/components/templates/Home";

export default function RealEstate() {
    return (
        <Home category="real-estate"/>
    )
}

export async function getStaticProps(context) {

    return {
        props: {}, // will be passed to the page component as props
    }
}
