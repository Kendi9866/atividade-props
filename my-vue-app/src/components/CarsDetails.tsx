interface CarsDetailsProps {
  marca: string;
  modelo: string;
  ano: number;
  estado: string;
}

export default function CarsDetails(props: CarsDetailsProps) {
  return (
    <div className="cars-details">
      <ul>
        <li className="card">
          <p>Marca: {props.marca}</p>
          <p>Modelo: {props.modelo}</p>
          <p>Ano: {props.ano}</p>
          <p>
            Estado: {props.estado} -{" "}
            {props.estado.toLowerCase() === "novo" ? (
              <span>Este carro é novo!</span>
            ) : (
              <span>Este carro é usado!</span>
            )}
          </p>
        </li>
      </ul>
    </div>
  );
}