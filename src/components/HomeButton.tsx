import { useNavigate } from "react-router-dom";

interface HomeButtonProps {
    url: string;
    title: string;
}

//DESKTOP
const HomeButton = (props: HomeButtonProps) => {
    const navigate = useNavigate();

    return (
        <div className="w-fit bg-gray-200 text-sm hover:opacity-70 hover:cursor-pointer rounded-[.1em] hover:animate-fade mr-[.75em]">
            <a
                className="flex px-[8px] py-[2px] justify-between"
                onClick={() => navigate(props.url)}
                id="profile"
            >
                <p>{props.title}</p>
            </a>
        </div>
    );
};

//MOBILE
interface HomeButtonMobileProps {
    url: string;
}

export const HomeButtonMobile = (props: HomeButtonMobileProps) => {
    const navigate = useNavigate();

    return (
        <div className="my-[2em] bg-white bg-opacity-1 z-1">
            <a
                className="flex"
                onClick={() => navigate(props.url)}
                id="profile"
            >
                <span className="translate-y-[3px]"> ↩ </span>
                <div className=""> &nbsp;back </div>
            </a>
        </div>
    );
};

export default HomeButton;
