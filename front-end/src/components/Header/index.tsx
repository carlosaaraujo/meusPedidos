import { Container, Content } from "./styles";

export function Header() {
  return (
    <Container>
      <Content>
        <div className="page-details">
          <h1>Pedidos</h1>
          <h2>Acompanhe os pedidos dos clientes</h2>
        </div>

        {/* <img src={logo} alt="Tim Maia" /> */}
        <h1>Tim Maia</h1>
      </Content>
    </Container>
  );
}
