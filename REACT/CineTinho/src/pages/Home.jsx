import data from '../../artigos.json'

function Home() {
  console.log(data)
    return (  
      <>
      <div className="grid grid-cols-3 gap-4">

      {data.map( filme => (
        <>
      
        <div className='card ' key={filme.title}> 
              <h1 className='decoration-solid'> {filme.title} </h1>
              <img src={filme.image} alt={filme.title} />
              <div className='tag'>
                {filme.tags.map(tag => (
                  <span key={tag} className='text-purple-900' > {tag} </span>
                ))}
              </div>
              <div className='texto'>
                {filme.text.map(texto =>(
                  <p key={texto}> {texto} </p>
                ))}
              </div>
              <hr />
            </div>
        </>
        
            )
           )
          }
          </div>
      </>
           
      
    );
}

export default Home;