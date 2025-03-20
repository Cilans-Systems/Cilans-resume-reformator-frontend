// Third-party Imports
import styled from '@emotion/styled'

// Util Imports
import { verticalNavClasses } from '../../utils/menuClasses'

const StyledNavHeader = styled.div`
  padding: 15px 15px 5px 15px;
  padding-block: 0.5rem !important;
  padding-inline-start: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid gray;
`

const NavHeader = ({ children }) => {
  return <StyledNavHeader className={verticalNavClasses.header}>{children}</StyledNavHeader>
}

export default NavHeader
