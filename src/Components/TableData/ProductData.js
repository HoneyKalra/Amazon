import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { technicalInformaton } from "../../Shared/Constants";
import { productCategory } from "../../Shared/Constants";
/*id: 2,
cameraDescription: "Rear Camera (50MP+2MP+2MP) | 16MP Front Camera",
screenSize: "6.58 inches",
screenType: "LCD",
battery: 5000,
ram: "6GB",
processor: "Snapdragon 695 5G",
operatingSystem: "Funtouch OS 12 Based On Android 12",
itemWeight: "186 grams",
gps: true,
manufacturer: "Vivo",
specialFeatures: `Fast Charging Support, Fingerprint Sensor, Hybrid Dual SIM, GPS, Video Player, Music Player`,
},

{
id: 3,
cameraDescription: "Rear Camera (50MP+2MP+2MP) | 16MP Front Camera",
modelNumber: "TEDPA40-Blue",
processor: "Snapdragon 695 5G",
operatingSystem: "Funtouch OS 12 Based On Android 12",
itemWeight: "145 grams",
gps: true,
manufacturer: "Mivi",
specialFeatures: `Sweatproof, Fast Charging, Microphone Included`,
}*/

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableRow>
          <TableCell>Dessert (100g serving)</TableCell>
        </TableRow>

        <TableBody>
          {technicalInformaton.map((info) => (
            <TableRow
              key={info.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {info.operatingSystem ? info.operatingSystem : null}
                {info.ram ? info.ram : null}
                {info.modelNumber}
                {info.gps}
                {info.manufacturer}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
