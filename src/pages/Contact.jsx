const Contact = () =>
{
     
     return(      
     <div className="contact-div">
          <h2>Entre em contato para maiores informações</h2>
          <form className="contact-form" action="">
               <div>
                    <input className="contact-input" type="text" placeholder="Nome"/>
               </div>
               <div>
                    <input className="contact-input" type="email" placeholder="E-mail"/>
               </div>
               <div>
                    <textarea className="contact-input-textarea" name="" id="" cols={60} rows={10} placeholder="Mensagem"></textarea>
               </div>
               <div className="div-button">
                    <button className="button">Enviar</button>
               </div>
               

          </form>
     </div>
     );
};
export default Contact;