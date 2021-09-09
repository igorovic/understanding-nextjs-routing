export default function DynamicPage(props) {
  return (
    <div>
      <p>dynamic page </p>
    </div>
  );
}
export async function getStaticProps(context) {
  return {
    props: { message: "some post" },
  };
}

export async function getStaticPaths() {
  const posts = ["a", "b"];
  const paths = posts.map((post) => ({
    params: { slug: post },
  }));

  return { paths, fallback: false };
}
