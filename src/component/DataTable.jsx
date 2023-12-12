import React from 'react';
import { useTable, useGlobalFilter, useSortBy, usePagination } from 'react-table';

const DataTable = ({ columns, data }) => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page, // Instead of rows, we'll use page
        state: { pageIndex, pageSize, globalFilter },
        setGlobalFilter,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
    } = useTable(
        { columns, data },
        useGlobalFilter, // useGlobalFilter hook for search functionality
        useSortBy, // useSortBy hook for sorting functionality
        usePagination // usePagination hook for paging functionality
    );

    return (
        <div>
            <div>
                {/* Global Search */}
                <input
                    value={globalFilter || ''}
                    onChange={(e) => setGlobalFilter(e.target.value)}
                    placeholder="Search..."
                />
            </div>
            <table {...getTableProps()} className="table">
                <thead>
                {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                            <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                {column.render('Header')}
                                <span>
                    {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                  </span>
                            </th>
                        ))}
                    </tr>
                ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                {page.map((row) => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map((cell) => (
                                <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                            ))}
                        </tr>
                    );
                })}
                </tbody>
            </table>
            <div>
                {/* Pagination */}
                <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                    Previous
                </button>
                <span>
          Page{' '}
                    <strong>
            {pageIndex + 1} of {page.length}
          </strong>{' '}
        </span>
                <button onClick={() => nextPage()} disabled={!canNextPage}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default DataTable;