import { useRouter } from "next/router";
import { Toolbar } from "../../components/toolbar";
export default function Feed({ pageNumber, articles }) {

    const router = useRouter();

    return (
        // main
        <div>
            <Toolbar />


            <div className="flex w-8/12 mt-20 mx-auto flex-col"> 
            {articles.map((article, index) => (
                // post
               
              <div className="mt-10 flex flex-row border-b-[1px] border-solid border-black" key={index}> 
                <div className="w-1/2 mb-6 mr-3" >
                        {!!article.urlToImage && <img className="w-full" src={article.urlToImage} />}        
                </div>
                <div className="w-1/2 pt-2">
                            <h1 onClick={() => (window.location.href= article.url)} className="cursor-pointer text-left mb-6 text-[#1D2951]">{article.title}</h1>
                            <p className="text-[#1D2951]">{article.description}</p>
                        </div>
                </div>
            ))}            
            </div>
            
            {/* paginator  */}

            <div className="w-full flex justify-center spac mb-4">  
                <div  onClick={() => { 
                    if (pageNumber > 1)
                        {router.push(`/feed/${pageNumber -1}`).then(() => window.scrollTo(0,0))
                    }
                }} 
                className={pageNumber === 1 ? "cursor-not-allowed text-gray-500" : "cursor-pointer" }>Previous Page</div>

                <div className="pr-5 pl-5">{ pageNumber }</div>

                <div onClick={() => { 
                    if (pageNumber < 5)
                        {router.push(`/feed/${pageNumber +1}`).then(() => window.scrollTo(0,0))
                    }
                }} 
                className={pageNumber === 5 ? "cursor-not-allowed text-gray-500" : "cursor-pointer" }>Next Page</div>
                
            </div>
        </div>

    );
};

export const getServerSideProps = async  pageContext => {
    const pageNumber = pageContext.query.slug;

    if (!pageNumber || pageNumber < 1 || pageNumber > 5) {
        return {
            props: {
                articles: [],
                pageNumber: 1,
            },
        };
    }

    const apiResponse = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&pageSize=5&page=${pageNumber}`,
        {
            headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`,
            },
        }
    )

    const apiJson = await apiResponse.json();

        const { articles } = apiJson;

        return {
            props: {
                articles,
                pageNumber: Number.parseInt(pageNumber)
            }
        }
};