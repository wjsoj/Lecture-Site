import GitalkComponent from "gitalk/dist/gitalk-component";
import { usePageData,NoSSR } from 'rspress/runtime';

export default function Gitalk() {
  const pageData = usePageData();
  return (
    <NoSSR>
    {
      pageData.page.pagePath.includes('Notes') && <GitalkComponent
        options={{
          clientID: "Ov23liBtIq74Cltq7uJQ",
          clientSecret: 'e767cb1c64a63d6cc4f812bde6394836f02cee9c',
          id: pageData.page.pagePath,
          repo: "Lecture-Site",
          owner: "wjsoj",
          admin: ["wjsoj"],
          title: pageData.page.title,
        }}
      /> 
    }
    </NoSSR>
  );
}