import styled from 'styled-components'

export const DataCell = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: ${(props) => props.width || 'auto'};
  padding: 1rem;
`

export default DataCell
