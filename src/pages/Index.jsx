import React, { useState } from "react";
import { Box, Container, Select, Text, VStack, Heading } from "@chakra-ui/react";

const countryData = {
  USA: {
    currency: "USD",
    states: {
      California: ["Los Angeles", "San Francisco"],
      Texas: ["Houston", "Dallas"],
    },
  },
  India: {
    currency: "INR",
    states: {
      Maharashtra: ["Mumbai", "Pune"],
      Karnataka: ["Bengaluru", "Mysore"],
    },
  },
  Canada: {
    currency: "CAD",
    states: {
      Ontario: ["Toronto", "Ottawa"],
      Quebec: ["Montreal", "Quebec City"],
    },
  },
};

const Index = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const handleCountryChange = (event) => {
    const country = event.target.value;
    setSelectedCountry(country);
    setStates(Object.keys(countryData[country].states));
    setSelectedState("");
    setCities([]);
  };

  const handleStateChange = (event) => {
    const state = event.target.value;
    setSelectedState(state);
    setCities(countryData[selectedCountry].states[state]);
  };

  return (
    <Container centerContent>
      <VStack spacing={4} marginTop="24px">
        <Heading>Select Country, State, and City</Heading>

        <Box>
          <Text mb="8px">Country:</Text>
          <Select placeholder="Select country" onChange={handleCountryChange}>
            {Object.keys(countryData).map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </Select>
          {selectedCountry && <Text mt="8px">Currency: {countryData[selectedCountry].currency}</Text>}
        </Box>

        <Box>
          <Text mb="8px">State:</Text>
          <Select placeholder="Select state" onChange={handleStateChange} isDisabled={!selectedCountry}>
            {states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </Select>
        </Box>

        <Box>
          <Text mb="8px">City:</Text>
          <Select placeholder="Select city" isDisabled={!selectedState}>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </Select>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
