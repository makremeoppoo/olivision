/** @format */
import { CONFIG } from 'src/global-config';

import { BackToTopButton } from 'src/components/animate';

import { UploadView } from 'src/sections/upload-view';

// ----------------------------------------------------------------------

const metadata = { title: `Upload - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <title>{metadata.title}</title>
      <UploadView />
      <BackToTopButton />
    </>
  );
}
