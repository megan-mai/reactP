interface QuoteProps {
    text: string;
    source: string;
    url: string;
}

const Quote = (props: QuoteProps) => {
    return (
        <div className="border-l border-black p-[1em] my-[1em]">
            "{props.text}" &nbsp;
            <a
                className="italic underline hover:no-underline"
                href="{props.url}"
            >
                ({props.source})
            </a>
        </div>
    );
};

export default Quote;
