interface TextProps {
    header?:string;
    body: string;

}

const Text = (props:TextProps)=>{
return(
    <div className="pb-[2rem]">
        <p className="opacity-50 text-sm pb-[.25rem]">{props.header}</p>
        <p>{props.body}</p>
    </div>
)


}

export default Text;