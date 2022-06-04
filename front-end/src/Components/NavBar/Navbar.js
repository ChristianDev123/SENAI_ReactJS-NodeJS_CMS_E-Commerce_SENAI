import { Button, Wrapper, PostIcon, RemoveIcon, UpdateIcon, ViewIcon } from "./StyleNavBar";
import {Link} from 'react-router-dom'
export default function Navbar(){
    return(
        <Wrapper>
            <Link to="/updatepage">
                <Button>
                    <UpdateIcon/>
                </Button>
            </Link>
            <Link to="/postpage">
                <Button>
                    <PostIcon/>
                </Button>
            </Link>
            <Link to="/removepage">
                <Button>
                    <RemoveIcon/>
                </Button>
            </Link>
            <Link to="/viewpage">
                <Button>
                    <ViewIcon/>
                </Button>
            </Link>
        </Wrapper>
    );
}