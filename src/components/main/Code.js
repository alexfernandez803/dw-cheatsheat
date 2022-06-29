import React, { useState, useEffect } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { EditCopy } from "react-zondicons"
const codeStyle = {
  lineHeight: "1",
  fontSize: ".8em",
};
const Code = ({ source, output }) => {
  const [copySuccess, setCopySuccess] = useState(false);

  const clean = (data = "") => {
    return data;
    /** 
    return data
      .split(/\r?\n/)
      .map((row) => row.trim().split(/\s+/).join(","))
      .join("\n");
      */
  };


  useEffect(() => {
   
    if (copySuccess === true) {
      const timer = setTimeout(() => {
        setCopySuccess(false)
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [copySuccess]);



  return (
    <div className="w-full code">
      <div className="input">
        <div className="py-2 text-sm" style={codeStyle}>
          <div className="flex justify-between py-2">
            <p className="text-sm text-green-900 bold leading-3">Input</p>
            <div className="flex justify-end">
              <CopyToClipboard text={source}
                onCopy={() => setCopySuccess(true)}>
                {copySuccess  ? <span className="text-red-700 leading-3">Copied!</span> : 
                    <EditCopy size={12} className=" leading-3 fill-current text-yellow-600 cursor-pointer" /> }
              </CopyToClipboard>
            </div>

          </div>
          <SyntaxHighlighter language={"DataWeave hljs"}>{clean(source)}</SyntaxHighlighter>
        </div>
      </div>
      <div className="result">
        <p className="py-2 text-sm">Result</p>
        <div className="text-sm" style={codeStyle}>
          <SyntaxHighlighter language={"DataWeave hljs"}>{clean(output)}</SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};

export default Code;
