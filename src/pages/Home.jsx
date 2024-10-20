import img_home_01 from "../image/img_home_01.jpg"
import img_home_02 from "../image/img_home_02.jpg"


const Home = () =>
{
     return(
          <div>
                <h1>My Home page</h1>

               <div className="content">
                    <img className="home_img" src = {img_home_01} alt="" />
                    <h2>Principal</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi ducimus fugit assumenda aut accusamus, dolores obcaecati quasi tempora neque ex quae, voluptatibus sed illo placeat, cum eos nisi repellat et.</p>
               </div>

               <div className="content">
                    <img className="home_img" src = {img_home_02} alt="" />
                    <h2>Secundário</h2>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quaerat sapiente libero, et illum sequi odio enim. Omnis, autem? Pariatur deleniti totam fugit provident. Possimus at molestiae corrupti nihil veniam?
               </div>







          </div>
     );
};
export default Home;