import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'

import css from 'components/BasicPagination/BasicPagination.module.css'


const BasicPagination = ({ count, changePage, currentPage }) => {  

    return (
        <Stack spacing={2}>
            <Pagination className={css.pagination} siblingCount={3} count={count} onChange={changePage} page={currentPage} />
        </Stack>
    )
}


export default BasicPagination;
