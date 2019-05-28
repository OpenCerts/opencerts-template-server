const { format } = require("date-fns");
const backgroundImg = require("./resources")
const React = require("react")
const opencerts = require("@govtechsg/open-certificate")

const Template = ({
  certificate
}) => React.createElement("div", {
  className: "p-2",
  style: {
    backgroundImage: `url('${backgroundImg}')`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    border: "10px solid #787878"
  }
}, React.createElement("div", {
  className: "p-2",
  style: {
    border: "5px solid #787878"
  }
}, React.createElement("div", {
  className: "my-5 m-lg-5 text-center"
}, React.createElement("img", {
  src: "/static/images/opencertslogo.svg",
  className: "w-100",
  style: {
    maxWidth: 600
  }
})), React.createElement("div", {
  className: "h5 mb-4 mb-lg-5 d-flex justify-content-center"
}, React.createElement("i", null, "This is to certify that")), React.createElement("div", {
  className: "h3 mb-4 mb-lg-5 d-flex justify-content-center"
}, React.createElement("b", null, certificate.recipient.name)), React.createElement("div", {
  className: "h5 mb-4 mb-lg-5 d-flex justify-content-center"
}, React.createElement("i", null, "has successfully completed the")), React.createElement("div", {
  className: "h1 mb-4 mb-lg-5 d-flex justify-content-center"
}, "Certified OpenCerts Associate"), React.createElement("div", {
  className: "h5 mb-4 mb-lg-5 d-flex justify-content-center"
}, React.createElement("i", null, "certification through training administered by")), React.createElement("div", {
  className: "d-flex justify-content-between m-3 p-2 mb-5"
}, React.createElement("div", {
  className: "col-1"
}), React.createElement("div", {
  className: "col-5 my-5"
}, React.createElement("img", {
  className: "w-100",
  src: "/static/images/logo-govtech.png"
})), React.createElement("div", {
  className: "col-2"
}), React.createElement("div", {
  className: "col-4 text-center"
}, React.createElement("img", {
  className: "w-100",
  src: certificate.additionalData.signature
}), React.createElement("hr", {
  className: "m-1"
}), React.createElement("div", null, React.createElement("b", null, certificate.additionalData.signatory)), React.createElement("div", null, certificate.additionalData.signatoryPosition))), React.createElement("div", {
  className: "d-flex flex-row-reverse my-5"
}, "Dated ", format(certificate.issuedOn, "DD/MM/YYYY"))));


const express = require('express')
const app = express()
const port = 3000
var bodyParser = require('body-parser')
var ReactDOMServer = require('react-dom/server');
const cert = opencerts.certificateData(require("./1.json"))

const renderedCert = ReactDOMServer.renderToString(Template({certificate: cert}))
app.get('/', (req, res) => res.send(renderedCert))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))