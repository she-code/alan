import React,{useEffect,useState} from 'react';
import NewsCards from './components/newsCards/NewsCards';
import alanBtn from '@alan-ai/alan-sdk-web';
import useStyles from './styles';

const alanKey='aa8559488861e044c05326dd694bafd82e956eca572e1d8b807a3e2338fdd0dc/stage';
const newsApi='23f1fce59cc4471d945531423af440e6';
const App = () => {
    const [newsArticles, setNewsArticles]=useState([]);
   const [activeArticle,setActiveArticle]=useState(0);
    const classes=useStyles();
    //const alanKey;
    //initlaize alan
    useEffect(()=>{
        alanBtn({
            key:alanKey,
            onCommand:({command,articles})=>{
                if(command === 'newHeadlines'){
                  setNewsArticles(articles);
                // console.log('fre')
                 console.log(articles);
                }else if(command==='highlight'){
                        setActiveArticle((prev)=>prev + 1);
                }
            }

        })
    },[]);
    return (
        <div>
            <div className={classes.logoContainer}>
                <img src='https://alan.app/voice/images/previews/preview.jpg' className={classes.alanLogo} alt="alan log" />
            </div>
            <NewsCards articles={newsArticles} activeArticle={activeArticle}/>
        </div>
    );
}
export default App;
