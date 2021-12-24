import Loader from "react-loader-spinner";
import { Container } from './styles'

const LoadingSpinner = () => {
  return (
    <Container>
      <Loader
        type="Grid"
        color="#1da483"
        height={100}
        width={100}
        timeout={3000}
      />
    </Container>
  )
}

export default LoadingSpinner