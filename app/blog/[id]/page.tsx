export default async function BlogPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
    const { id } = await params

    return (
        <div>
            <h1>Blog Page {id}</h1>
            <p>
                This is the blog page
            </p>
        </div>
    )
}