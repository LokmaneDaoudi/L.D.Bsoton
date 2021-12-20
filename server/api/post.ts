import type { IncomingMessage, ServerResponse } from 'http';
import * as url from 'url';
import Cosmic from 'cosmicjs';

const api = Cosmic();
const bucket = api.bucket({
  // slug: process.env.COSMIC_SLUG,
  // read_key: process.env.COSMIC_READ_KEY,
  slug: '0e19b0b0-5ebc-11ec-a285-a5b8b9db1838',
  read_key: 'dO2tokTdgWaXWggZDaupTLyKE80LXkeC2LjRAJByN62PLBbPvg',
});

export default async (req: IncomingMessage, res: ServerResponse) => {
  if (req.method !== 'GET') return `method not supported ${req.method}`;

  const params = url.parse(req.url as string, true).query;
  const slug = params.slug as string;

  let post;
  try {
    post = await bucket.getObjects({
      query: { slug },
      props: 'slug,title,content,metadata',
    });
  } catch (error) {
    return error;
  }

  return post.objects[0];
};
