/** @format */
import { CONFIG } from 'src/global-config';

import { BackToTopButton } from 'src/components/animate';

import { AboutView } from 'src/sections/about/view';
import { UploadView } from 'src/sections/upload-view';

// ----------------------------------------------------------------------

const metadata = { title: CONFIG.appName };

export default function Home() {
  return (
    <>
      <title>{metadata.title}</title>
      <AboutView />
      <UploadView />
      <BackToTopButton />
    </>
  );
}
