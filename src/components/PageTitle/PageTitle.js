import { Container, PageTitle } from './styles'

const Title = ({ children }) => {
  return (
    <Container>
      <PageTitle>
        {children}
      </PageTitle>
    </Container>
  )
}

export default Title
