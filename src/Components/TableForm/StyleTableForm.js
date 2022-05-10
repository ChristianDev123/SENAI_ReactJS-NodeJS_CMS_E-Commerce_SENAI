import styled from 'styled-components';

export const WrapperTable = styled.div`
    padding:10px;
    border:1px solid ${(props)=>props.theme.colors.text};
    border-radius:10px;
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
    color:${(props)=>props.theme.colors.text};
`;

export const ColumnBody = styled.td`
    color:${(props)=>props.theme.colors.text};
`;

export const ColumnWrapper = styled.tr`
`;