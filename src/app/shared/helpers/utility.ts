export function unid(): string {
  return "id" + Math.random().toString(16).slice(2);
}

export const PRINTSTYLE = `<style>
          @media print {
            * {
              margin: 5px 0 0 0;
              padding: 0;
              font-family: 'Cairo', sans-serif;
            }

            @page {
              width: 21cm;
            }

            body,
            #pill,
            #pill2 {
              width: 21cm ;
              margin: .3cm 0cm 0cm .4cm;
              margin-top: 0.3cm;
              margin-left: 0.5cm;
              color: black;
              background-color: white;
              border-color: black !important;
            }

            #pill,
            #pill2 {
              width: 21cm;
              padding: 0.3cm 0.1cm 0 0.4cm;
              margin-right: 0in;
              display: block;
              overflow: hidden;
              font-size: 15pt;
              color: black;
              border-color: black !important;
              background-color: white;
            }


            .page-break {
              clear: left;
              display: block;
              page-break-after: always;
            }

            #pill,
            #pill2 {
  font-size: 1rem;
  margin: 3cm !important;
}
.logo {
  // margin: 0 auto;
  max-width: 100px;
  text-align: center;
}
img {
  width: 100%;
}
.details {
  display: flex;
  justify-content: space-between;

}
.company p{
  margin-bottom: 0.3rem;
}
.title {
  color: red;
}
.invoice {
  font-size: 2rem;
  text-align: center;
  color: red;
}

.client-details {
  display: flex;
  justify-content: space-between;
}

.hr {
  margin: 1rem 0;
}

table {
  width: 100%;
  text-align: center;
}
th {
  border: 2px solid black;
  padding: 1rem;
  background-color: red;
  color: white;
  print-color-adjust: exact;
}
td {
  border: 2px solid black;
}
.total td {
  border: none;
}

          }
          </style>`;


export const PRINTHEAD = `<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Cairo:wght@500&display=swap" rel="stylesheet">`



export const PrintReportStyle = `<style>
          @media print {
            * {
              margin: 5px 0 0 0;
              padding: 0;
              font-family: 'Cairo', sans-serif;
            }

            #myPill,
            #myPill2,
            #printTags{
              display: block;
            }

            table {
              border-collapse: collapse;
              border-spacing: 0;
              line-height: 10px;
              font-size: 11pt;
              color: black !important;
              margin: 10px 0
              width: 100%;
            }

            table tbody td{
              padding: 5px 10px
            }

            @page {
              margin: 0cm 0cm 0cm 0cm;
              width: 7.9cm;
            }

            body,
            #printTags,
            #myPill,
            #myPill2 {
              width: 7.9cm ;
              margin: .3cm 0cm 0cm .5cm;
              margin-top: 0.3cm;
              margin-left: 0.5cm;
              color: black;
              background-color: white;
              border-color: black !important;
            }

            #printTags,
            #myPill,
            #myPill2,
            .printTags {
              width: 7.9cm;
              padding: 0.3cm 0.1cm 0 0.5cm;
              margin-right: 0in;
              display: block;
              overflow: hidden;
              font-size: 15pt;
              color: black;
              border-color: black !important;
              background-color: white;
            }

            #myPill .div-center{
              display: grid;
              grid-template-columns: 1fr;
              justify-self: center;
              width: 100%;
            }

            .page-break {
              clear: left;
              display: block;
              page-break-after: always;
            }

            #printTags {
              display:flex;
              justify-content:center;
              align-items:center;

            }

            #printTags h2{
              margin: 30px auto;
              text-align-center;
            }

          }
          </style>
          `
