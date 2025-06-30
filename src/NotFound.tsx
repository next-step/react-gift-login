import { useNavigate } from "react-router-dom";
import Button from "@/Button";
const NotFound=()=>{
    const navigate=useNavigate();

    return (
        <div>
            <h1>404</h1>
            <p>페이지를 찾을 수 없습니다</p>
            <Button onClick={()=>navigate('/')}
            >홈페이지로 이동</Button>
            
        </div>
    )
};
export default NotFound;
