import Link from "next/link";
import Image from "next/image";
import { Box, Flex, Text, Avatar } from "@chakra-ui/react";
import millify from "millify";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import defaultImage from "*.jpg";

export enum property {
  coverPhoto = "coverPhoto",
  price = "price",
  rentFrequency = "rentFrequency",
  rooms = "rooms",
  score = "score",
  title = "title",
  baths = "baths",
  area = "area",
  agency = "agency",
  isVerified = "isVerified",
  externalID = "externalID",
}

const Property = ({
  property: {
    coverPhoto,
    price,
    rentFrequency,
    rooms,
    score,
    title,
    baths,
    area,
    agency,
    isVerified,
    externalID,
  },
}: property) => (
  <Link href={"/"}>
    <Flex
      flexWrap={"wrap"}
      w={"420px"}
      p={5}
      paddingTop={"0"}
      justifyContent={"flex-start"}
      cursor={"pointer"}
    >
      <Box>
        <Image
          src={coverPhoto ? coverPhoto.url : defaultImage}
          width={400}
          height={260}
          alt="house img not currently available"
        />
      </Box>
      <Box w={"full"}>
        <Flex
          paddingTop={"2"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Flex alignItems={"center"}>
            <Box paddingRight={"3"} color={"green.400"}>
              {isVerified && <GoVerified />}
            </Box>
            <Text fontWeight={"bold"} fontSize={"lg"}>
              AED {millify(price)}
              {rentFrequency && `/${rentFrequency}`}
            </Text>
          </Flex>
          <Box>
            <Avatar size="md" src={agency?.logo?.url} />
          </Box>
        </Flex>
        <Flex
          alignItems={"center"}
          p="1"
          justifyContent={"space-between"}
          w="250px"
          color="teal.400"
        >
          {rooms} <FaBed /> || {baths} <FaBath /> || {millify(area)} sq.ft
          <BsGridFill />
        </Flex>
        <Text fontSize={"lg"}>
          {title.length > 30 ? `${title.substr(0, 30)}...` : title}
        </Text>
      </Box>
    </Flex>
  </Link>
);

export default Property;
