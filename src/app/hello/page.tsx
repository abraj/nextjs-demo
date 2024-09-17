import Header from '@/components/Header';
import MainContent from '@/components/MainContent';
import ColorProvider from '@/components/ColorProvider';
import ServerComponent1 from '@/components/ServerComponent1';
import { ServerComponent2, serverAction2 } from '@/components/ServerComponent2';
import ServerComponent3 from '@/components/ServerComponent3';

export default function Hello() {
  return (
    <>
      <ServerComponent2 />
      <ColorProvider elem={<ServerComponent1 />} actionFn={serverAction2}>
        <ServerComponent3 />
        <Header />
        <MainContent />
      </ColorProvider>
    </>
  );
}
