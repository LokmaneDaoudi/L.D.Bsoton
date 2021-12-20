import type { IncomingMessage, ServerResponse } from 'http';
import Cosmic from 'cosmicjs';

const api = Cosmic();
const bucket = api.bucket({
  slug: process.env.COSMIC_SLUG,
  read_key: process.env.COSMIC_READ_KEY,
});

export default async (req: IncomingMessage, res: ServerResponse) => {
  if (req.method !== 'GET') return `method not supported ${req.method}`;

  let posts;
  try {
    posts = await bucket.getObjects({
      query: {
        type: 'posts',
      },
      props: 'slug,title,content,metadata',
    });
  } catch (error) {
    return error;
  }

  return posts;
};
