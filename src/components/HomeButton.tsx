import { useNavigate } from "react-router-dom";

interface HomeButtonProps {
    url: string;
}

const HomeButton = (props: HomeButtonProps) => {
    const navigate = useNavigate();

    return (
        <div className="bg-black bg-opacity-0 hover:bg-opacity-5 hover:cursor-pointer rounded-[.2em] hover:animate-fade">
            <a
                className="flex py-[.5rem] px-[.8em] mb-[-.5em] justify-between"
                onClick={() => navigate(props.url)}
                id="profile"
            >
                <div className=""> ← </div>
                <p>back</p>
            </a>
        </div>
    );
};

export default HomeButton;
