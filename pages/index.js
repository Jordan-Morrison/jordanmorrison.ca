import Home from "@/components/templates/Home";

export default function Index() {
    return (
        <Home category="adventure"/>
    )
}

export async function getStaticProps(context) {

    console.log(context.req);

    return {
        props: {}, // will be passed to the page component as props
    }
}
