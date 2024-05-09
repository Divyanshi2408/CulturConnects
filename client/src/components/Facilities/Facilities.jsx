import { useAuth0 } from "@auth0/auth0-react";
import { Box, Button, Group, NumberInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import React, { useContext } from "react";
import UserDetailContext from "../../context/UserDetailContext";
import useProperties from "../../hooks/useProperties.jsx";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { createResidency } from "../../utils/api";
const Facilities = ({
  prevStep,
  propertyDetails,
  setPropertyDetails,
  setOpened,
  setActiveStep,
}) => {
  const form = useForm({
    initialValues: {
      bedrooms: propertyDetails.facilities.bedrooms,
      transportation: propertyDetails.facilities.transportation,
      Day: propertyDetails.facilities.Day,
    },
    validate: {
      bedrooms: (value) => (value < 1 ? "Must have atleast one room" : null),
      Day: (value) =>
        value < 1 ? "Must have atleast one bathroom" : null,
    },
  });

  const { bedrooms, transportation, Day} = form.values;

  const handleSubmit = () => {
    const { hasErrors } = form.validate();
    if (!hasErrors) {
      setPropertyDetails((prev) => ({
        ...prev,
        facilities: { bedrooms, transportation, Day },
      }));
      mutate();
    }
  };

  // ==================== upload logic
  const { user } = useAuth0();
const {
  userDetails: { token },
} = useContext(UserDetailContext);
const { refetch: refetchProperties } = useProperties();

const { mutate, isLoading } = useMutation({
  mutationFn: () =>
    createResidency(
      {
        ...propertyDetails,
        facilities: {
          bedrooms: propertyDetails.facilities.bedrooms,
          transportation: propertyDetails.facilities.transportation,
          Day: propertyDetails.facilities.Day,
        },
        userEmail: user?.email, // Ensure user.email is defined or pass an empty string if it's undefined
      },
      token
    ),
  onError: ({ response }) =>
    toast.error(response.data.message, { position: "bottom-right" }),
  onSettled: () => {
    toast.success("Added Successfully", { position: "bottom-right" });
    setPropertyDetails({
      title: "",
      description: "",
      price: 0,
      day1: "",
      day2: "",
      date1: null,
      date2: null, 
      country: "",
      city: "",
      address: "",
      image: null,
      phoneNumber: "",
      guideName: "",
      guidePhoneNumber: "",
      facilities: {
        bedrooms: 0,
        transportation: 0,
        Day: 0,
      },
      userEmail: user?.email,
    });
    setOpened(false);
    setActiveStep(0);
    refetchProperties();
  },
});

  return (
    <Box maw="30%" mx="auto" my="sm">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <NumberInput
          withAsterisk
          label="No of Room"
          min={0}
          {...form.getInputProps("bedrooms")}
        />
        <NumberInput
          label="No of transportation"
          min={0}
          {...form.getInputProps("transportation")}
        />
        <NumberInput
          withAsterisk
          label="No of Day"
          min={0}
          {...form.getInputProps("Day")}
        />
        <Group position="center" mt="xl">
          <Button variant="default" onClick={prevStep}>
            Back
          </Button>
          <Button type="submit" color="green" disabled={isLoading}>
            {isLoading ? "Submitting" : "Add Property"}
          </Button>
        </Group>
      </form>
    </Box>
  );
};

export default Facilities;
