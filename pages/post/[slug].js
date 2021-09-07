export default function DynamicPage() {
    return (
        <div>
            <p>dynamic post</p>
        </div>
    )
}

/* export async function getStaticPaths() {
    const posts = [
        'post/a',
        'post/b'
    ]
    const paths = posts.map((post) => ({
        params: { slug: post.slug },
    }))

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
} */