import GitalkComponent from "gitalk/dist/gitalk-component";
import { usePageData } from 'rspress/runtime';

export default function Gitalk() {
  const pageData = usePageData();
  return (
    <GitalkComponent
      options={{
        clientID: "Ov23liBtIq74Cltq7uJQ",
        clientSecret: 'e767cb1c64a63d6cc4f812bde6394836f02cee9c',
        id: pageData.page.pagePath,
        repo: "CourseCommunity",
        owner: "StephenQSstarThomas",
        admin: ["StephenQSstarThomas","wjsoj"],
        title: pageData.page.title,
      }}
    />
  );
}