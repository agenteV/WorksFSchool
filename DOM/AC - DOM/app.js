const app = document.getElementById('app')

const header = document.createElement('header');
        header.innerHTML = `
            <h1>Portfólio</h1>
            <hr>
            <p>Bem-vindo ao nosso portfólio pessoal!</p>
            
        `;
        app.appendChild(header);

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


        const apresentacao = document.createElement('section');
        apresentacao.id = 'apresentacao';
        apresentacao.innerHTML = `
        <center>
        <div class="flip-card" style="align-items: center;">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                <img src="imagens/vithonex.jpg" alt="Avatar" style="width:240px;height:300px;">
            </div>
        <div class="flip-card-back">
        <h1>Vitor D</h1>
        <p>17 anos</p>
        <p>Sou um pequeno desenvolvedor que tem um grande sonho em se tornar um programador de sucesso.</p>
        </div>
    </div>
    </div>

    <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                <img src="imagens/mateus.jpg" alt="Avatar" style="width:240px;height:300px;">
            </div>
        <div class="flip-card-back">
        <h1>Mateus D</h1>
        <p>17 anos</p>
        <p>Meu sonho é ser alguém de sucesso no ramo de tecnologia.</p>
        </div>
    </div>
    </div>

    <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                <img src="imagens/raul.jpg" alt="Avatar" style="width:250px;height:300px;">
            </div>
        <div class="flip-card-back">
        <h1>Raul</h1>
        <p>17 anos</p>
        <p>Estudo na Fiap a muito tempo então sempre estive em contato com tecnologia, e decidi seguir na área.</p>
        </div>
    </div>
    </div>
    </center> 
        `;
        app.appendChild(apresentacao);


 const habilidades = document.createElement('section');
 habilidades.id = 'habilidades';
 habilidades.innerHTML = `
 
 <br>
 <center>
     <h2>Nossas Habilidades</h2>
</center>
<hr>
     `;
const habilidadesTable = document.createElement('table');
habilidadesTable.id = 'habilidadesTable'
habilidadesTable.innerHTML= `
<table>
<tr>
  <th style="width:50%">Habilidades de cada Integrante</th>
  <th>HTML</th>
  <th>CSS</th>
  <th>JS</th>
</tr>
<tr>
  <td>Mateus</td>
  <td><i class="fa fa-check"></i></td>
  <td><i class="fa fa-check"></i></td>
  <td><i class="fa fa-remove"></i></td>
</tr>
<tr>
  <td>Raul</td>
  <td><i class="fa fa-check"></i></td>
  <td><i class="fa fa-remove"></i></td>
  <td><i class="fa fa-check"></i></td>
</tr>
<tr>
  <td>Vitor</td>
  <td><i class="fa fa-check"></i></td>
  <td><i class="fa fa-remove"></i></td>
  <td><i class="fa fa-check"></i></td>
</tr>
</table>

`;
app.appendChild(habilidades);
app.appendChild(habilidadesTable);
 

const contatoH2 = document.createElement('h2')
contatoH2.id = 'contatoH2'
contatoH2.innerHTML=`
<center>
        <br>
     <h2>Entre em Contato</h2>
     </center>
`;
app.appendChild(contatoH2)
 
 const contato = document.createElement('section');
 contato.id = 'contato';
 contato.innerHTML = `
     <div class="container">
     <form>
   
       <label for="name">Nome: </label>
       <input type="text" id="name" name="name" placeholder="Seu nome...">
   
       <label for="email">Email: </label>
       <input type="text" id="email" name="email"  placeholder="Digite seu E-mail..">
   
       <label for="message">Mensagem: </label>
       <textarea id="message" name="message" placeholder="Mensagem*" style="height:100px"></textarea>
   
       <button type="submit" class="registerbtn">Enviar</button>   
     </form>
   </div>
 `;
 app.appendChild(contato);

 const footer = document.createElement('footer');
 footer.innerHTML = `
     <p>&copy; 2024 - Meu Portfólio Pessoal. Todos os direitos reservados.</p>
 `;
 app.appendChild(footer);

    function handleSubmit(event) {
        event.preventDefault();

        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const name = form.elements['name'].value;
            const email = form.elements['email'].value;
            const message = form.elements['message'].value;

            setTimeout(function() {
              alert('Obrigado por entrar em contato, ' + name + '! Nós responderemos em breve, no email: ' + email);
              form.reset();
            }, 1000);
          });
        } 
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';

        alert('Obrigado por entrar em contato!');