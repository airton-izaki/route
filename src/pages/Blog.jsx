import img_blog from "../image/img_blog.jpg"

const Blog = () =>
{
     return( 
     <main>
          <article>
               <h2 className="blog-h2">Titulo do artigo</h2>

               <div className="blog-autor">
                    <p>Data: 18 de outubro de 2024</p>
                    <p>Autor: João Pedro da Silva</p>
               </div>
               <div className="blog-img">
                    <img src = {img_blog} alt="" />
               </div>
               
               <p className="blog-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum officia rerum iste nam ipsam tempora culpa? Consectetur laborum quaerat, quos quasi doloribus nihil? Fuga fugiat similique maiores dolores laborum laudantium!</p>          
          </article>
     </main>
     );
};
export default Blog;