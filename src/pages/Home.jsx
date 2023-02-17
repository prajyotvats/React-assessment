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
} from "@chakra-ui/react";
import "../components/Home.css";
import axios from "axios";
import UserCard from "../components/UserCard";
import { BiSearchAlt2 } from "react-icons/bi";
import { AiOutlineFilter } from "react-icons/ai";

const Home = () => {
  const [data, setdata] = useState([]);
  const [page, setpage] = useState(1);
  const [skip, setskip] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    const url = `https://dummyjson.com/users?skip=${skip}&limit=5`;
    axios.get(url).then(({ data }) => {
      setdata(data.users);
    });
  }, [skip]);

  const handleIncrement = () => {
    setpage((page) => page + 1);
    setskip(() => 5 * page);
  };
  const handleDecrement = () => {
    if (page > 1) {
      setpage((page) => page - 1);
    }

    setskip(() => 10 * page);
  };
  const handleLogout = () => {
    localStorage.removeItem("loggedin");
    navigate("/login");
  };
  console.log(page);

  console.log("data", data);
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
            <Button onClick={handleLogout}>Log Out</Button>
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
              <Tr>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Gender</Th>
                <Th>More</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.length &&
                data.map((el) => (
                  <Tr key={el.id} className="tr">
                    <Td className="td1">
                      <img src={el.image} alt="image" width={"50px"} />
                      <span>
                        {el.firstName} {el.lastName}
                      </span>
                    </Td>
                    <Td>{el.email}</Td>
                    <Td>{el.gender}</Td>
                    <Td>
                      <UserCard data={el} />
                    </Td>
                  </Tr>
                ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
      <br />
      <Box>
        <Button onClick={handleDecrement} disabled={page === 1}>
          Prev
        </Button>
        <span>{page}</span>
        <Button onClick={handleIncrement}>Next</Button>
      </Box>
    </>
  );
};

export default Home;
