import { useEffect, useState } from "react";
import { Button, Wrapper, PostIcon, RemoveIcon, UpdateIcon, ViewIcon } from "./StyleNavBar";

export default function Navbar({currentPage=""}){
    return(
        <Wrapper>
            <Button>
                <UpdateIcon/>
            </Button>
            <Button>
                <PostIcon/>
            </Button>
            <Button>
                <RemoveIcon/>
            </Button>
            <Button>
                <ViewIcon/>
            </Button>
        </Wrapper>
    );
}