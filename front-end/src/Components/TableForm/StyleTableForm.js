import styled from 'styled-components';

export const WrapperTable = styled.div`
    padding:10px;
    border:1px solid #000;
    border-radius:10px;
    max-height:200px;
    overflow-y: scroll;
    ::-webkit-scrollbar{
        width:4px;
    }
    ::-webkit-scrollbar-track{
        background:rgba(0,0,0,0.5);
    }
    ::-webkit-scrollbar-thumb{
        background:#000;
        border-radius: 5px;
    }
`;

export const Table = styled.table`
    margin:auto;
`;

export const TableHeader = styled.thead`
    text-align: center;
`;

export const TableBody = styled.tbody`
    text-align: center;
`;

export const ColumnHeader = styled.th`
    padding:10px;
    color:#000;
`;

export const ColumnBody = styled.td`
    color:#000;
`;

export const LineWrapper = styled.tr`

`;