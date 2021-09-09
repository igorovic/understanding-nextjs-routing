export default function DynamicPage(props) {
  return (
    <div>
      <p>dynamic page</p>
      <p>{props.message}</p>
    </div>
  );
}

export async function getStaticProps(context) {
  return {
    props: { message: "dynamic page part 2" }, // will be passed to the page component as props
  };
}

export async function getStaticPaths() {
  const posts = ["post/a", "post/b"];
  const paths = posts.map((post) => ({
    params: { slug: post },
  }));

  return { paths, fallback: false };
}
