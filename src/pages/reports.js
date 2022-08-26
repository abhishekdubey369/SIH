import React from 'react';
import { PDFReader } from 'reactjs-pdf-reader';
import pdf from '../assets/PMAY2022.pdf';

function reports(){
  return (
    <div style={{overflow:'scroll',height:600}}>
            <PDFReader url={pdf} showAllPage='true'/>
           </div>
  )
}

export default reports;
