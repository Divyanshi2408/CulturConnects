import React from "react";
import { Box, Button, Group, NumberInput } from "@mantine/core";
import { useForm } from "@mantine/form";


const Facilities1 = ({
    prevStep, nextStep, propertyDetails, setPropertyDetails 
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

  const handleSubmit = ()=> {
    const {hasErrors} = form.validate()
    if(!hasErrors) {
     setPropertyDetails((prev)=> ({...bedrooms, transportation, Day}))
     nextStep()
    }
   }
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
          <Button type="submit">
            Next step
          </Button>
        </Group>
      </form>
    </Box>
  );
};

export default Facilities1;
