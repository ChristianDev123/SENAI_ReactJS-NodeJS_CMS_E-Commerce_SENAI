import { ColumnBody, ColumnHeader, ColumnWrapper, Table, TableBody, TableHeader, WrapperTable } from "./StyleTableForm";

export default function TableForm({contents=[]}){
    return(
        <WrapperTable>
           <Table>
                <TableHeader>
                    <ColumnWrapper>
                        <ColumnHeader>Size</ColumnHeader>
                        <ColumnHeader>Qtd</ColumnHeader>
                        <ColumnHeader>Product</ColumnHeader>
                    </ColumnWrapper>
                </TableHeader>
                <TableBody>
                    <ColumnWrapper>
                        {contents.map((content)=>(
                            <>
                                <ColumnBody>{content.size}</ColumnBody>        
                                <ColumnBody>{content.qtd}</ColumnBody>        
                                <ColumnBody>{content.product}</ColumnBody>        
                            </>
                        ))}
                    </ColumnWrapper>
                </TableBody>
            </Table>
        </WrapperTable>
    );
}