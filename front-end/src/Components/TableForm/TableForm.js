import { useEffect, useState } from "react";
import { ColumnBody, ColumnHeader, LineWrapper, Table, TableBody, TableHeader, WrapperTable } from "./StyleTableForm";

export default function TableForm({update}){
    const [existSize,setExistSize] = useState([]);
    
    useEffect(()=>UpdateTable(),[update]);

    function UpdateTable(){
        fetch('http://localhost:3001/all')
        .then((response)=>response.json())
        .then((json)=>setExistSize(json))
    }

    return(
        <WrapperTable>
           <Table>
                <TableHeader>
                    <LineWrapper>
                        <ColumnHeader>Size</ColumnHeader>
                        <ColumnHeader>Qtd</ColumnHeader>
                        <ColumnHeader>Product</ColumnHeader>
                    </LineWrapper>
                </TableHeader>
                <TableBody>
                    {existSize.map((content, index)=>(
                        <LineWrapper key={index}>        
                            <ColumnBody>{content.size}</ColumnBody>        
                            <ColumnBody>{content.quantity}</ColumnBody>        
                            <ColumnBody>{content.name}</ColumnBody>        
                        </LineWrapper>
                    ))}
                </TableBody>
            </Table>
        </WrapperTable>
    );
}