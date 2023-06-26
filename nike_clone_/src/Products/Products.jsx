import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Checkbox,
  Flex,
  Grid,
  Heading,
  Input,
  Select,
  Text,
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
  sortHighToLow,
  sortLowToHigh,
} from "../Redux/AppReducer/Products/action";

import { useLocation, useParams, useSearchParams } from "react-router-dom";
import ProductDisplayBox from "../ProductsDisplayBox/ProductDisplayBox";

const Products = () => {
  const [filter, setFilter] = useState(true);

  const dispatch = useDispatch();
  const data = useSelector((store) => store.AppReducer.products);
  const loading = useSelector((store)=> store.AppReducer.products.isloading )
  const [order, setOrder] = useState("asc");
  const [searchParams, setSearchParams] = useSearchParams();
  const initcategoryParams = searchParams.getAll("category");
  const initialBrandParams = searchParams.getAll("brand");
  const [brand, setBrand] = useState(initialBrandParams || []);
  const [category, setCategory] = useState(initcategoryParams || []);
  const initialPage = searchParams.get("page");
  const location = useLocation();
  const initialRatingParams = searchParams.getAll("rating");
  const [rating, setRating] = useState(initialRatingParams || []);
  const [page, setPage] = useState(initialPage || 1);
  let pageNo = searchParams.get("page");
  // const params= useParams()
  // console.log(params)
  //console.log(location.pathname)

  useEffect(() => {
    if (location.pathname == "/men") {
      let q = {
        params: {
          category: "men",
        },
      };
      dispatch(getfilterData(q));
    } else if (location.pathname == "/women") {
      let q = {
        params: {
          category: "women",
        },
      };
      dispatch(getfilterData(q));
    } else if (location.pathname == "/kids") {
      let q = {
        params: {
          category: "kids",
        },
      };
      dispatch(getfilterData(q));
    }
    else{
      dispatch(getData())
    }
  }, [location.pathname]);

  const handleSortBy = (e) => {
    setOrder(e.target.value);
  };

  const handleCategory = (e) => {
    let value = e.target.value;
    // console.log(value)
    let newCategory = [...category];

    if (category.includes(value)) {
      newCategory.splice(newCategory.indexOf(value), 1);
    } else {
      newCategory.push(value);
    }

    setCategory(newCategory);
  };

  const handlebyBrand = (e) => {
    let value = e.target.value;

    let newBrand = [...brand];
    if (brand.includes(value)) {
      newBrand.splice(newBrand.indexOf(value), 1);
    } else {
      newBrand.push(value);
    }
    setBrand(newBrand);
    //console.log(newBrand)
  };

  const handleByRating = (e) => {
    let value = e.target.value;
    //console.log(value)

    let newRating = [...rating];
    if (rating.includes(value)) {
      newRating.splice(newRating.indexOf(value), 1);
    } else {
      newRating.push(value);
    }
    // console.log(newRating);
    setRating(newRating);
  };

  useEffect(() => {
    let params = {};
    if (category || brand || page || rating) {
      category && (params.category = category);
      brand && (params.brand = brand);
      rating && (params.rating = rating);
      // console.log(category)
      // console.log(params.category)
    }
    // console.log(params);
    // console.log(pageNo)
    setSearchParams(params);

    //  console.log(category)
    //  console.log(searchParams)

    //dispatch(getData(category));
  }, [setSearchParams, category, brand, rating]);

  // useEffect(()=> {
  //   dispatch(getfilterData(page))

  // },[page,dispatch,category])
  useEffect(() => {
    // console.log(location.search);
    // console.log(brand);

    if (location || data.length === 0) {
      let q = {
        params: {
          category: searchParams.getAll("category"),
          brand: searchParams.getAll("brand"),
          rating_gte: searchParams.getAll("rating"),
          // _sort : sort && "price",
          // _order: sort,
          _page: page,
          _limit: 9,
        },
      };
      //console.log(searchParams.getAll("brand"))
      dispatch(getData(q));
    }
  }, [location.search, page, order]);

  if (order == "asc") {
    // console.log(order)
    //console.log(order)
    data.sort((a, b) => a.rating - b.rating);
  } else if (order == "dsc") {
    data.sort((a, b) => b.rating - a.rating);
  } else if (order == "LTH") {
    console.log(order);
    data.sort((a, b) => a.price - b.price);
  } else if (order == "HTL") {
    data.sort((a, b) => b.price - a.price);
  }

  return (
    <Box width={"95%"} margin={"auto"}>
      {/* filter div */}
      <Box>
        <Flex className="flex-top">
          <Box>
            <Text as='b'>
            {location.pathname == "/men"
              ? "MEN"
              : location.pathname == "/women"
              ? "WOMEN"
              : location.pathname == "/kids"
              ? "KIDS"
           
              : "ALL PRODUCTS"}
              </Text>
          </Box>
          <Flex gap={"0.5rem"} className="flex-2">
            <Button color={'white'} variant={"ghost"} onClick={() => setFilter(!filter)}>
              <FilterAltIcon />
              {filter ? "Hide Filter" : "Show Filter"}
            </Button>

            <Select
              border="none"
              size="md"
              onChange={handleSortBy}
              fontWeight="semibold"
              placeholder="SORT BY"
            >
              <option
                style={{ backgroundColor: "black", color: "white" }}
                value="asc"
              >
                LOW TO HIGH RATING★
              </option>
              <option
                style={{ backgroundColor: "black", color: "white" }}
                value="dsc"
              >
                HIGH TO LOW RATING★
              </option>
              <option
                style={{ backgroundColor: "black", color: "white" }}
                value="LTH"
              >
                LOW TO HIGH PRICE
              </option>
              <option
                style={{ backgroundColor: "black", color: "white" }}
                value="HTL"
              >
                HIGH TO LOW PRICE
              </option>
            </Select>
          </Flex>
        </Flex>
      </Box>
     {loading && <Heading> Loading.....</Heading>}
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
                    <Checkbox
                      size="lg"
                      value="men"
                      onChange={handleCategory}
                      defaultChecked={category.includes("men")}
                    />
                    <label>Men</label>
                  </Box>
                  <Box>
                    <Checkbox
                      onChange={handleCategory}
                      defaultChecked={category.includes("women")}
                      value="women"
                      type="checkbox"
                    />
                    <label>Women</label>
                  </Box>
                  <Box>
                    <Checkbox
                      onChange={handleCategory}
                      defaultChecked={category.includes("kids")}
                      value="kids"
                      type="checkbox"
                    />
                    <label>Kids</label>
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
                    <Checkbox
                      size="lg"
                      value="Nike"
                      onChange={handlebyBrand}
                      defaultChecked={category.includes("Nike")}
                    />
                    <label>Nike</label>
                  </Box>
                  <Box>
                    <Checkbox
                      onChange={handlebyBrand}
                      defaultChecked={category.includes("Jordan")}
                      value="Jordan"
                    />
                    <label>Jordan</label>
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
                    <Checkbox
                      size="lg"
                      value="3"
                      onChange={handleByRating}
                      defaultChecked={rating.includes("3Above")}
                    />
                    <label>3 ★ & above</label>
                  </Box>
                  <Box>
                    <Checkbox
                      onChange={handleByRating}
                      defaultChecked={rating.includes("4Above")}
                      value="4"
                    />
                    <label>4 ★ & above</label>
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