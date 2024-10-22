import { Hero } from "@/components/landingpage/Hero";
import { SelectDonationMethod } from "@/components/landingpage/SelectDonationMethod";
import Layout from "@/components/Layout";

export default function Home() {
    return (
        <Layout>
        <Hero />
        <SelectDonationMethod />
        </Layout>
    )
}