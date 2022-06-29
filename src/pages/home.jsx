import SideBar from '../components/sidebar';
import ShowCase from '../components/ShowCase';
function Home() {
    return ( 
        <div className="grid">
            <SideBar/>
            <ShowCase/>
        </div>
     );
}

export default Home;