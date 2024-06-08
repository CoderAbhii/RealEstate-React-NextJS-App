import ReactPaginate from 'react-paginate';

export default function ReactPagination({pageCount, handlePageChange}) {
    return (
        <>

            <ReactPaginate
                previousLabel={'Previous'}
                nextLabel={'Next'}
                breakLabel={'...'}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={2}
                onPageChange={handlePageChange}
                containerClassName={'pagination'}
                activeClassName={'active'}
            />

        </>
    )
}