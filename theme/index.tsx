import Theme from 'rspress/theme';
import BentoCard from '../src/components/BentoCard';
import Gitalk from '../src/components/GitalkCard';

const Layout = () => (
  <Theme.Layout 
    beforeFeatures={
      <BentoCard />
    }
    beforeDocFooter={
      <Gitalk />
    }
  />
);

export default {
  ...Theme,
  Layout,
};

export * from 'rspress/theme';