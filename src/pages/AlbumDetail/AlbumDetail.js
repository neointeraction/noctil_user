import React from "react";
import { useOutletContext, Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import PageHeader from "../../components/PageHeader";
import DraggableTab from "../../components/DraggableTab";
import AlbumDetaillForm from "./components/AlbumDetaillForm";

import HomeIcon from "../../assets/images/icons/home-icon.svg";
import Userxs from "../../assets/images/icons/user-xs.svg";

const AlbumDetail = () => {
  const [toggleViewPanel] = useOutletContext();

  const breadcrumbData = [
    {
      name: "Music Data",
      link: "/albums",
    },
    {
      name: "Album",
      link: "/albums",
    },
    {
      name: "Album Details",
    },
  ];

  const tabData = [
    {
      title: (
        <span>
          <img src={Userxs} alt="Userxs" className="tab-icon" />
          Three night dog
        </span>
      ),
      content: (
        <div>
          <AlbumDetaillForm />
        </div>
      ),
    },
    {
      title: (
        <span>
          <img src={Userxs} alt="Userxs" className="tab-icon" />
          Feel you
        </span>
      ),
      content: "New Content 2",
    },
    {
      title: (
        <span>
          <img src={Userxs} alt="Userxs" className="tab-icon" />
          Dua Lipa
        </span>
      ),
      content: "New Content 3",
    },
    {
      title: "Tab 4",
      content: (
        <div>
          <AlbumDetaillForm />
        </div>
      ),
    },
  ];

  console.log(toggleViewPanel, "toggleView");

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <ChevronRightIcon />,
    prevArrow: <ChevronLeftIcon />,
  };

  return (
    <div className="user-container">
      {!toggleViewPanel ? (
        <div className="user-detail-container">
          <div className="tab-with-home">
            <Link to="/albums">
              <div className="tab-back-home">
                <img src={HomeIcon} alt="HomeIcon" />
              </div>
            </Link>
            <DraggableTab tabs={tabData} />
          </div>
        </div>
      ) : (
        <div>
          <PageHeader
            breadCrumb={breadcrumbData}
            pageTitle="Album Details"
            pageSubText="Dashboard is Collection of Objects which are created..."
          />
          <Slider {...settings}>
            <div>
              <AlbumDetaillForm isCard />
            </div>
            <div>
              <AlbumDetaillForm isCard />
            </div>
            <div>
              <AlbumDetaillForm isCard />
            </div>
            <div>
              <AlbumDetaillForm isCard />
            </div>
          </Slider>
        </div>
      )}
    </div>
  );
};

export default AlbumDetail;
