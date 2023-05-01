import Home from "@/components/templates/Home";

export default function Adventure() {
    return (
        <Home category="adventure"/>
    )
}

export async function getStaticProps(context) {

    return {
        props: {}, // will be passed to the page component as props
    }
}
