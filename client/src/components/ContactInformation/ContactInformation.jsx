import React from "react";
import { TextInput, Box, Textarea, Group, Button, NumberInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { validateString } from "../../utils/common";

const ContactInformation = ({ prevStep, nextStep, propertyDetails, setPropertyDetails }) => {
  const form = useForm({
    initialValues: {
      phoneNumber: propertyDetails.phoneNumber,
      GuideName: propertyDetails.GuideName,
      GuidePhoneNumber: propertyDetails.GuidePhoneNumber,
    },
    validate: {
      phoneNumber: (value) => validateString(value),
      guideName: (value) => validateString(value),
      guidePhoneNumber: (value) => validateString(value),
      
    },
  });

  const {phoneNumber, guideName,  guidePhoneNumber,} = form.values


  const handleSubmit = ()=> {
    const {hasErrors} = form.validate()
    if(!hasErrors) {
     setPropertyDetails((prev)=> ({...prev, phoneNumber, guideName, guidePhoneNumber,}))
     nextStep()
    }
   }
  return (
    <Box maw="50%" mx="auto" my="md">
      <form  onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}>
        <TextInput
          withAsterisk
          label="PhoneNumber"
          placeholder="PhoneNumber"
          {...form.getInputProps("phoneNumber")}
        />
        <Textarea
          placeholder="GuideName"
          label="GuideName"
          withAsterisk
          {...form.getInputProps("guideName")}
        />
        <Textarea
          placeholder="GuidePhoneNumber"
          label="GuidePhoneNumber"
          withAsterisk
          {...form.getInputProps("guidePhoneNumber")}
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

export default ContactInformation;
