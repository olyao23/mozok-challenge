import { Box, Grid, Paper, Typography, useTheme } from "@mui/material";

const DisplayQuote = (props: any) => {
  const theme = useTheme();
  const quote = props.quotesData.content.rendered;
  const author = props.quotesData.title.rendered;
  const changedQuoteStyle = quote.substring(3, quote.length - 5);

  return (
    <Grid container item justifyContent="center" alignItems="center">
      <Paper
        sx={{
          width: "30em",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "3em",
          margin: "4em 0",
          backgroundColor: theme.palette.grey.A100,
        }}
      >
        <Box>
          <Typography variant="subtitle2" sx={{ fontStyle: "italic" }}>
            {changedQuoteStyle}
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{ fontWeight: "bold", marginTop: "1em" }}
          >
            {author}
          </Typography>
        </Box>
      </Paper>
    </Grid>
  );
};

export default DisplayQuote;
