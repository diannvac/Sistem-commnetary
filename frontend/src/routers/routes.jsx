import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import Edit from '../pages/Edit'
import Main from '../pages/Main'
import New from '../pages/New'
import View from '../pages/Blog'
import Courses from '../pages/Courses'
import {Administrator} from '../pages/Administrator'
import Acerca from '../pages/Acerca'
import Contact from '../pages/Contact';
import LandingPageCreator from '../pages/LandingPageCreator';
import NewsletterCreator from '../pages/NewsletterCreator';
import LandingView from '../pages/LandingView';
import LandingEdit from "../pages/LandingEdit";
import LandingMeta from "../pages/LandingPageMeta";
import NewsletterMeta from "../pages/NewsletterMeta";
import {Test} from "../pages/Test";
import {LoginPage} from '../pages/LoginPage';
import {PrivateRoute} from '../components/PrivateRoute';
import  LoginUser from '../pages/LoginUser';


/* AGREGADAS POR NOSOTRAS */
// import Principiante from '../pages/Curso1/Principiante';
import Medio from '../pages/Curso1/Medio';
import Avanzado from '../pages/Curso1/Avanzado';
import FAQ from '../components/FAQ';
/* RUTAS DEL CURSO PRINCIPIANTE */
import Temauno from '../pages/Curso1/temas/Temauno';
import Temados from '../pages/Curso1/temas/Temados';
import Tematres from '../pages/Curso1/temas/Tematres';
import Temacuatro from '../pages/Curso1/temas/Temacuatro';
import Temacinco from '../pages/Curso1/temas/Temacinco';
import Temaseis from '../pages/Curso1/temas/Temaseis';
import Temasiete from '../pages/Curso1/temas/Temasiete';
import Temaocho from '../pages/Curso1/temas/Temaocho';
import Temanueve from '../pages/Curso1/temas/Temanueve';
import Temadiez from '../pages/Curso1/temas/Temadiez';
import Temaonce from '../pages/Curso1/temas/Temaonce';
import Temadoce from '../pages/Curso1/temas/Temadoce';

/* RUTAS CURSO MEDIO */
import TemaunoM from '../pages/Curso1/TemasM/TemaunoM';
import TemadosM from '../pages/Curso1/TemasM/TemadosM';
import TematresM from '../pages/Curso1/TemasM/TematresM';
import TemacuatroM from '../pages/Curso1/TemasM/TemacuatroM';
import TemacincoM from '../pages/Curso1/TemasM/TemacincoM';
import TemaseisM from '../pages/Curso1/TemasM/TemaseisM';
import TemasieteM from '../pages/Curso1/TemasM/TemasieteM';
import TemaochoM from '../pages/Curso1/TemasM/TemaochoM';
import TemanueveM from '../pages/Curso1/TemasM/TemanueveM';
import TemadiezM from '../pages/Curso1/TemasM/TemadiezM';
import TemaonceM from '../pages/Curso1/TemasM/TemaonceM';
import TemadoceM from '../pages/Curso1/TemasM/TemadoceM';

/* RUTAS CURSO AVANZADO */
import TemaunoA from '../pages/Curso1/TemasA/TemaunoA';
import TemadosA from '../pages/Curso1/TemasA/TemadosA';
import TematresA from '../pages/Curso1/TemasA/TematresA';
import TemacuatroA from '../pages/Curso1/TemasA/TemacuatroA';
import TemacincoA from '../pages/Curso1/TemasA/TemacincoA';
import TemaseisA from '../pages/Curso1/TemasA/TemaseisA';
import TemasieteA from '../pages/Curso1/TemasA/TemasieteA';
import TemaochoA from '../pages/Curso1/TemasA/TemaochoA';
import TemanueveA from '../pages/Curso1/TemasA/TemanueveA';
import TemadiezA from '../pages/Curso1/TemasA/TemadiezA';
import TemaonceA from '../pages/Curso1/TemasA/TemaonceA';
import TemadoceA from '../pages/Curso1/TemasA/TemadoceA';

/* CURSO 2 */
import Principiante2 from '../pages/Curso2/Principiante2';
import Medio2 from '../pages/Curso2/Medio2';
import Avanzado2 from '../pages/Curso2/Avanzado2';


/* CURSO 3 */
import Principiante3 from '../pages/Curso3/Principiante3';
import Medio3 from '../pages/Curso3/Medio3';
import Avanzado3 from '../pages/Curso3/Avanzado3';
import Temauno3 from '../pages/Curso3/Temas3P/Temauno3';
import Temados3 from '../pages/Curso3/Temas3P/Temados3';
import Temastres3 from '../pages/Curso3/Temas3P/Temastres3';


/* CURSO 4 */
import Principiante4 from '../pages/Curso4/Principiante4';
import Medio4 from '../pages/Curso4/Medio4';
import Avanzado4 from '../pages/Curso4/Avanzado4';

/* CURSO 5 */
import Principiante5 from '../pages/Curso5/Principiante5';
import Medio5 from '../pages/Curso5/Medio5';
import Avanzado5 from '../pages/Curso5/Avanzado5';

/* CURSO 6 */
import Principiante6 from '../pages/Curso6/Principiante6';
import Medio6 from '../pages/Curso6/Medio6';
import Avanzado6 from '../pages/Curso6/Avanzado6';

/* CURSO 7 */
import Principiante7 from '../pages/Curso7/Principiante7';
import Medio7 from '../pages/Curso7/Medio7';
import Avanzado7 from '../pages/Curso7/Avanzado7';

/* CURSO 8 */
import Principiante8 from '../pages/Curso8/Principiante8';
import Medio8 from '../pages/Curso8/Medio8';
import Avanzado8 from '../pages/Curso8/Avanzado8';

/* CURSO 9 */
import Principiante9 from '../pages/Curso9/Principiante9';
import Medio9 from '../pages/Curso9/Medio9';
import Avanzado9 from '../pages/Curso9/Avanzado9';

/* CURSO 10 */
import Principiante10 from '../pages/Curso10/Principiante10';
import Medio10 from '../pages/Curso10/Medio10';
import Avanzado10 from '../pages/Curso10/Avanzado10';

/* CURSO 11 */
import Principiante11 from '../pages/Curso11/Principiante11';
import Medio11 from '../pages/Curso11/Medio11';
import Avanzado11 from '../pages/Curso11/Avanzado11';

/* CURSO 12 */
import Principiante12 from '../pages/Curso12/Principiante12';
import Medio12 from '../pages/Curso12/Medio12';
import Avanzado12 from '../pages/Curso12/Avanzado12';

/* CURSO 13 */
import Principiante13 from '../pages/Curso13/Principiante13';
import Medio13 from '../pages/Curso13/Medio13';
import Avanzado13 from '../pages/Curso13/Avanzado13';

/* CURSO 14 */
import Principiante14 from '../pages/Curso14/Principiante14';
import Medio14 from '../pages/Curso14/Medio14';
import Avanzado14 from '../pages/Curso14/Avanzado14';

/* CURSO 15 */
import Principiante15 from '../pages/Curso15/Principiante15';
import Medio15 from '../pages/Curso15/Medio15';
import Avanzado15 from '../pages/Curso15/Avanzado15';

/* CURSO 16 */
import Principiante16 from '../pages/Curso16/Principiante16';
import Medio16 from '../pages/Curso16/Medio16';
import Avanzado16 from '../pages/Curso16/Avanzado16';

/* CURSO 17 */
import Principiante17 from '../pages/Curso17/Principiante17';
import Medio17 from '../pages/Curso17/Medio17';
import Avanzado17 from '../pages/Curso17/Avanzado17';

/* CURSO 18 */
import Principiante18 from '../pages/Curso18/Principiante18';
import Medio18 from '../pages/Curso18/Medio18';
import Avanzado18 from '../pages/Curso18/Avanzado18';

/* CURSO 19 */
import Principiante19 from '../pages/Curso19/Principiante19';
import Medio19 from '../pages/Curso19/Medio19';
import Avanzado19 from '../pages/Curso19/Avanzado19';

/* CURSO 20 */
import Principiante20 from '../pages/Curso20/Principiante20';
import Medio20 from '../pages/Curso20/Medio20';
import Avanzado20 from '../pages/Curso20/Avanzado20';

/* CURSO 21 */
import Principiante21 from '../pages/Curso21/Principiante21';
import Medio21 from '../pages/Curso21/Medio21';
import Avanzado21 from '../pages/Curso21/Avanzado21';

/* CURSO 22 */
import Principiante22 from '../pages/Curso22/Principiante22';
import Medio22 from '../pages/Curso22/Medio22';
import Avanzado22 from '../pages/Curso22/Avanzado22';

/* CURSO 23 */
import Principiante23 from '../pages/Curso23/Principiante23';
import Medio23 from '../pages/Curso23/Medio23';
import Avanzado23 from '../pages/Curso23/Avanzado23';

/* CURSO 24 */
import Principiante24 from '../pages/Curso24/Principiante24';
import Medio24 from '../pages/Curso24/Medio24';
import Avanzado24 from '../pages/Curso24/Avanzado24';

/* CURSO 25 */
import Principiante25 from '../pages/Curso25/Principiante25';
import Medio25 from '../pages/Curso25/Medio25';
import Avanzado25 from '../pages/Curso25/Avanzado25';

/* CURSO 26 */
import Principiante26 from '../pages/Curso26/Principiante26';
import Medio26 from '../pages/Curso26/Medio26';
import Avanzado26 from '../pages/Curso26/Avanzado26';

/* CURSO 27 */
import Principiante27 from '../pages/Curso27/Principiante27';
import Medio27 from '../pages/Curso27/Medio27';
import Avanzado27 from '../pages/Curso27/Avanzado27';

export function MyRoutes() {

  const {user} = UserAuth();
  const RequireAuth =({children})=>{
    return user?children: <Navigate to={"/loginpage"}/>;
  }
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/administrator" element={<RequireAuth>
          <Administrator/>
        </RequireAuth>}/>

        <Route path='/' element={<Courses />} />
        <Route path='*' element={<Navigate to='/' />} />
        <Route path='/blog/:keywords' element={<View />} />
        <Route path='/landingView/:keywords' element={<LandingView />} />
        <Route path='/main' element={<Main />} />
        <Route path='/test' element={<Test />} />
        <Route path='/acerca' element={<Acerca />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/landingpagecreator" element={<LandingPageCreator />} />
        <Route path="/newslettercreator" element={<NewsletterCreator />} />
        <Route path="/landingedit/:id" element={<LandingEdit />} />
        <Route path="/landingpagemeta/:id" element={<LandingMeta />} />
        <Route path="/newslettermeta/:id" element={<NewsletterMeta />} />


        {/* AGREGADA POR NOSOTRAS */}
        {/* <Route path='/principiante' element={<Principiante/>}/> */}
        <Route path='/medio' element={<Medio/>}/>
        <Route path='/avanzado' element={<Avanzado/>}/>
        <Route path='/faq' element={<FAQ/>}/>

        {/*RUTAS PRINCIPIANTE */}
        <Route path='/temauno' element={<Temauno/>}/>
        <Route path='/temados' element={<Temados/>}/>
        <Route path='/tematres' element={<Tematres/>}/>
        <Route path='/temacuatro' element={<Temacuatro/>}/>
        <Route path='/temacinco' element={<Temacinco/>}/>
        <Route path='/temaseis' element={<Temaseis/>}/>
        <Route path='/temasiete' element={<Temasiete/>}/>
        <Route path='/temaocho' element={<Temaocho/>}/>
        <Route path='/temanueve' element={<Temanueve/>}/>
        <Route path='/temadiez' element={<Temadiez/>}/>
        <Route path='/temaonce' element={<Temaonce/>}/>
        <Route path='/temadoce' element={<Temadoce/>}/>

        {/* RUTAS MEDIO */}
        <Route path='/temaunoM' element={<TemaunoM/>}/>
        <Route path='/temadosM' element={<TemadosM/>}/>
        <Route path='/tematresM' element={<TematresM/>}/>
        <Route path='/temacuatroM' element={<TemacuatroM/>}/>
        <Route path='/temacincoM' element={<TemacincoM/>}/>
        <Route path='/temaseisM' element={<TemaseisM/>}/>
        <Route path='/temasieteM' element={<TemasieteM/>}/>
        <Route path='/temaochoM' element={<TemaochoM/>}/>
        <Route path='/temanueveM' element={<TemanueveM/>}/>
        <Route path='/temadiezM' element={<TemadiezM/>}/>
        <Route path='/temaonceM' element={<TemaonceM/>}/>
        <Route path='/temadoceM' element={<TemadoceM/>}/>

        {/* RUTAS AVANZADO */}
        <Route path='/temaunoA' element={<TemaunoA/>}/>
        <Route path='/temadosA' element={<TemadosA/>}/>
        <Route path='/tematresA' element={<TematresA/>}/>
        <Route path='/temacuatroA' element={<TemacuatroA/>}/>
        <Route path='/temacincoA' element={<TemacincoA/>}/>
        <Route path='/temaseisA' element={<TemaseisA/>}/>
        <Route path='/temasieteA' element={<TemasieteA/>}/>
        <Route path='/temaochoA' element={<TemaochoA/>}/>
        <Route path='/temanueveA' element={<TemanueveA/>}/>
        <Route path='/temadiezA' element={<TemadiezA/>}/>
        <Route path='/temaonceA' element={<TemaonceA/>}/>
        <Route path='/temadoceA' element={<TemadoceA/>}/>

        {/* CURSO 2 */}
        <Route path='/principiante2' element={<Principiante2/>}/>
        <Route path='/medio2' element={<Medio2/>}/>
        <Route path='/avanzado2' element={<Avanzado2/>}/>


        <Route path="/LoginUser" element={<LoginUser />} />
        

        {/* CURSO 3 */}
        <Route path='/principiante3' element={<Principiante3/>}/>
        <Route path='/medio3' element={<Medio3/>}/>
        <Route path='/avanzado3' element={<Avanzado3/>}/>
        <Route path='/temauno3' element={<Temauno3/>}/>
        <Route path='/temados3' element={<Temados3/>}/>
        <Route path='/temastres3' element={<Temastres3/>}/>

        {/* CURSO 4 */}
        <Route path='/principiante4' element={<Principiante4/>}/>
        <Route path='/medio4' element={<Medio4/>}/>
        <Route path='/avanzado4' element={<Avanzado4/>}/>

        {/* CURSO 5 */}
        <Route path='/principiante5' element={<Principiante5/>}/>
        <Route path='/medio5' element={<Medio5/>}/>
        <Route path='/avanzado5' element={<Avanzado5/>}/>

        {/* CURSO 6 */}
        <Route path='/principiante6' element={<Principiante6/>}/>
        <Route path='/medio6' element={<Medio6/>}/>
        <Route path='/avanzado6' element={<Avanzado6/>}/>

        {/* CURSO 7 */}
        <Route path='/principiante7' element={<Principiante7/>}/>
        <Route path='/medio7' element={<Medio7/>}/>
        <Route path='/avanzado7' element={<Avanzado7/>}/>

        {/* CURSO 8 */}
        <Route path='/principiante8' element={<Principiante8/>}/>
        <Route path='/medio8' element={<Medio8/>}/>
        <Route path='/avanzado8' element={<Avanzado8/>}/>

        {/* CURSO 9 */}
        <Route path='/principiante9' element={<Principiante9/>}/>
        <Route path='/medio9' element={<Medio9/>}/>
        <Route path='/avanzado9' element={<Avanzado9/>}/>

        {/* CURSO 10 */}
        <Route path='/principiante10' element={<Principiante10/>}/>
        <Route path='/medio10' element={<Medio10/>}/>
        <Route path='/avanzado10' element={<Avanzado10/>}/>

        {/* CURSO 11 */}
        <Route path='/principiante11' element={<Principiante11/>}/>
        <Route path='/medio11' element={<Medio11/>}/>
        <Route path='/avanzado11' element={<Avanzado11/>}/>

        {/* CURSO 12 */}
        <Route path='/principiante12' element={<Principiante12/>}/>
        <Route path='/medio12' element={<Medio12/>}/>
        <Route path='/avanzado12' element={<Avanzado12/>}/>

        {/* CURSO 13 */}
        <Route path='/principiante13' element={<Principiante13/>}/>
        <Route path='/medio13' element={<Medio13/>}/>
        <Route path='/avanzado13' element={<Avanzado13/>}/>

        {/* CURSO 14 */}
        <Route path='/principiante14' element={<Principiante14/>}/>
        <Route path='/medio14' element={<Medio14/>}/>
        <Route path='/avanzado14' element={<Avanzado14/>}/>

        {/* CURSO 15 */}
        <Route path='/principiante15' element={<Principiante15/>}/>
        <Route path='/medio15' element={<Medio15/>}/>
        <Route path='/avanzado15' element={<Avanzado15/>}/>

        {/* CURSO 16 */}
        <Route path='/principiante16' element={<Principiante16/>}/>
        <Route path='/medio16' element={<Medio16/>}/>
        <Route path='/avanzado16' element={<Avanzado16/>}/>

        {/* CURSO 17 */}
        <Route path='/principiante17' element={<Principiante17/>}/>
        <Route path='/medio17' element={<Medio17/>}/>
        <Route path='/avanzado17' element={<Avanzado17/>}/>

        {/* CURSO 18 */}
        <Route path='/principiante18' element={<Principiante18/>}/>
        <Route path='/medio18' element={<Medio18/>}/>
        <Route path='/avanzado18' element={<Avanzado18/>}/>

        {/* CURSO 19 */}
        <Route path='/principiante19' element={<Principiante19/>}/>
        <Route path='/medio19' element={<Medio19/>}/>
        <Route path='/avanzado19' element={<Avanzado19/>}/>

        {/* CURSO 20 */}
        <Route path='/principiante20' element={<Principiante20/>}/>
        <Route path='/medio20' element={<Medio20/>}/>
        <Route path='/avanzado20' element={<Avanzado20/>}/>

        {/* CURSO 21 */}
        <Route path='/principiante21' element={<Principiante21/>}/>
        <Route path='/medio21' element={<Medio21/>}/>
        <Route path='/avanzado21' element={<Avanzado21/>}/>

        {/* CURSO 22 */}
        <Route path='/principiante22' element={<Principiante22/>}/>
        <Route path='/medio22' element={<Medio22/>}/>
        <Route path='/avanzado22' element={<Avanzado22/>}/>

        {/* CURSO 23 */}
        <Route path='/principiante23' element={<Principiante23/>}/>
        <Route path='/medio23' element={<Medio23/>}/>
        <Route path='/avanzado23' element={<Avanzado23/>}/>

        {/* CURSO 24 */}
        <Route path='/principiante24' element={<Principiante24/>}/>
        <Route path='/medio24' element={<Medio24/>}/>
        <Route path='/avanzado24' element={<Avanzado24/>}/>

        {/* CURSO 25 */}
        <Route path='/principiante25' element={<Principiante25/>}/>
        <Route path='/medio25' element={<Medio25/>}/>
        <Route path='/avanzado25' element={<Avanzado25/>}/>

        {/* CURSO 26 */}
        <Route path='/principiante26' element={<Principiante26/>}/>
        <Route path='/medio26' element={<Medio26/>}/>
        <Route path='/avanzado26' element={<Avanzado26/>}/>

        {/* CURSO 27 */}
        <Route path='/principiante27' element={<Principiante27/>}/>
        <Route path='/medio27' element={<Medio27/>}/>
        <Route path='/avanzado27' element={<Avanzado27/>}/>

        <Route path='/edit/:keywords' element={<PrivateRoute>
          <Edit />
        </PrivateRoute>} />
        

        <Route path="/new" element={<PrivateRoute>
          <New/>
        </PrivateRoute>}/>

      </Routes>
    </BrowserRouter>
  )
}
