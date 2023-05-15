import './App.css';
import Navbar from './components/Navbar';
import Perfil from './components/Perfil';
import Sobremim from './components/Sobremim';
import Projetos from './components/Projetos';
import Educacao from './components/Educacao';
import Fim from './components/Fim';


function App() {
  return (
    <div className="App">
      <div className="navbar">
        <Navbar
         
         />
      </div>

      {/*PERFIL*/}
      <div className="perfil" id="perfil">
        <Perfil
          foto=""
          nome="Kevelly M. Oliveira"
          sub="Estudante e Full Stack"

        />
      </div>
      {/* SOBRE MIM */}
      <div className="sobremim" id="sobremim">
        <Sobremim
          titulo="Hey!"
          texto="Sou Kevelly, estudante de Desenvolvimento de Sistems e adoro o mundo da técnologia! Pretendo entrar no mercado e continuar me especializando cada vez mais. 
          Em meus anos de estudo utilizei diversas linguagens, como o C#, Java, PHP, JavaScript e C++, por isso tive contato com 
          web, desktop, mobile e embarcados. Aqui postarei meus projetos mais completos desenvolvidos nos últimos anos."
        />
      </div>


      {/* PROjeTOS */}
      <div className="projetos" id="projetos" >

        <Projetos
          titulo2="Portifólio"

      
          t1="Projeto Locadora"
          s1="Esse projeto foi desenvolvido em conjunto a um grupo de 4 membros. Seu intuito é realizar o CRUD, ou seja, cadastro, atualizar, deletar e desativar os dados dos clientes.
          Além da codificação ser desenvolvida em Csharp, também a o desenvolvimento de um banco de dados em MySQL para o armazenamento dos dados."

          t2="CRUD PHP"
          s2="Desenvolvido em PHP, esse projeto também realiza o processo de cadastrar, atualizar e deletar, podendo ser adicinado documentos do seu próprio computador. 
          O armazenamento dos dados é feito com base em uma banco criado para esse projeto, também desenvolvido em MySQL. Criado para a prática em PHP, pode ser usado para armazenar dados de variados negócios."

          t3="Portifólio"
          s3="Esse portifólio é o meu mais novo projeto, desenvolvido em React para expor meus projetos, aqui além dos projetos também conto sobre minha trajetória escolar e cursos."
          
        />
      </div>


      {/* EDUCACAO */}
      <div className="educacao" id="educacao" >

        <Educacao
          titulo3="Educação"
          escolas="Escolas"

          titu1="ETEC Ermelinda Giannini Teixeira"
          subt1="Técnico em Desenvolvimento de Sistemas Integrado ao Ensíno Médio"
          
          titu2="Fundação Bradesco"
          subt2="Curso de HTML e CSS Básico"

          titu3="FATEC Santana de Parnaíba"
          subt3="Curso de HardWare"
      />
      </div>


      {/* FIM */}
      <div className="Fim" >

        <Fim
          nome="Kevelly M. Oliveira"
        texto="Este portifólio tem como principal intuito o seu desenvolvimento em React. Aqui apresento minhas habilidades como desenvolvedora e meus projetos mais completos realizados nos últimos anos."
         />
      </div>


    </div>
  );
}
export default App;
