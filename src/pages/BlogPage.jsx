import {useState} from "react"

function BlogPage (){
    const [blogMonth, setblogMonth] = useState ("September 2022")
    const [blogNextMonth, setblogNextMonth] = useState ("Oktober 2022")


    return (
        <>
            <h2 className="title" id="blog">Blog</h2>
            <div className="BLOG">
                <div className="content" id="content1">
                    <div>
                        <h5 className="Btitle">Intro to UI/UX Design</h5>
                        <p className="blg">Learn from the basic to start a new journey</p>
                    </div>
                    <p className="month">{blogMonth}</p>
                </div>
                
                <hr id="line"/>
                
                <div className="content" id="content2">
                    <div>
                        <h5 className="Btitle">Illustrating tips</h5>
                        <p className="blg">Few tips to make your illustration better</p>
                    </div>
                    <p className="month">{blogNextMonth}</p>
                </div>
            </div>
        </>
    )
}

export default BlogPage