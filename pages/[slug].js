export default function DynamicPage() {
    return (
        <div>
            <p>dynamic page</p>
        </div>
    )
}

export async function getStaticPaths() {
    const posts = [
        'post/a',
        'post/b'
    ]
    const paths = posts.map((post) => ({
        params: { slug: post },
    }))

    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
}