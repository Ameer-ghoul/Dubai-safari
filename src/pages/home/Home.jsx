import HeroHeader from "../../components/hero-header/HeroHeader";
import Services from "../../components/services/Services";
import TourList from "../../components/tours/TourList";
import Pagination from "../../components/pagination/Pagination";
import Sort from "../../components/sortinput/Sort";
import Banner from "../../components/banner/Banner";
import NewsLetter from "../../components/news-letter/NewsLetter";
import { pagination } from "../../utils/pagination";
import { toursList } from "../../data";
import { useState } from "react";

const Home = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const [sortTour, setSortTour] = useState("recomended");
  
    // sort item
    const sortedTourList =
      sortTour === "low"
        ? toursList.sort((a, b) => a.priceFrom - b.priceFrom)
        : sortTour === " heigh"
        ? toursList.sort((a, b) => b.priceFrom - a.priceFrom)
        : toursList.sort((a, b) => b.rating - a.rating);
  
    const { pages, orderedToursList } = pagination(
      toursList.length,
      sortedTourList,
      currentPage
    );

    return (
        <div> <HeroHeader />
            <Services />
            <Sort
                setSortTour={setSortTour}
                sortTour={sortTour}
                toursLength={toursList.length}
            />
            <TourList TourList={orderedToursList} />
            <Pagination
                pages={pages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
            <Banner />
            <NewsLetter /></div>
    )
}

export default Home;