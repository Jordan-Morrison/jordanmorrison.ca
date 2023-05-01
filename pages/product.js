import Home from "@/components/templates/Home";

export default function Product() {
    return (
        <Home category="product"/>
    )
}

export async function getStaticProps(context) {

    return {
        props: {}, // will be passed to the page component as props
    }
}
