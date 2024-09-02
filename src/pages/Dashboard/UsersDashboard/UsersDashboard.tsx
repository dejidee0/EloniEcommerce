import AboveFooterSection from "@/components/AboveFooterSection/AboveFooterSection"
import Banner from "@/components/Banner/Banner"
import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header/Header"
import SideBar from "@/components/SideBar/SideBar"
import { Container } from "theme-ui"


const UsersDashboard = () => {

    return (
        <>
            <Header />
            <Container sx={{ paddingLeft: [0, 150], paddingRight: [0, 150] }}>
                <Banner />
                <SideBar />
                <AboveFooterSection />
            </Container>
            <Footer />
        </>
    )
}

export default UsersDashboard