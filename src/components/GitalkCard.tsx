import 'gitalk/dist/gitalk.css'
import Gitalk from 'gitalk'
import GitalkComponent from "gitalk/dist/gitalk-component";
import { usePageData,NoSSR } from 'rspress/runtime';

export default function GitalkCard() {
  const pageData = usePageData();
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
        /> 
      }
    </NoSSR>
  );
}