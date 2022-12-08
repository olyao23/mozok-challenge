import {
  Box,
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useTheme,
} from "@mui/material";

const QuotesTable = (props: {
  quotesData: any[];
  ageEmojis: any[];
  loading: boolean;
}) => {
  const theme = useTheme();

  const rows = props.quotesData ? (
    props.quotesData.map((row: any, index) => {
      const quote = row.content.rendered;
      const changedQuoteStyle = quote.substring(3, quote.length - 5);

      return (
        <TableRow
          key={row.id}
          sx={{ backgroundColor: theme.palette.grey.A100 }}
        >
          <TableCell align="left">
            <Typography
              variant="subtitle2"
              sx={{
                color: theme.palette.secondary.light,
                fontFamily: "Brush Script MT, cursive",
                fontSize: "1.1em",
              }}
            >
              {row.id}
            </Typography>
          </TableCell>
          <TableCell align="left">
            <Typography
              variant="subtitle2"
              sx={{
                fontFamily: "Brush Script MT, cursive",
                fontSize: "1.1em",
              }}
            >
              {changedQuoteStyle}
            </Typography>
          </TableCell>
          <TableCell align="left">
            <Typography
              variant="subtitle2"
              sx={{
                fontWeight: "bold",
                fontFamily: "Brush Script MT, cursive",
                fontSize: "1.1em",
              }}
            >
              {row.title.rendered}
            </Typography>
          </TableCell>
          <TableCell align="left">
            <Box textAlign="center" sx={{ fontSize: "1.5em" }}>
              {props.ageEmojis[index]}
            </Box>
          </TableCell>
        </TableRow>
      );
    })
  ) : (
    <TableRow></TableRow>
  );

  return (
    <TableContainer component={Paper} sx={{ marginBottom: "3em" }}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow
            sx={{
              backgroundColor: theme.palette.secondary.light,
            }}
          >
            <TableCell align="left">
              <Typography
                variant="subtitle2"
                sx={{
                  fontWeight: "bold",
                  fontFamily: "Brush Script MT, cursive",
                  fontSize: "1.2em",
                }}
              >
                ID
              </Typography>
            </TableCell>
            <TableCell align="left">
              <Typography
                variant="subtitle2"
                sx={{
                  fontWeight: "bold",
                  fontFamily: "Brush Script MT, cursive",
                  fontSize: "1.2em",
                }}
              >
                Quote
              </Typography>
            </TableCell>
            <TableCell align="left">
              <Typography
                variant="subtitle2"
                sx={{
                  fontWeight: "bold",
                  fontFamily: "Brush Script MT, cursive",
                  fontSize: "1.2em",
                }}
              >
                Author
              </Typography>
            </TableCell>
            <TableCell align="left">
              <Typography
                variant="subtitle2"
                sx={{
                  fontWeight: "bold",
                  fontFamily: "Brush Script MT, cursive",
                  fontSize: "1.2em",
                }}
              >
                Gender
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.loading ? (
            <TableRow>
              <TableCell align="center" colSpan={4}>
                <CircularProgress color="secondary" />
              </TableCell>
            </TableRow>
          ) : (
            rows
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default QuotesTable;
