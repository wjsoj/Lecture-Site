import React, { useState, useRef, useEffect } from 'react';
import { Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

const PDFViewer = ({ file, filename }) => {
  const [numPages, setNumPages] = useState(null);
  const [width, setWidth] = useState(window.innerWidth); 
  const pdfContainerRef = useRef(null);
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  useEffect(() => {
    // 获取.rspress-doc的宽度，设置为width的值
    setWidth(pdfContainerRef.current.clientWidth);
    // 监听窗口变化，设置width的值
    window.addEventListener('resize', () => {
      setWidth(pdfContainerRef.current.clientWidth);
    });
    return () => {
      window.removeEventListener('resize', () => {
        setWidth(pdfContainerRef.current.clientWidth);
      });
    };
  })

  // 转成blob流进行下载，指定下载文件名
  const handledownload = (url) => {
    return () => {
      fetch(url).then(res => res.blob()).then(blob => {
        const a = document.createElement('a');
        const url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = filename;
        a.click();
        window.URL.revokeObjectURL(url);
      });
    }
  }

  return (
    <>
      {/* 标题 */}
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4 lg:mb-8">{filename}</h1>
      {/* 浏览器中打开和下载按钮 */}
      <div className='ml-4 lg:ml-8 flex flex-row space-x-4 lg:space-x-10 my-4'>
        <a href={file} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-3xl text-sm lg:text-base bg-indigo-300 dark:bg-indigo-800">浏览器中打开</a>
        <button className="px-12 py-2 text-sm lg:text-base rounded-3xl bg-pink-200 dark:bg-pink-800" onClick={handledownload(file)}>下载</button>
      </div>
      <div ref={pdfContainerRef} className="pdf-container">
        <Document
          file={file}
          onLoadSuccess={onDocumentLoadSuccess}
          className="pdf-document"
        >
          {Array.from(new Array(numPages), (el, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              width={width}
            />
          ))}
        </Document>
      </div>
    </>
  );
};

export default PDFViewer;