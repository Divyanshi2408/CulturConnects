import React from "react";
import { TextInput, Box, Textarea, Group, Button } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { useForm } from "@mantine/form";
import { validateString } from "../../utils/common";

const DaysInfo = ({ prevStep, nextStep, propertyDetails, setPropertyDetails }) => {
  const form = useForm({
    initialValues: {
      date1: propertyDetails.date1 ? new Date(propertyDetails.date1) : null,
      day1: propertyDetails.day1,
      date2: propertyDetails.date2 ? new Date(propertyDetails.date2) : null,
      day2: propertyDetails.day2,
      
    },
    validate: {
      day1: (value) => validateString(value),
      day2: (value) => validateString(value),
    },
  });

  const { date1, day1, date2, day2} = form.values


  const handleSubmit = ()=> {
    const {hasErrors} = form.validate()
    if(!hasErrors) {
     setPropertyDetails((prev)=> ({...prev, date1, day1, date2, day2}))
     nextStep()
    }
   }
  return (
    <Box maw="50%" mx="auto" my="md">
      <form  onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}>
        <DatePicker
          withAsterisk
          label="Date for 1 day"
          placeholder="Select date"
          clearable
          {...form.getInputProps("date1")}
        />
        <Textarea
          placeholder="Day1 description"
          label="Day1"
          withAsterisk
          {...form.getInputProps("day1")}
        />
        <DatePicker
          withAsterisk
          label="Date for 2 day"
          placeholder="Select date"
          clearable
          {...form.getInputProps("date2")}
        />
       <Textarea
          placeholder="Day2 description"
          label="Day2"
          withAsterisk
          {...form.getInputProps("day2")}
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

export default DaysInfo;
