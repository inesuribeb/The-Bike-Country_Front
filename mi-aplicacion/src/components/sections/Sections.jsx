import "./Sections.css";
import Intro from "./Intro";
import MoreAboutUs from "./MoreAboutUs";
import CarruselBQ from "./CarruselBQ";
import MoreExperiences from "./MoreExperiences";
import LatestStories from "./LatestStories";
import IntroContact from "./IntroContact";

function Sections() {
    const carruselImages = [
        "https://images.pexels.com/photos/29637789/pexels-photo-29637789/free-photo-of-paisaje-costero-escenico-con-oceano-y-rocas.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/3450182/pexels-photo-3450182.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/6272170/pexels-photo-6272170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/3021724/pexels-photo-3021724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/12652444/pexels-photo-12652444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ];
    return (
        <>
            <Intro
                title={"THE BIKE COUNTRY"}
                content={"Premium bike experiences for those most demanding"}
                imageUrl={"https://content.rapha.cc/_next/image?url=https%3A%2F%2Fmedia.rapha.cc%2Fimage%2Fupload%2Fw_1600%2Cf_auto%2Cq_auto%2Cc_fill%2Car_16%3A9%2Cdpr_2.0%2Cr_0%2Ff_auto%2Fq_auto%3Abest%2Fv1728914199%2Flocation%2Fh224_location_PRO-TEAM-newzealand_04.jpg&w=3840&q=100"}
            ></Intro>
            <MoreAboutUs></MoreAboutUs>
            <CarruselBQ images={carruselImages}></CarruselBQ>
            <MoreExperiences></MoreExperiences>
            <LatestStories></LatestStories>
            <IntroContact></IntroContact>
        </>
    );
}

export default Sections;
