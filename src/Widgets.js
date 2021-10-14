import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const Widgets = () => {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>

      {newsArticle("Technology Trends: The Reality of Virtual Reality ", "Top news - 899 reader")}
      {newsArticle("Blockchain in Rise", "Top news - 445 reader")}
      {newsArticle("Bitcoin Breaks Record", "Crypto - 1123 reader")}
      {newsArticle("Selenium Demand Hits High", "Testing - 8000 reader")}
      {newsArticle("Apple launches new products", "Apple - 611 reader")}
    </div>
  );
};

export default Widgets;