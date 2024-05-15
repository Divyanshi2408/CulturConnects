// Display the list of bookings in your frontend component

import React, { useState, useEffect } from "react";
import { getAllBookingsForProperty } from "../../utils/api"; // Import the function to fetch bookings

const PropertyBookings = ({ email, propertyId, token }) => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const propertyBookings = await getAllBookingsForProperty(
          email,
          propertyId,
          token
        );
        setBookings(propertyBookings);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };

    fetchBookings();
  }, [email, propertyId, token]);

  return (
    <div>
      <h2>Bookings for Your Property</h2>
      <ul>
        {bookings.map((booking) => (
          <li key={booking.id}>User Email: {booking.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default PropertyBookings;
