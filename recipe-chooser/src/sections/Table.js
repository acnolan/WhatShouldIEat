import React, {useMemo} from 'react';
import {useTable, useSortBy} from 'react-table';

const Table = (props) => {
    const columns = useMemo(
        () => [
          {
            Header: "Meal",
            accessor: "meal"
          },
          {
            Header: "Difficulty",
            accessor: "difficulty"
          },
          {
            Header: "Time",
            accessor: "time"
          },
          {
            Header: "Vegetarian",
            accessor: "vegetarian"
          }
        ], []
      );

    const {data} = props;

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = useTable ({
        columns: columns,
        data: data,
        useSortBy
    });

    return (
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroup) => (
                    <tr>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()}>
                                    {column.render("Header")}
                                </th>
                            ))}
                        
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                    prepareRow(row);
                    return  (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                if (cell.column.Header === "Meal"){
                                    return <td {...cell.getCellProps()}>
                                        <a href={cell.row.original.url}>{cell.render("Cell")}</a>
                                    </td>
                                }
                                return <td {...cell.getCellProps()}>
                                    {cell.render("Cell")}
                                </td>
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default Table;