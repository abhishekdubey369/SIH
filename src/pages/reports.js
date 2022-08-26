import React from 'react';
import { PDFReader } from 'reactjs-pdf-reader';
import pdf from '../assets/PMAY2022.pdf';
import pdf2 from '../assets/bag3.pdf';
import pdf3 from '../assets/PMAY20.pdf';

function reports(){
  return (
    <div style={{overflow:'scroll',height:600}}>
            <PDFReader url={pdf} showAllPage='true'/>
            <PDFReader url={pdf2} showAllPage='true'/>
            <PDFReader url={pdf3} showAllPage='true'/>
           </div>
  )
}

export default reports;
