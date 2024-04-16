interface TextProps {
    header?: string;
    body: string;
    source?: string;
}

const Text = (props: TextProps) => {
    return (
        <div className="py-[.5rem]">
            <p className="text-gray-500 text-sm pb-[.25rem] z-0">
                {props.header}
            </p>
            <p>{props.body}</p>
        </div>
    );
};

export const TextRef = (props: TextProps) => {
    return (
        <div className="pb-[1rem]">
            <p className="text-gray-500 text-sm pb-[.25rem] z-0">
                {props.header}
            </p>
            <p>
                {props.body}&nbsp;
                <a
                    className="italic underline hover:no-underline"
                    href="{props.source}"
                >
                    (source)
                </a>
            </p>
        </div>
    );
};

interface TextBulletProps {
    header?: string;
    points: string[];
}

export const Bullet = (props: TextBulletProps) => {
    return (
        <div className="py-[1rem]">
            {/* <p className="text-gray-500 text-sm pb-[.25rem] mx-auto border-2">
                {props.header}
            </p> */}
            <div className="w-fit m-auto">
                {props.points.map((point) => (
                    <p>• {point}</p>
                ))}
            </div>
        </div>
    );
};

export default Text;
