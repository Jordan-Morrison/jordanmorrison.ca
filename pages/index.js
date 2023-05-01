import Home from "@/components/templates/Home";

export default function Index() {
    return (
        <Home/>
    )
}

export async function getStaticProps(context) {

    console.log(context.req);

    return {
        props: {}, // will be passed to the page component as props
    }
}
