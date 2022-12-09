import { useEffect, useState } from "react";
import { Box, Button, Grid, Typography, useTheme } from "@mui/material";
import QuotesTable from "./quotes-table/QuotesTable";
import DisplayQuote from "./display-quote/DisplayQuote";
import { AcUnit, ChevronRight, ChevronLeft } from "@mui/icons-material";
import axios from "axios";

function App() {
  const theme = useTheme();
  const [selectedRandomQuotes, setSelectedRandomQuotes] =
    useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [quotesData, setQuotesData] = useState<any[]>([]);
  const [ageEmojis, setAgeEmojis] = useState<any[]>([]);
  const quoteUrl =
    "https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand";

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

  const fetchAge = async () => {
    try {
      let authorsNames = quotesData.map((author: any) => {
        let authorNameSurname = author.title.rendered.split(" ");
        return authorNameSurname[0];
      });

      const agesPromises = authorsNames.map((name: string) =>
        axios.get(`https://api.genderize.io?name=${name}`)
      );

      const data = await Promise.all(agesPromises);

      const agesWithEmojis = data.map((item) => {
        return item.data.gender === "female" ? (
          <span role="img" aria-label="female">
            👩
          </span>
        ) : (
          <span role="img" aria-label="male">
            👱‍
          </span>
        );
      });

      setAgeEmojis(agesWithEmojis);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  useEffect(() => {
    fetchAge();
  }, [quotesData]);

  return (
    <Box
      p={5}
      sx={{ backgroundColor: theme.palette.grey.A200, height: "100%" }}
    >
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
                quotesDataItem={
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
          <QuotesTable
            quotesData={quotesData}
            loading={loading}
            ageEmojis={ageEmojis}
          />
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
