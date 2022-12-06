import React, { useEffect, useState } from "react";
import "./App.css";
import { Box, Button, Grid, Typography, useTheme } from "@mui/material";
import QuotesTable from "./quotes-table/QuotesTable";
import DisplayQuote from "./display-quote/DisplayQuote";
import AcUnitIcon from "@mui/icons-material/AcUnit";

function App() {
  // const quotesUrl = "https://api.themotivate365.com/stoic-quote"; //this works, has author and wuote, but object
  //https://pprathameshmore.github.io/QuoteGarden/ check this
  //https://github.com/public-apis/public-apis#index check link
  //https://github.com/tlcheah2/stoic-quote-lambda-public-api check this
  //https://free-apis.github.io/#/categories/Personality this too
  const theme = useTheme();
  const [selectedRandomQuote, setSelectedRandomQuote] = useState(false);

  const quoteUrl =
    "https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand";

  const [quotesData, setQuotesData] = useState<any[]>([]);

  const fetchQuotes = async () => {
    try {
      const response = await fetch(quoteUrl);
      const data = await response.json();
      setQuotesData(data);
    } catch (error) {
      console.log("Error");
    }
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  return (
    <Box p={5} sx={{ backgroundColor: theme.palette.grey.A200 }}>
      <Box display="flex" alignItems="center" mb={3}>
        <Typography variant="subtitle1" sx={{ fontWeight: "bold" }} mr={1}>
          Coding challenge by Mozok GmbH
        </Typography>
        <AcUnitIcon />
      </Box>

      {selectedRandomQuote ? (
        <Box>
          <Button
            variant="contained"
            onClick={() => setSelectedRandomQuote(false)}
          >
            Go Back
          </Button>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Grid item>
              <DisplayQuote
                quotesData={
                  quotesData[Math.floor(Math.random() * quotesData.length)]
                }
              />
            </Grid>
            <Grid item>
              <Button variant="contained" onClick={() => fetchQuotes()}>
                Show a different quote
              </Button>
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
          <QuotesTable quotesData={quotesData} />
          <Button
            variant="contained"
            onClick={() => {
              setSelectedRandomQuote(true);
            }}
          >
            Show a random quote
          </Button>
        </Box>
      )}
    </Box>
  );
}

export default App;
