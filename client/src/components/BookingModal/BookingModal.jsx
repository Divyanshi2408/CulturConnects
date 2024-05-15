import React, { useContext, useState } from "react";
import { Modal, Button, Select, TextInput } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { useMutation } from "react-query";
import UserDetailContext from "../../context/UserDetailContext.js";
import { bookVisit } from "../../utils/api.js";
import { toast } from "react-toastify";
import dayjs from "dayjs";
import qr from './qr.png'; 

const BookingModal = ({ opened, setOpened, email, propertyId }) => {
  const [date, setDate] = useState(null);
  const [dropdownValue, setDropdownValue] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const {
    userDetails: { token },
    setUserDetails,
  } = useContext(UserDetailContext);

  const handleBookingSuccess = () => {
    toast.success("You have booked your visit", {
      position: "bottom-right",
    });
    setUserDetails((prev) => ({
      ...prev,
      bookings: [
        ...prev.bookings,
        {
          id: propertyId,
          date: dayjs(date).format("DD/MM/YYYY"),
        },
      ],
    }));
  };

  const { mutate, isLoading } = useMutation({
    mutationFn: () => bookVisit(date, propertyId, email, token, dropdownValue, name, phoneNumber),
    onSuccess: () => handleBookingSuccess(),
    onError: ({ response }) => toast.error(response.data.message),
    onSettled: () => setOpened(false),
  });

  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      title="Book your visit for this event"
      centered
    >
      <div className="flexColCenter" style={{ gap: "1rem" }}>
        <h1 style={{ fontSize: '16px', color: '#D49B0B', textAlign: 'center', marginBottom: '10px' }}>
        Enter your name
      </h1>
        <TextInput
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
          placeholder="Your Name"
          required
        />
         <h1 style={{ fontSize: '16px', color: '#D49B0B', textAlign: 'center', marginBottom: '10px' }}>
        Enter you phoneNumber
      </h1>
        <TextInput
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.currentTarget.value)}
          placeholder="Your Phone Number"
          required
        />
         <h1 style={{ fontSize: '16px', color: '#D49B0B', textAlign: 'center', marginBottom: '10px' }}>
        Pay the amount for confirmation of this event
      </h1>
        <img src={qr} style={{ width: '250px', height: '200px' }} alt="QR Code" />
        <h1 style={{ fontSize: '16px', color: '#D49B0B', textAlign: 'center', marginBottom: '10px' }}>
        Have you paid the amount?
      </h1>
        <Select
          data={["Yes", "No"]}
          value={dropdownValue}
          onChange={setDropdownValue}
          placeholder="Have you paid the amount?"
          required
        />
        <h1 style={{ fontSize: '16px', color: '#D49B0B', textAlign: 'center', marginBottom: '10px' }}>
        Select your date
      </h1>
        <DatePicker value={date} onChange={setDate} minDate={new Date()} />
        <Button
          disabled={!date || !dropdownValue || dropdownValue === "No" || !name || !phoneNumber || isLoading}
          onClick={() => mutate()}
          style={{ backgroundColor: '#D49B0B', color: 'white' }}
        >
          Book visit
        </Button>
      </div>
    </Modal>
  );
};

export default BookingModal;
