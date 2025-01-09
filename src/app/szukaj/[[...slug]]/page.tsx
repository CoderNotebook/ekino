type TProps = {
    params: Promise<{
        slug?: string[]
    }>
}

export default async function SearchPage(props: TProps) {
    const { slug } = await props.params

    return (
        <article>
            <section>Params: {slug?.toString()}</section>
        </article>
    )
}
