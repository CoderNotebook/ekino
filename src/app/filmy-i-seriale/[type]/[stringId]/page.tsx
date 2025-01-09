type TProps = {
    params: Promise<{
        type: string
        stringId: string
    }>
}

export default async function MoviesTVPage(props: TProps) {
    const { type, stringId } = await props.params

    return (
        <article>
            <section>
                Typ: {type}
                <br />
                ID: {stringId}
            </section>
        </article>
    )
}
