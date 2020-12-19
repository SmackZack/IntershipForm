import { MDBBtn } from "mdbreact";
import React from "react";
import ReactExport from "react-export-excel";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;



class Download extends React.Component {
    render() {
        const dataSet1 = JSON.parse(localStorage.getItem('data'));
        return (
            <ExcelFile element={<MDBBtn size="lg" color="blue">Download Data</MDBBtn>}>
                <ExcelSheet data={dataSet1} name="InternShip Data">
                    <ExcelColumn label="Name" value="firstName" />
                    <ExcelColumn label="Email" value="email" />
                    <ExcelColumn label="Linked In Profile" value="linkedin" />
                    <ExcelColumn label="Number" value="number" />
                    <ExcelColumn label="Skills" value="skill" />
                    <ExcelColumn label="Experience" value="experience" />
                    <ExcelColumn label="Country" value="country" />
                    <ExcelColumn label="About" value="about" />
                </ExcelSheet>
            </ExcelFile>
        );
    }
}

export default Download;