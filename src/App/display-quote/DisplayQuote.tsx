import { Grid, IconButton, Paper, Typography, useTheme } from "@mui/material";
import { Refresh } from "@mui/icons-material";
import { MouseEventHandler } from "react";

const DisplayQuote = (props: {
  quotesData: { content: { rendered: any }; title: { rendered: any } };
  fetchQuotes: MouseEventHandler<HTMLButtonElement> | undefined;
}) => {
  const theme = useTheme();
  const initialQuote = props.quotesData.content.rendered;
  const quote = initialQuote.substring(3, initialQuote.length - 5);
  const author = `- ${props.quotesData.title.rendered}`;

  return (
    <Grid container item justifyContent="center" alignItems="center">
      <Paper
        sx={{
          width: "50em",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "2em 2em 1em 2em",
          margin: "4em 0",
          backgroundColor: theme.palette.grey.A100,
        }}
      >
        <Grid container flexDirection="column">
          <Grid
            item
            container
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Typography
              variant="subtitle2"
              textAlign="center"
              sx={{ fontFamily: "Brush Script MT, cursive", fontSize: "1.4em" }}
            >
              {quote}
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{
                fontWeight: "bold",
                marginTop: "1em",
                fontFamily: "Brush Script MT, cursive",
                fontSize: "1.1em",
              }}
            >
              {author}
            </Typography>
          </Grid>

          <Grid item textAlign="right">
            <IconButton
              color="primary"
              onClick={props.fetchQuotes}
              sx={{ textAlign: "right" }}
            >
              <Refresh />
            </IconButton>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default DisplayQuote;
