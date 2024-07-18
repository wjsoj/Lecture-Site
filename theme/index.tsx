import Theme from 'rspress/theme';
import BentoCard from '../src/components/BentoCard';

const Layout = () => <Theme.Layout beforeFeatures={
  <BentoCard />
} />;

export default {
  ...Theme,
  Layout,
};

export * from 'rspress/theme';