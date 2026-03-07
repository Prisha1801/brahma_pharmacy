import Banner from '../components/Home/Banner';
import BVIOP from '../components/Home/BVIOP';
import News from '../components/Home/News';
import Why from '../components/Home/Why';
import Facilities from '../components/Home/Facilities';
import CampusGallery from '../components/Home/CampusGallery';
import KeyHighlights from '../components/Home/KeyHighlights';
import SocialMedia from '../components/Home/SocialMedia';

function Home() {
    return (
        <>
            <Banner />
            <BVIOP />
            <News />
            <Why />
            <Facilities />
            <CampusGallery />
            <KeyHighlights />
            <SocialMedia />
        </>
    );
}

export default Home;
