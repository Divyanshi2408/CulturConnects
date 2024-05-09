import React, { useContext, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { getProperty, removeBooking } from "../../utils/api";
import { PuffLoader } from "react-spinners";
import { AiFillHeart } from "react-icons/ai";
import "./Property.css";
import { FaFacebook, FaTwitter, FaWhatsapp, FaCopy } from 'react-icons/fa';
import { FaCalendarAlt } from "react-icons/fa";
import { AiTwotoneCar } from "react-icons/ai";
import { MdLocationPin, MdMeetingRoom } from "react-icons/md";
import Map from "../../components/Map/Map";
import useAuthCheck from "../../hooks/useAuthCheck";
import { useAuth0 } from "@auth0/auth0-react";
import BookingModal from "../../components/BookingModal/BookingModal";
import UserDetailContext from "../../context/UserDetailContext.js";
import { Button } from "@mantine/core";
import { toast } from "react-toastify";
import Heart from "../../components/Heart/Heart";

const Property = () => {
  const { pathname } = useLocation();
  const id = pathname.split("/").slice(-1)[0];
  const { data, isLoading, isError } = useQuery(["resd", id], () =>
    getProperty(id)
  );

  const [modalOpened, setModalOpened] = useState(false);
  const { validateLogin } = useAuthCheck();
  const { user } = useAuth0();

  const {
    userDetails: { token, bookings },
    setUserDetails,
  } = useContext(UserDetailContext);

  const { mutate: cancelBooking, isLoading: cancelling } = useMutation({
    mutationFn: () => removeBooking(id, user?.email, token),
    onSuccess: () => {
      setUserDetails((prev) => ({
        ...prev,
        bookings: prev.bookings.filter((booking) => booking?.id !== id),
      }));

      toast.success("Booking cancelled", { position: "bottom-right" });
    },
  });

  // Function to format the date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  }

  // Function to handle copying the link to clipboard
  const handleCopyLink = () => {
    const eventPageUrl = `https://cultur-connects.vercel.app/properties/${id}`;
    navigator.clipboard.writeText(eventPageUrl);
    toast.success("Link copied to clipboard", { position: "bottom-right" });
  };

  // Function to handle sharing on Twitter
  const handleTwitterShare = () => {
    const eventPageUrl = `https://cultur-connects.vercel.app/properties/${id}`;
    const tweetContent = encodeURIComponent(`Check out this event on CulturConnect: ${eventPageUrl}`);
    const twitterUrl = `https://twitter.com/intent/tweet?text=${tweetContent}`;
    window.open(twitterUrl, "_blank");
  };

  // Function to handle sharing on WhatsApp
  const handleWhatsAppShare = () => {
    const eventPageUrl = `https://cultur-connects.vercel.app/properties/${id}`;
    const message = encodeURIComponent(`Check out this event on CulturConnect: ${eventPageUrl}`);
    const whatsappUrl = `https://wa.me/?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  // Function to handle sharing on Facebook
  const handleFacebookShare = () => {
    const eventPageUrl = `https://cultur-connects.vercel.app/properties/${id}`;
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(eventPageUrl)}`;
    window.open(facebookUrl, "_blank");
  };

  if (isLoading) {
    return (
      <div className="wrapper">
        <div className="flexCenter paddings">
          <PuffLoader />
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="wrapper">
        <div className="flexCenter paddings">
          <span>Error while fetching the property details</span>
        </div>
      </div>
    );
  }

  return (
    <div className="wrapper">
      <div className="flexColStart paddings innerWidth property-container">
        {/* like button */}
        <div className="like">
          <Heart id={id}/>
        </div>

        {/* image */}
        <div className="property-container">
          <img 
            src={data?.image} 
            alt="home image" 
            className="image"
          />
          <div className="des">
            <div 
              style={{ 
                backgroundColor: "#808080", 
                padding: "15px", 
                borderRadius: "10px", 
                maxWidth: "470px", 
                margin: "0 auto", // Center the description container
                textAlign: "center", // Center the text within the description container
              }}
            >
              <p> Your contribution always acts as a gift to the couple and includes entry to all ceremonies on all days.</p>
              <div 
                style={{ 
                  backgroundColor: "#f0f0f0", 
                  padding: "10px", 
                  borderRadius: "10px", 
                  maxWidth: "400px", // Set maximum width for larger screens
                  margin: "18px auto", 
                  // Center the nested description container
                }}
              >
                <p><span className="orangeText" style={{ fontSize: "1.5rem" }}>
                  $ {data?.price}
                </span></p>
                {/* Additional text content */}
              </div>
            </div>
            <div 
              style={{ 
                backgroundColor: "#FFAD00", 
                padding: "40px", 
                borderRadius: "10px", 
                maxWidth: "470px", 
                margin: "0 auto", // Center the description container
                textAlign: "center", // Center the text within the description container
                marginTop: "40px" // Add top margin to create space between description boxes
              }}
            >
              <p>Interested in visiting another wedding?</p>
              <div 
                style={{ 
                  backgroundColor: "#f0f0f0", 
                  padding: "10px", 
                  borderRadius: "10px", 
                  maxWidth: "470px", // Set maximum width for larger screens
                  margin: "18px auto", 
                  // Center the nested description container
                }}
              >
                <p>Let us match with another event</p>
                {/* Additional text content */}
              </div>
            </div>
          </div>
        </div>

        <div className="flexCenter property-details">
          {/* left */}
          <div className="flexColStart left">
            {/* head */}
            <div className="flexStart head">
              <span className="primaryText">{data?.title}</span>
            </div>
            <h2 style={{ color: "grey" }}>About the host</h2>
            <span className="secondaryText" style={{ textAlign: "justify" }}>
              {data?.description}
            </span>

            {/* facilities */}
            <div className="flexStart facilities">
              {/* bathrooms */}
              <div className="flexStart facility">
                <FaCalendarAlt size={20} color="#1F3E72" />
                <span>{data?.facilities?.Day} Day</span>
              </div>

              {/* parkings */}
              <div className="flexStart facility">
                <AiTwotoneCar size={20} color="#1F3E72" />
                <span>{data?.facilities.transportation} Transportation</span>
              </div>

              {/* rooms */}
              <div className="flexStart facility">
                <MdMeetingRoom size={20} color="#1F3E72" />
                <span>{data?.facilities.bedrooms} Room/s</span>
              </div>
            </div>
            <h2 style={{ color: "grey" }}>Day1</h2>
            <span className="orangeText" style={{ fontSize: "1.2rem" , textAlign: "center" }}>
              {formatDate(data?.date1)}
            </span>
            {/* description */}
            <span className="secondaryText" style={{ textAlign: "justify" }}>
              {data?.day1}
            </span>

            <h2 style={{ color: "grey" }}>Day2</h2>
            <span className="orangeText" style={{ fontSize: "1.2rem" , textAlign: "center" }}>
              {formatDate(data?.date2)}
            </span>
            {/* description */}
            <span className="secondaryText" style={{ textAlign: "justify" }}>
              {data?.day2}
            </span>

            {/* address */}
            <div className="flexStart" style={{ gap: "1rem" }}>
              <MdLocationPin size={25} />
              <span className="secondaryText">
                {data?.address}{" "}
                {data?.city}{" "}
                {data?.country}
              </span>
            </div>

            {/* booking button */}
            {bookings?.map((booking) => booking.id).includes(id) ? (
              <>
                <Button
                  variant="outline"
                  w={"100%"}
                  color="red"
                  onClick={() => cancelBooking()}
                  disabled={cancelling}
                >
                  <span>Cancel booking</span>
                </Button>
                <span>
                  Your visit already booked for date{" "}
                  {bookings?.filter((booking) => booking?.id === id)[0].date}
                </span>
              </>
            ) : (
              <button
                className="button"
                onClick={() => {
                  validateLogin() && setModalOpened(true);
                }}
              >
                Book your visit
              </button>
            )}

            <BookingModal
              opened={modalOpened}
              setOpened={setModalOpened}
              propertyId={id}
              email={user?.email}
            />
          </div>

          {/* right side */}
          <div className="map">
            <Map
              address={data?.address}
              city={data?.city}
              country={data?.country}
            />
          </div>
        </div>

        {/* Share buttons */}
        <div className="share-buttons">
          <button style={{ backgroundColor:"#000000"}} onClick={handleCopyLink}> <div style={{ display: 'flex', alignItems: 'center' }}><FaCopy style={{ marginRight: '5px' }}/>Copy Link</div></button>
          <button style={{ backgroundColor:"#1DA1F2"}} onClick={handleTwitterShare}> <div style={{ display: 'flex', alignItems: 'center' }}><FaTwitter style={{ marginRight: '5px' }} />Share on Twitter</div></button>
          <button style={{ backgroundColor:"#3B5998"}} onClick={handleFacebookShare}> <div style={{ display: 'flex', alignItems: 'center' }}><FaFacebook  style={{ marginRight: '5px' }} />Share on Facebook</div></button>
          <button style={{ backgroundColor:"#25d366"}} onClick={handleWhatsAppShare}> <div style={{ display: 'flex', alignItems: 'center' }}><FaWhatsapp style={{ marginRight: '5px' }}/>Share on WhatsApp</div></button>
       
        </div>
      </div>
    </div>
  );
};

export default Property;
