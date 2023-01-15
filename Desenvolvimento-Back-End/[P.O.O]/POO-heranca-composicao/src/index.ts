import Clube from "./Clube";
import QuadraFutebol from "./QuadraFutebol";
import QuadraTenis from "./QuadraTenis";

const clube1 = new Clube();
const quadra1 = new QuadraFutebol()
const quadraTenis = new QuadraTenis()

clube1.adicionarQuadra(quadra1);
clube1.adicionarQuadra(quadraTenis);


console.log(quadra1.reservar(new Date()));
console.log(clube1.buscarQuadra(0));
console.log(clube1.buscarQuadra(1));
console.log(quadraTenis.reservar(new Date()));

