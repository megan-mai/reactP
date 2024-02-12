import { useNavigate } from "react-router-dom";

interface HomeButtonProps {
    url: string;
}  

const HomeButton = (props:HomeButtonProps) =>{
    const navigate = useNavigate();


return(
    <div>
          <a className="flex pb-[.5rem]" onClick={() => navigate(props.url)} id="profile"> 
            <div className="pr-[1em]"> ← </div>
            <p>
               Return
            </p>
            </a>
    </div>
)
}

export default HomeButton;