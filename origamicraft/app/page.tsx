import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import Explore from '@/components/Explore/Explore';

export default function HomePage() {
  return (
    <>
      <Welcome />
      <Explore />
      {/* <ColorSchemeToggle /> */}
    </>
  );
}
