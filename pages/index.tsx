import Layout from '../components/MyLayout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import { NextPage } from 'next';
import { Show } from '../util/types';

const Index: NextPage<{ shows: Show[] }> = (props) => (
  <Layout>
    <h1>Batman TV Shows</h1>
    <ul>
      {props.shows.map((show) => (
        <li key={show.id}>
          <Link href='/p/[id]' as={`/p/${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
);

// Make sure the returned object from `getInitialProps` is a plain `Object` and not using `Date`, `Map` or `Set`
Index.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();

  return {
    shows: data.map((entry: any) => entry.show),
  };
};

export default Index;
