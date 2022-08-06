import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';


export default function CourseTable(props) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Number</TableCell>
            <TableCell>Course Name</TableCell>
            <TableCell>Course Content</TableCell>
            <TableCell>Course Location</TableCell>
            <TableCell>Teacher</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.courses.map((course,index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {index + 1}
              </TableCell>
              <TableCell>{course.courseName}</TableCell>
              <TableCell>{course.courseContent}</TableCell>
              <TableCell>{course.courseLocation}</TableCell>
              <TableCell>{course.teacherId}</TableCell>
              <TableCell><Button variant="contained" 
                                 color = {props.buttonColor} 
                                 onClick = {() => props.handleButtonOnClick(course.courseName)}>
                                 {props.buttonText}
                                 </Button>
                                 </TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
