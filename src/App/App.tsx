import React, { useEffect, useState } from "react";
import "./App.css";
import { Box, Button, Grid, Typography, useTheme } from "@mui/material";
import QuotesTable from "./quotes-table/QuotesTable";
import DisplayQuote from "./display-quote/DisplayQuote";
import { AcUnit, ChevronRight, ChevronLeft } from "@mui/icons-material";

function App() {
  const theme = useTheme();
  const [selectedRandomQuotes, setSelectedRandomQuotes] = useState(false);
  const [loading, setLoading] = useState(true);

  const quoteUrl =
    "https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand";

  const [quotesData, setQuotesData] = useState<any[]>([]);

  const fetchQuotes = async () => {
    try {
      const response = await fetch(quoteUrl);
      const data = await response.json();
      setQuotesData(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  return (
    <Box p={5} sx={{ backgroundColor: theme.palette.grey.A200 }}>
      <Box display="flex" alignItems="center" mb={3}>
        <Typography
          variant="subtitle1"
          sx={{ fontWeight: "bold", fontFamily: "Brush Script MT, cursive" }}
          mr={1}
        >
          Coding challenge by Mozok GmbH
        </Typography>
        <AcUnit />
      </Box>

      {selectedRandomQuotes ? (
        <Box>
          <Button
            variant="contained"
            onClick={() => {
              setSelectedRandomQuotes(false);
              setLoading(false);
            }}
            startIcon={<ChevronLeft />}
          >
            Back
          </Button>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Grid item>
              <Typography
                variant="h5"
                textAlign="center"
                sx={{ fontFamily: "Brush Script MT, cursive" }}
              >
                Random Quotes
              </Typography>
              <DisplayQuote
                quotesData={
                  quotesData[Math.floor(Math.random() * quotesData.length)]
                }
                fetchQuotes={() => fetchQuotes()}
              />
            </Grid>
          </Grid>
        </Box>
      ) : (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <QuotesTable quotesData={quotesData} loading={loading} />
          <Button
            variant="contained"
            endIcon={<ChevronRight />}
            onClick={() => {
              setSelectedRandomQuotes(true);
              setLoading(true);
            }}
          >
            Quotes
          </Button>
        </Box>
      )}
    </Box>
  );
}

export default App;
