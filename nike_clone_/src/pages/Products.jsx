import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Input,
  Select,
  border,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import "./Product.css";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useDispatch, useSelector } from "react-redux";
import {
  getData,
  getfilterData,
  getfilterDataSortBy,
} from "../Redux/AppReducer/action";
import ProductDisplayBox from "./ProductDisplayBox";

const Products = () => {
  const [filter, setFilter] = useState(true);

  const dispatch = useDispatch();
  const data = useSelector((store) => store.AppReducer.products);
  // console.log(data);

  const [page, setPage] = useState(1);
  const [order, setOrder] = useState("asc");

  const handleSortBy = (e) => {
    setOrder(e.target.value);
  };

  useEffect(() => {
    dispatch(getfilterData(page, order));
  }, [dispatch, page]);

  return (
    <Box width={"95%"} margin={"auto"}>
      {/* filter div */}
      <Box>
        <Flex className="flex-top">
          <Box>New & Featured</Box>
          <Flex gap={"0.5rem"}>
            <Button variant={"ghost"} onClick={() => setFilter(!filter)}>
              <FilterAltIcon />
              {filter ? "Hide Filter" : "Show Filter"}
            </Button>

            <Select
              border="none"
              size="md"
              onChange={handleSortBy}
              fontWeight="semibold"
              placeholder="Sort By"
            >
              <option value="asc">LOW TO HIGH RATING★</option>
              <option value="dsc">HIGH TO LOW RATING★</option>
            </Select>
          </Flex>
        </Flex>
      </Box>

      {/* sidebar && main content div */}
      <Flex gap="0.5rem" className="media-query">
        {filter && (
          <Box className="sidebar">
            <Accordion allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Category
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Box>
                    <input type="checkbox" />
                    <label>Men</label>
                  </Box>
                  <Box>
                    <input type="checkbox" />
                    <label>Women</label>
                  </Box>
                  <Box>
                    <input type="checkbox" />
                    <label>Kids</label>
                  </Box>
                  <Box>
                    <Button>Apply</Button>
                  </Box>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Brand
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Box>
                    <input type="checkbox" />
                    <label>Nike</label>
                  </Box>
                  <Box>
                    <input type="checkbox" />
                    <label>Jordan</label>
                  </Box>
                  <Box>
                    <Button>Apply</Button>
                  </Box>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Price
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Box>
                    <input type="checkbox" />
                    <label>Low</label>
                  </Box>
                  <Box>
                    <input type="checkbox" />
                    <label>High</label>
                  </Box>
                  <Box>
                    <Button>Apply</Button>
                  </Box>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Rating
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Box>
                    <input type="checkbox" />
                    <label>★3 & above </label>
                  </Box>
                  <Box>
                    <input type="checkbox" />
                    <label>★4 & above</label>
                  </Box>
                  <Box>
                    <Button>Apply</Button>
                  </Box>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
        )}
        {/* products and all the things are listed here */}

        <Grid className="mainContent">
          {data.length > 0 &&
            data.map((item) => {
              return <ProductDisplayBox key={item.id} item={item} />;
            })}
        </Grid>
      </Flex>

      <Flex margin={"1rem"} gap={"1rem"} justifyContent={"center"}>
        <button
          style={{
            backgroundColor: "black",
            color: "white",
            borderRadius: "5px",
          }}
          disabled={page == 1}
          onClick={() => setPage(page - 1)}
        >
          Previous
        </button>
        <Button>{page}</Button>
        <button
          style={{
            backgroundColor: "black",
            color: "white",
            borderRadius: "5px",
          }}
          disabled={page == 4}
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </Flex>
    </Box>
  );
};

export default Products;
