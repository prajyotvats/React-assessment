import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Box,
  useDisclosure,
  Button,
  Image,
  Stack,
  Text,
  Heading,
  Flex,
} from "@chakra-ui/react";
import { FiMoreVertical } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { GoGraph } from "react-icons/go";

const UserCard = ({ data }) => {
  // console.log("data", data);
  const [size, setSize] = React.useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = (newSize) => {
    setSize(newSize);
    onOpen();
  };

  return (
    <Box>
      <Text
        onClick={() => handleClick("sm")}
        key={"sm"}
        m={4}
        cursor={"pointer"}
      >
        <span>
          {data.firstName} {data.lastName}
        </span>
      </Text>

      <Drawer onClose={onClose} isOpen={isOpen} size={size}>
        <DrawerOverlay />
        <DrawerContent
          borderTopLeftRadius={"15px"}
          borderBottomLeftRadius={"15px"}
        >
          <DrawerCloseButton fontSize={"20px"}>
            <FiMoreVertical />
          </DrawerCloseButton>
          <DrawerHeader>User Details</DrawerHeader>
          <DrawerBody>
            <Box>
              <Flex gap={"50px"}>
                <Box>
                  <Image
                    src={data.image}
                    alt="image"
                    w="100px"
                    borderRadius={"50%"}
                    border={"2px solid gray"}
                  />
                </Box>
                <Box>
                  <Stack>
                    <Heading size={"md"}>
                      {data.firstName} {data.lastName}
                    </Heading>
                    <Text>User id: {data.ein}</Text>
                    <Button colorScheme="whatsapp" borderRadius={"20px"}>
                      Active
                    </Button>
                  </Stack>
                </Box>
              </Flex>
            </Box>
            <br />
            <hr />
            <br />
            <Box>
              <Flex gap={"35px"} alignItems="center">
                <Heading size={"lg"}>
                  <CgProfile />
                </Heading>
                <Heading size={"xm"}>Basic & account details</Heading>
              </Flex>
              <br />
              <Heading size={"sm"}>
                {data.firstName} {data.lastName}
              </Heading>
              <Text>Full Name</Text>
              <br />
              <Heading size={"sm"}>{data.company?.title}</Heading>
              <Text>User Roles</Text>
            </Box>

            <br />
            <hr />
            <br />
            <Box>
              <Flex gap={"35px"} alignItems="center">
                <Heading
                  size={"lg"}
                  // bgColor={"lightgray"} borderRadius={"50%"}
                >
                  <GoGraph />
                </Heading>
                <Heading size={"xm"}>User data</Heading>
              </Flex>
              <br />
              <Heading size={"sm"}>{data.birthDate}</Heading>
              <Text>Birth Date</Text>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default UserCard;
