import GitalkComponent from "gitalk/dist/gitalk-component";
import "../styles/gitalk.css";
import { usePageData,NoSSR } from 'rspress/runtime';
import { useEffect,useState } from 'react';

export default function GitalkCard() {
  const pageData = usePageData();
  const [key, setKey] = useState(0);
  useEffect(() => {
    // use key to force re-render
    setKey(key + 1);
  }, [pageData.page.pagePath]);
  return (
    <NoSSR>
      {
        pageData.page.pagePath.includes('Notes') && <GitalkComponent
          options={{
            clientID: "Ov23liBtIq74Cltq7uJQ",
            clientSecret: 'e767cb1c64a63d6cc4f812bde6394836f02cee9c',
            id: pageData.page.pagePath,
            repo: "CourseCommunity",
            owner: "StephenQSstarThomas",
            labels: ["gitalk"],
            admin: ["StephenQSstarThomas","wjsoj"],
            title: "评论: "+pageData.page.pagePath,
          }}
          key={key}
        /> 
      }
    </NoSSR>
  );
}