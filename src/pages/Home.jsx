import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
  Box,
  Button,
  Flex,
  Spacer,
  Heading,
  Text,
  InputGroup,
  InputLeftElement,
  Input,
  Image,
} from "@chakra-ui/react";
import "../components/Home.css";
import axios from "axios";
import UserCard from "../components/UserCard";
import { BiSearchAlt2 } from "react-icons/bi";
import { AiOutlineFilter } from "react-icons/ai";
import { FiMoreVertical } from "react-icons/fi";

const Home = () => {
  const [data, setdata] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const url = `https://dummyjson.com/users?skip=0&limit=5`;
    axios.get(url).then(({ data }) => {
      setdata(data.users);
    });
  }, []);

  function handleLogout() {
    localStorage.removeItem("loggedin", true);
    navigate("/login");
  }

  return (
    <>
      <Box className="container">
        <Flex mt={"15px"}>
          <Box p="4" color={"gray.400"}>
            <Heading size={"lg"}>Users</Heading>
            <Text>Here are all the users for this project.</Text>
          </Box>
          <Spacer />
          <Box p="4" color="purple.300">
            <Button>+ Add User</Button>
          </Box>
        </Flex>
        <br />

        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<BiSearchAlt2 color="gray.300" />}
          />
          <Input
            type="text"
            placeholder="Search"
            w={"350px"}
            borderRadius="20px"
          />
          {"  "}
          <Flex alignItems={"center"}>
            <AiOutlineFilter /> Filters
          </Flex>
        </InputGroup>

        <br />
        <TableContainer>
          <Table>
            <Thead m={"auto"}>
              <Tr className="tr-main" borderRadius={"12px"}>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Gender</Th>
                <Th></Th>
              </Tr>
              <br />
            </Thead>
            <Tbody>
              {data.length > 0 ? (
                data.map((el) => (
                  <>
                    <Tr key={el.id} className="tr">
                      <Td className="td1">
                        <Image
                          src={el.image}
                          alt="image"
                          width={"50px"}
                          borderRadius={"50%"}
                          border={"2px solid gray"}
                        />
                        {/* <span>
                        {el.firstName} {el.lastName}
                      </span> */}
                        <UserCard data={el} />
                      </Td>
                      <Td>{el.email}</Td>
                      <Td>{el.gender}</Td>
                      <Td>
                        {/* <UserCard data={el} /> */}
                        <FiMoreVertical />
                      </Td>
                    </Tr>
                    <br />
                  </>
                ))
              ) : (
                <>
                  Data not Found
                  <br />
                </>
              )}
            </Tbody>
          </Table>
        </TableContainer>
        <Flex justifyContent={"space-between"}>
          <Text color={"gray.400"}>
            Showing 1-{data.length} of {data.length}{" "}
          </Text>
          <Button onClick={handleLogout}>Logout</Button>
        </Flex>
      </Box>
      <br />
    </>
  );
};

export default Home;
