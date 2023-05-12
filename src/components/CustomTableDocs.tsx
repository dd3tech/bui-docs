import { FC } from 'react'
import { Table } from 'dd360-ds'

interface Props {
  dataTable: [{ title: string; default: string; types: []; required?: boolean }]
}

const CustomTableDocs: FC<Props> = ({ dataTable }) => {
  return (
    <Table className="my-5">
      <Table.Header>
        <Table.HeaderRow>
          <Table.HeaderCell style={{ minWidth: 150 }}>Name</Table.HeaderCell>
          <Table.HeaderCell style={{ minWidth: 150 }}>Types</Table.HeaderCell>
          <Table.HeaderCell style={{ minWidth: 150 }}>Default</Table.HeaderCell>
        </Table.HeaderRow>
      </Table.Header>
      <Table.Body>
        {dataTable.map((data) => (
          <Table.Row key={data.title}>
            <Table.Cell className="py-4">
              &quot;{data.title}&quot;
              {data.required && (
                <span
                  style={{ color: 'red', fontWeight: 'bold', fontSize: '14px' }}
                >
                  *
                </span>
              )}
            </Table.Cell>
            <Table.Cell className="py-4">
              <div
                className="flex align-center flex-wrap gap-2"
                style={{ width: 'fit-content' }}
              >
                {data.types?.map((type) => (
                  <div
                    key={type}
                    className="rounded-sm p-1 bg-gray-50 border border-gray-200 text-gray-500"
                    style={{ width: 'fit-content' }}
                  >
                    {type}
                  </div>
                ))}
              </div>
            </Table.Cell>
            <Table.Cell className="py-4">
              <div
                className="rounded-sm p-1 bg-gray-50 border border-gray-200 text-gray-500"
                style={{ width: 'fit-content' }}
              >
                {data.default ?? '-'}
              </div>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  )
}

export default CustomTableDocs
