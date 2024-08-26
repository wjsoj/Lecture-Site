import Theme from 'rspress/theme';
import BentoCard from '../src/components/BentoCard';
import GitalkCard from '../src/components/GitalkCard';

const Layout = () => (
  <Theme.Layout 
    beforeFeatures={
      <BentoCard />
    }
    beforeDocFooter={
      <GitalkCard />
    }
  />
);

export default {
  ...Theme,
  Layout,
};

export * from 'rspress/theme';