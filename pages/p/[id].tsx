import fetch from 'isomorphic-unfetch';
import { NextPage } from 'next';
import Layout from '../../components/MyLayout';
import { Show } from '../../util/types';

const Post: NextPage<{ show: Show }> = (props) => (
  <Layout>
    <h1>{props.show.name}</h1>
    <p>{props.show.summary.replace(/<[/]?[pb]>/g, '')}</p>
    <img src={props.show.image.medium} />
  </Layout>
);

Post.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  return { show };
};

export default Post;
