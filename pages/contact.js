import Contact from "@/components/templates/Contact";
import MetaTags from "@/components/molecules/MetaTags";

export default function ContactPage() {
    return (
        <>
            <MetaTags
                title="Contact - Jordan Morrison Photography"
                description="Get in touch with me and let's start capturing your vision together. Whether you have questions, inquiries, or want to discuss a photography project, I'd love to hear from you. Reach out through the contact form, and I'll get back to you as soon as possible. Let's collaborate and bring your ideas to life through stunning photography that will leave a lasting impression."
                image="/images/thumbnails/adventure.jpg"
                url="jordanmorrison.ca/contact"
            />
            <Contact/>
        </>
    )
}