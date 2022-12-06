import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  useTheme,
} from "@mui/material";

const QuotesTable = (props: any) => {
  const theme = useTheme();

  const rows = props.quotesData ? (
    props.quotesData.map((row: any) => {
      const quote = row.content.rendered;
      const changedQuoteStyle = row.content.rendered.substring(
        3,
        quote.length - 5
      );

      return (
        <TableRow
          key={row.id}
          sx={{ backgroundColor: theme.palette.grey.A100 }}
        >
          <TableCell component="th" scope="row">
            <Typography variant="subtitle2">{row.id}</Typography>
          </TableCell>
          <TableCell align="right">
            <Typography variant="subtitle2" sx={{ fontStyle: "italic" }}>
              {changedQuoteStyle}
            </Typography>
          </TableCell>
          <TableCell align="right">
            <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
              {row.title.rendered}
            </Typography>
          </TableCell>
          <TableCell align="right">
            <Typography variant="subtitle2">"Gender, to do"</Typography>
          </TableCell>
        </TableRow>
      );
    })
  ) : (
    <TableRow></TableRow>
  );

  return (
    <Table aria-label="simple table" sx={{ margin: "4em 0" }}>
      <TableHead>
        <TableRow
          sx={{
            backgroundColor: theme.palette.secondary.light,
          }}
        >
          <TableCell align="right">
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: "bold", color: theme.palette.common.white }}
            >
              ID
            </Typography>
          </TableCell>
          <TableCell align="right">
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: "bold", color: theme.palette.common.white }}
            >
              Quote
            </Typography>
          </TableCell>
          <TableCell align="right">
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: "bold", color: theme.palette.common.white }}
            >
              Author
            </Typography>
          </TableCell>
          <TableCell align="right">
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: "bold", color: theme.palette.common.white }}
            >
              Gender
            </Typography>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>{rows}</TableBody>
    </Table>
  );
};

export default QuotesTable;
