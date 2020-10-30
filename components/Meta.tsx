import buildUrl from '@/lib/buildUrl';
import Head from 'next/head';

export interface IMetaParams {
  title?: string;
  description: string;
  image?: string;
  url: string;
  noAppendSiteName?: boolean;
}

const Meta = ({ title, description, image, url, noAppendSiteName }: IMetaParams) => {
  if (title && !noAppendSiteName) {
    title = `${title} - xKern Technologies`;
  }

  if (!title) {
    title = 'xKern Technologies';
  }

  image = buildUrl(image);
  url = buildUrl(url);

  return (
    <Head>
      <title>{title}</title>

      <meta name="title" content={title} />
      <meta name="description" content={description} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />

      {image && (
        <>
          <link rel="image_src" href={image} />
          <meta property="og:image" content={image} />
        </>
      )}

      <meta property="og:url" content={url} />
    </Head>
  );
};

export default Meta;
