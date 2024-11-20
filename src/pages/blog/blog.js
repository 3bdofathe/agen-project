
import './styleOfBlog.css';
import Header from '../../component/header/Header';
import NewBlog from '../../component/newBlog/newBlog';
import Footer from '../../component/footer/footer';

export default function Blog(){
    return(
        <div>
            <div className='head'>
                <Header />
                <h1>Our Blog</h1>
            </div>
            {/* insert a new blog */}
            <NewBlog />
            <NewBlog />
            <NewBlog />

            <div style={{marginTop: '100px'}}></div>

            {/* insert a footer */}
            <Footer />
        </div>
    );
}