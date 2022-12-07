import {
  Box,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";

const QuotesTable = (props: { quotesData: any[]; loading: boolean }) => {
  const theme = useTheme();
  // const [authors, setAuthors] = useState([]);

  let authorsNames = props.quotesData.map((author: any) => {
    let authorNameSurname = author.title.rendered.split(" ");
    return authorNameSurname[0];
  });

  // const fetchAge = async (ageByNameUrl: RequestInfo | URL) => {
  //   try {
  //     const response = await fetch(ageByNameUrl);
  //     const data = await response.json();
  //     console.log(data);
  // console.log(data.age);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // for (let i = 0; i < authorsNames.length; i++) {
  //   let ageByNameUrl = `https://api.agify.io/${authorsNames[i]}`;
  //   console.log(authorsNames[i]);
  //   console.log(fetchAge(ageByNameUrl));
  // }

  // let ageByName = authorsNames.map((name) => {
  // let ageByNameUrl = `https://api.nationalize.io/${name}`;
  // fetchAge(ageByNameUrl);
  //   return 1;
  // });

  const rows = props.quotesData ? (
    props.quotesData.map((row: any) => {
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
                textDecoration: "underline",
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
              <span role="img" aria-label="woman">
                👱‍♀‍
              </span>
            </Box>
            {/*<Box>*/}
            {/*  <span role="img" aria-label="boy">*/}
            {/*    👱*/}
            {/*  </span>*/}
            {/*</Box>*/}
          </TableCell>
        </TableRow>
      );
    })
  ) : (
    <TableRow></TableRow>
  );

  // const [page, setPage] = useState(0);
  // const [rowsPerPage, setRowsPerPage] = useState(5);
  //
  // const handleChangePage = (
  //   event: React.MouseEvent<HTMLButtonElement> | null,
  //   newPage: number
  // ) => {
  //   setPage(newPage);
  // };
  //
  // const handleChangeRowsPerPage = (
  //   event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   setRowsPerPage(parseInt(event.target.value, 5));
  //   setPage(0);
  // };

  return (
    <Table aria-label="simple table" sx={{ marginBottom: "3em" }}>
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
      {/*<TablePagination*/}
      {/*  count={rows.length}*/}
      {/*  page={page}*/}
      {/*  rowsPerPage={rowsPerPage}*/}
      {/*  onPageChange={handleChangePage}*/}
      {/*  onRowsPerPageChange={handleChangeRowsPerPage}*/}
      {/*/>*/}
    </Table>
  );
};

export default QuotesTable;
