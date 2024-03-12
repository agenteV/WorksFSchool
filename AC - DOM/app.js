const app = document.getElementById('app')

const header = document.createElement('header');
        header.innerHTML = `
            <h1>Portfólio</h1>
            <hr>
            <p>Bem-vindo ao nosso portfólio pessoal!</p>
            
        `;
        app.appendChild(header);
        
        //FEITO



const nav = document.createElement('nav');
const ul = document.createElement('ul');
const sections = ['Apresentação', 'Habilidades', 'Contato'];
        sections.forEach(section => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = `#${section.toLowerCase()}`;
            a.textContent = section;
            li.appendChild(a);
            ul.appendChild(li);
        });
        nav.appendChild(ul);
        app.appendChild(nav);

        //FEITO 

        const row = document.createElement('section')
        row.id = 'row'
        const column = document.createElement('column')
        column.id = 'column'
        const content = document.createElement('content')
        content.id = 'content'
        const apresentacao = document.createElement('section');
        apresentacao.id = 'apresentacao';
        row.innerHTML = `
            <img src>
            <h3>Sobre mim</h3>
            <p>Eu sou Vitor D, tenho 17 anos e sou um pequeno desenvolvedor que tem um grande sonho em se tornar um programador de sucesso, e poder recompensar minha familia por tudo oque eles fizeram por mim.</p>
            <br>
            <p>Olá eu sou Mateus, tenho 17 anos, já atuei na base do Palmeiras conquistando 1 brasileiro sub15 no clube, meu sonho é ser alguém de sucesso no ramo de tecnologia.</p>
            <br>
            <p>Olá, sou Raul tenho 17 anos e estudo na Fiap a muito tempo então sempre estive em contato com tecnologia, e decidi seguir na área.</p>
        `;
        app.appendChild(row);


        //

 // Cria a seção de habilidades
 const habilidades = document.createElement('section');
 habilidades.id = 'habilidades';
 habilidades.innerHTML = `
     <h2>Nossas Habilidades</h2>
 `;
 const habilidadesLista = ['HTML', 'CSS', 'JavaScript'];
 habilidadesLista.forEach(habilidade => {
     const div = document.createElement('div');
     div.classList.add('habilidade');
     div.innerHTML = `
         <h3>${habilidade}</h3>
         <p>Alguma descrição sobre ${habilidade}</p>
     `;
     habilidades.appendChild(div);
 });
 app.appendChild(habilidades);

 // Cria o formulário de contato
 const contato = document.createElement('section');
 contato.id = 'contato';
 contato.innerHTML = `
     <h2>Entre em Contato</h2>
     <form>
         <label for="nome">Nome:</label>
         <input type="text" id="nome" name="nome" required>

         <label for="email">Email:</label>
         <input type="email" id="email" name="email" required>

         <label for="mensagem">Mensagem:</label>
         <textarea id="mensagem" name="mensagem" rows="4" required></textarea>

         <button type="submit">Enviar</button>
     </form>
 `;
 app.appendChild(contato);

 // Cria o footer
 const footer = document.createElement('footer');
 footer.innerHTML = `
     <p>&copy; 2023 - Meu Portfólio Pessoal. Todos os direitos reservados.</p>
 `;
 app.appendChild(footer);

 // Manipulação do formulário
 const form = document.querySelector('form');
 form.addEventListener('submit', function(event) {
     event.preventDefault(); // Evita o comportamento padrão de recarregar a página
     const nome = document.getElementById('nome').value;
     const email = document.getElementById('email').value;
     const mensagem = document.getElementById('mensagem').value;

     // Aqui você pode enviar os dados para um servidor, enviar um email, etc.

     // Limpa os campos do formulário após o envio
     document.getElementById('nome').value = '';
     document.getElementById('email').value = '';
     document.getElementById('mensagem').value = '';

     alert('Mensagem enviada com sucesso! Obrigado, ' + nome + '!');
 });