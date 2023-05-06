import React from 'react';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { ImDownload, ImDownload3 } from 'react-icons/im';
import DocumentFileCard2 from '../DownloadCard/DocumentFileCard2';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const PDFGenerator = (props) => {
  const generatePDF = () => {
    console.log("dododo")
    const docDefinition = {
      content: [
        {
          text: "Teaching Copilot.com",
          style: 'header'
        },
        {
          text: props.content,
          style: 'body'
        }
      ],
      styles: {
        header: {
          fontSize: 22,
          bold: true,
          margin: [0, 0, 0, 20]
        },
        body: {
          fontSize: 12,
          margin: [0, 0, 0, 10]
        }
      }
    };

    pdfMake.createPdf(docDefinition).open();
  };

  return ( 
    <>
   { props.isItDownLoadLst?
    <button onClick={generatePDF}   style={{border:"none", background:"none"}}><DocumentFileCard2 title={" Lesson plan content... "}  className='fs-2 text-info pb-2 ' style={{float:"right"}}/> </button>:
       <ImDownload3 onClick={generatePDF} className='fs-2 text-info pb-2 ' style={{float:"right"}}/> }
       </>
  );
};

export default PDFGenerator;
