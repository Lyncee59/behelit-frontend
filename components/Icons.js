import styled from 'styled-components'

import { 
  FasEdit,
  FasEnvelope,
  FasGlobe,
  FasPlusSquare,
  FasTrashAlt,
  FasSignInAlt,
  FasSignOutAlt,
  palette
} from '@behelit/components'

export const ContactIcon = styled(FasEnvelope)`
  fill: ${palette('gray8')};
  &:hover { fill: ${palette('gray8')}; }
`
export const CreateIcon = styled(FasPlusSquare)`
  fill: ${palette('gray8')};
  &:hover { fill: ${palette('gray8')}; }
`
export const DeleteIcon = styled(FasTrashAlt)`
  fill: ${palette('gray8')};
  &:hover { fill: ${palette('gray8')}; }
`
export const EditIcon = styled(FasEdit)`
  fill: ${palette('gray8')};
  &:hover { fill: ${palette('gray8')}; }
`
export const LoginIcon = styled(FasSignInAlt)`
  fill: ${palette('gray8')};
  &:hover { fill: ${palette('gray8')}; }
`
export const LogoutIcon = styled(FasSignOutAlt)`
  fill: ${palette('gray8')};
  &:hover { fill: ${palette('gray8')}; }
`
export const PublishIcon = styled(FasGlobe)`
  fill: ${palette('gray8')};
  &:hover { fill: ${palette('gray8')}; }
`