interface QuoteProps {
    text:string;
    source:string;
    url:string;
}

const Quote = (props:QuoteProps) => {
    return(
        <div className="bg-slate-300 p-[1em] mb-[2em]">
        "{props.text}"
        <a className="italic" href="{props.url}">({props.source})</a>
        </div>
    )
}

export default Quote;