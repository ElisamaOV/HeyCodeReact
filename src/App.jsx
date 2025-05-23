import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

//-----------clase 1 import/export--------------
// import { ImportExportApp } from './lessons/01-import-export/explicacion/ImportExportApp';
//-----------clase 2 Componentes de tipo clase--------------
// import ExplicCompClass from './lessons/02-ComponentesClase/explicacion/ExplicCompClass';
//-----------Ejercicio familia simpson--------------
// import ComponenteSimpsons from './lessons/02-ComponentesClase/simpsons/ComponenteSimpsons';
// import Footer from './lessons/02-ComponentesClase/simpsons/footer';
//-----------Ejercicio ranas-----------------
// import { Fragment } from 'react';
// import HeaderNavbar from './lessons/02-ComponentesClase/ejercicioRanas/header-navbar/header-navbar';
// import Body from './lessons/02-ComponentesClase/ejercicioRanas/body/body';
// --------------------clase 3 FunctionalComponents-----------------
// import { FunctionalCompApp } from './lessons/03-FunctionalComponents/FunctionalComponents';
// --------------------clase 4 Hooks, ciclos de vida y useState-----------------
// import { ExplicUseStateApp } from './lessons/04-useState/explicacion/ExplicUseStateApp';
// --------------------Ejercicio 1 useState-------------------------------------
// import { EjercicioUseState1 } from './lessons/04-useState/EjercicioUseState1/EjercicioUseState1';
// --------------------Clase 5 useBoolean-------------------------------------
// import { BooleanApp } from './lessons/05-useBoolean/explicacion/BooleanApp';
// --------------------Ejercicio Comidas-------------------------------------
// import { ComidaApp } from './lessons/05-useBoolean/ejercicio-comidas/comidasApp';
// --------------------Ejercicio Bingo-------------------------------------
// import { BingoApp } from './lessons/04-useState/EjercicioBingo/ejercicioBingo';
// --------------------Ejercicio Estaciones-------------------------------------
// import { EstacionesApp } from './lessons/04-useState/EjercicioEstaciones/estacionesApp';
// --------------------Ejercicio Casita-------------------------------------
// import { CasitaApp } from './lessons/04-useState/EjercicioCasita/casitaApp';
// --------------------Explicacion Inputs-------------------------------------
// import { InputExplicApp } from './lessons/06-Inputs/explicacion/InputExplicApp';
// import { Ejercicio1 } from './lessons/06-Inputs/Ejercicio1/Ejercicio1';
// --------------------clase 7 Arrays mapeo-------------------------------------
// import { ArraysApp } from './lessons/07-useStateArray/explicacionMapeo/ArraysApp';
// --------------------clase 7 Arrays lista-------------------------------------
// import { Lista } from './lessons/07-useStateArray/explicacion Array/Lista';
// --------------------Ejercicio Calculadora Grados-------------------------------------
// import { CalculadoraGradosApp } from './lessons/06-Inputs/EjercicioGradosCalculadora/CalculadoraGradosApp';
// --------------------Ejercicio Montaña-------------------------------------
// import { MountainApp } from './lessons/07-useStateArray/EjercicioMountain/MountainApp';
// --------------------Ejercicio Emoticonos-------------------------------------
// import { EmoticonosApp } from './lessons/07-useStateArray/EjercicioEmoticonos/EmoticonosApp';
// --------------------Ejercicio Usuarios-------------------------------------
// import { UsuariosApp } from './lessons/07-useStateArray/EjercicioUsuarios/UsuariosApp';
// -------------------clase 8 Formularios con objetos-------------------------------------
// import { ObjectApp } from './lessons/08-formulariosObjetos/explicacion/ObjectApp';
// -------------------Ejercicio Formularios1-------------------------------------
// import { Ejercicio1FormApp } from './lessons/08-formulariosObjetos/Ejercicio1Formulario/Ejercicio1FormApp';
// -------------------clase 9 props-------------------------------------
// import { PropsApp } from './lessons/09-props/explicacion/PropsApp';
// -------------------Ejercicio Contador a distancia-------------------------------------
// import { ContadorDistanciaApp } from './lessons/09-props/EjercicioContadorDistancia/ContadorDistanciaApp';
// -------------------Ejercicio props con Spread-------------------------------------
// import { PropsSpreadApp } from './lessons/09-props/propsConSpread/PropsSpreadApp';
// -------------------Ejercicio Fruteria-------------------------------------
// import { FrutasApp } from './lessons/09-props/EjercicioFrutas/FrutasApp';
// -------------------Ejercicio El poder de las props-------------------------------------
// import { ElPoder } from './lessons/09-props/ElPoderDeLasProps/ElPoder';
// -------------------Ejercicio Modal Usuario-------------------------------------
// import { ModalUsuarioApp } from './lessons/09-props/EjercicioModalUsuario/ModalUsuarioApp';
// -------------------Ejercicio Paso Hermanos-------------------------------------
// import { PasoHermanosApp } from './lessons/09-props/EjerPasoHermanos/PasoHermanosApp';
// -------------------clase 10 children-------------------------------------
// import { ChildrenApp } from './lessons/10-children/explicacion/ChildrenApp';
// -------------------clase 11 UseEffect-------------------------------------
// import { UseEffectApp } from './lessons/11-useEffect/explicacion/UseEffectApp';
//----------------------Ejercicio MyApp-----------
// import { MyApp } from './lessons/11-useEffect/localStorage/MyApp';
// -------------------clase 12 Context-------------------------------------
// import { ContextApp } from './lessons/12-Context/explicacion/ContextApp';
// -------------------clase 12 Context Profesional-------------------------------------
// import { ContextAvanzado } from './lessons/12-Context/explicacionPofesional/ContextAvanzado';
// -------------------Ejercicio Lista Usuarios Storage-------------------------------------
// import { ListaUsuariosApp } from './lessons/11-useEffect/EjercicioListaUsuariosStorage/ListaUsuariosApp';
// -------------------Ejercicio Modal-------------------------------------
// import { ModalApp } from './lessons/11-useEffect/EjercicioModal/ModalApp';
// -------------------Ejercicio LoginContext-------------------------------------
// import { LoginApp } from './lessons/11-useEffect/EjercicioLogin/LoginApp';
// -------------------14 ApiRickApp-------------------------------------
// import { ApiRickApp } from './lessons/14-Api-Rick/ApiRickApp';
// -------------------15 UseRef-------------------------------------
// import { UseRefApp } from './lessons/15-useRef/UseRefApp';
// -------------------16 CustomHook-------------------------------------
// import { CustomHookApp } from './lessons/16-CustomHook/explicacion/CustomHookApp';
// -------------------17 ApiWeather-------------------------------------
// import { ApiWeather } from './lessons/17-ApiWeather/ApiWeather';
// -------------------18 UserefEjer-------------------------------------
// import { EjerClaseUseRef } from './lessons/18-EjerClaseUseRef/EjerClaseUseRef';
// -------------------19 ReactRouterDom-------------------------------------
// import { RouterApp } from './lessons/19-ReactRouterDom/explicacion/RouterApp';
// -------------------Ejercicio Frutería-------------------------------------
// import { Fruteria } from './lessons/19-ReactRouterDom/EjercicioFruteria/Fruteria';
// -------------------CARGA PEREZOSA-------------------------------------
// import { LazyLoadApp } from './lessons/19-ReactRouterDom/CargaPerezosa/LazyLoadApp';
// -------------------AUTH APP-------------------------------------
// import { AuthApp } from './lessons/20-Auth/AuthApp';
// -------------------AUTH APP-------------------------------------
// import { PanApp } from './lessons/19-ReactRouterDom/EjercicioPanaderia/PanApp';
// -------------------Ejercicio 1 Auth fin de semana-------------------------------------
import { AuthNormalApp } from './lessons/21-EjercicioAuth1/AuthNormalApp';

// import './App.css';
function App() {
  return (
    <>
      {/* //-----------clase 1 import/export-------------- */}
      {/* <ImportExportApp /> */}
      {/* //-----------clase 2 Componentes de tipo clase-------------- */}
      {/* <ExplicCompClass /> */}
      {/* -----------Ejercicio familia simpson-------------- */}
      {/* <ComponenteSimpsons />
      <Footer /> */}
      {/* --------------------Ejercicio Ranas----------------- */}
      {/* <Fragment>
        <HeaderNavbar />
        <Body />
      </Fragment> */}
      {/* --------------------clase 3 FunctionalComponents----------------- */}
      {/* <FunctionalCompApp /> */}
      {/* --------------------clase 4 Hooks, ciclos de vida y useState----------------- */}
      {/* <ExplicUseStateApp /> */}
      {/*  --------------------Ejercicio 1 useState------------------------------------- */}
      {/* <EjercicioUseState1 /> */}
      {/*  --------------------Clase 5 useBoolean------------------------------------- */}
      {/* <BooleanApp /> */}
      {/* --------------------Ejercicio Comidas------------------------------------- */}
      {/* <ComidaApp /> */}
      {/* --------------------Ejercicio Bingo------------------------------------- */}
      {/* <BingoApp /> */}
      {/* --------------------Ejercicio Estaciones------------------------------------- */}
      {/* <EstacionesApp /> */}
      {/* --------------------Ejercicio Casita------------------------------------- */}
      {/* <CasitaApp /> */}
      {/* --------------------Ejercicio Inputs------------------------------------- */}
      {/* <InputExplicApp /> */}
      {/* --------------------Ejercicio Inputs 1------------------------------------- */}
      {/* <Ejercicio1 /> */}
      {/* --------------------Clase 7 arrays------------------------------------- */}
      {/* <ArraysApp /> */}
      {/* --------------------Clase 7 lista------------------------------------- */}
      {/* <Lista /> */}
      {/* --------------------Ejercicio Grados Calculadora------------------------------------- */}
      {/* <CalculadoraGradosApp /> */}
      {/* --------------------Ejercicio Galeria de Montaña------------------------------------ */}
      {/* <MountainApp /> */}
      {/* --------------------Ejercicio Emoticonos------------------------------------ */}
      {/* <EmoticonosApp /> */}
      {/* --------------------Ejercicio Usuarios------------------------------------ */}
      {/* <UsuariosApp /> */}
      {/* // -------------------clase 8 Formularios con objetos------------------------------------- */}
      {/* <ObjectApp /> */}
      {/* // -------------------Ejercicio 1 Formularios------------------------------------- */}
      {/* <Ejercicio1FormApp /> */}
      {/* // -------------------clase 9 Props------------------------------------- */}
      {/* <PropsApp /> */}
      {/* // -------------------Ejercicio Contador a distancia------------------------------------- */}
      {/* <ContadorDistanciaApp /> */}
      {/* // -------------------Props con spread------------------------------------- */}
      {/* <PropsSpreadApp /> */}
      {/* // -------------------Ejercicio Fruteria------------------------------------ */}
      {/* <FrutasApp /> */}
      {/* // -------------------Ejercicio Fruteria------------------------------------ */}
      {/* <ElPoder /> */}
      {/* // -------------------Ejercicio Modal Usuario------------------------------------ */}
      {/* <ModalUsuarioApp /> */}
      {/* // -------------------Ejercicio Paso Hermanos------------------------------------ */}
      {/* <PasoHermanosApp /> */}
      {/* // -------------------clase 10 Children------------------------------------- */}
      {/* <ChildrenApp /> */}
      {/* // -------------------clase 11 useEffect------------------------------------- */}
      {/* <UseEffectApp /> */}
      {/* // -------------------Ejercicio MiApp------------------------------------ */}
      {/* <MyApp /> */}
      {/* // -------------------clase 12 Context------------------------------------- */}
      {/* <ContextApp /> */}
      {/* // -------------------clase 12 Context Avanzado------------------------------------- */}
      {/* <ContextAvanzado /> */}
      {/* // -------------------Ejercicio lista usuarios------------------------------------- */}
      {/* <ListaUsuariosApp /> */}
      {/* // -------------------EjercicioModal------------------------------------ */}
      {/* <ModalApp /> */}
      {/* // -------------------Ejercicio Login------------------------------------ */}
      {/* <LoginApp /> */}
      {/* // -------------------CLASE API RICK------------------------------------ */}
      {/* <ApiRickApp /> */}
      {/* <UseRefApp /> */}
      {/* <CustomHookApp /> */}
      {/* // -------------------CLASE API WEATHER------------------------------------ */}
      {/* <ApiWeather /> */}
      {/* // -------------------Ejer UseRef------------------------------------ */}
      {/* <EjerClaseUseRef /> */}
      {/* // -------------------19 REACT ROUTERDOM------------------------------------ */}
      {/* <RouterApp /> */}
      {/* // ------------------Ejercicio Fruteria----------------------------------- */}
      {/* <Fruteria /> */}
      {/* // ------------------CARGA PEREZOSA----------------------------------- */}
      {/* <LazyLoadApp /> */}
      {/* // ------------------CLASE 19 AUTH APP----------------------------------- */}
      {/* <AuthApp /> */}
      {/* // ------------------CARGA PEREZOSA----------------------------------- */}
      {/* <PanApp /> */}
      {/* // ------------------Ejercicio 1 Auth Normal----------------------------------- */}
      <AuthNormalApp />
    </>
  );
}

export default App;
