import { Pagination, usePagination } from 'dd360-ds'
const PaginationCustom = () => {
  const paginationProps = usePagination()

  return (
    <Pagination
      {...paginationProps}
      firstText="Show"
      secondText="of the 50 items"
      currentPage={paginationProps.currentPage + 1}
      totalPages={10}
    />
  )
}
export default PaginationCustom
