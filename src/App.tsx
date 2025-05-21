import CarsDetails from './components/CarsDetails'
function App() {

  const carros = [
    { marca: 'Honda', modelo: 'Civic', ano: 2015, estado: 'usado' },
    { marca: 'Toyota', modelo: 'Corolla', ano: 2020, estado: 'novo' },
    { marca: 'Ford', modelo: 'Focus', ano: 2018, estado: 'usado' },
  ];

  return (
    <div className="">
      {carros.map((carro,index) =>(
        <CarsDetails
          key={index}
          marca={carro.marca}
          modelo={carro.modelo}
          ano={carro.ano}
          estado={carro.estado}/>
      ))}
    </div>
  )
}

export default App
