import React from "react";
import Card from "../../components/main/Card";
import Arrays from "../../resources/docs/Arrays.json";
import Core from "../../resources/docs/Core.json";
import Binaries from "../../resources/docs/Binaries.json";
import Crypto from "../../resources/docs/Crypto.json";
import DataFormat from "../../resources/docs/DataFormat.json";
import Diff from "../../resources/docs/Diff.json";
import Mule from "../../resources/docs/Mule.json";
import Multipart from "../../resources/docs/Multipart.json";
import Tree from "../../resources/docs/Tree.json";
import URL from "../../resources/docs/URL.json";
import Values from "../../resources/docs/Values.json";
import String from "../../resources/docs/String.json";
import Numbers from "../../resources/docs/Numbers.json";
import Objects from "../../resources/docs/Objects.json";
import Footer from "../main/Footer";

const Main = ({ searchText, isCollapseToggle, setCollapseToggle }) => {

  const commonProps = {
    toggleCollapse: isCollapseToggle,
    searchText,
  };

 

  return (
    <div className="mt-2">
     
      <div className="grid w-full grid-flow-row grid-cols-3 px-4 py-4">
        <div className="w-full">
          <Card title="Core (dw::core::Core)" data={Core} {...commonProps} />
        </div>
        <div className="w-full ">
          <Card title="String (dw::core::String)" data={String} {...commonProps} />
          <Card title="Numbers (dw::core::Numbers)" data={Numbers} {...commonProps} />
          <Card title="Binaries (dw::core::Binaries)" data={Binaries} {...commonProps} />
          <Card title="Crypto (dw::core::Crypto)" data={Crypto} {...commonProps} />
          <Card title="DataFormat (dw::core::DataFormat)" data={DataFormat} {...commonProps} />
          <Card title="Diff (dw::core::Diff)" data={Diff} {...commonProps} />
          <Card title="Mule (dw::core::Mule)" data={Mule} {...commonProps} />

        </div>
        <div className="w-full">
          <Card title="Arrays (dw::core::Arrays)" data={Arrays} {...commonProps} />
          <Card title="Numbers (dw::core::Numbers)" data={Numbers} {...commonProps} />
          <Card title="Objects (dw::core::Objects)" data={Objects} {...commonProps} />
          <Card title="Multipart (dw::core::Multipart)" data={Multipart} {...commonProps} />
          <Card title="Tree (dw::core::Mule)" data={Tree} {...commonProps} />
          <Card title="URL (dw::core::URL)" data={URL} {...commonProps} />
          <Card title="Values (dw::core::Values)" data={Values} {...commonProps} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
