import {FcLike,FcLikePlaceholder}from "react-icons/fc";
import { toast } from "react-toastify";

const card=(props)=>{
    let course=props.course;
    let liked=props.liked;
    let setLiked=props.setLiked;
    const clickHandler=()=>{
        if(liked.includes(course.id)){
            //already liked 
            setLiked( (prev)=>prev.filter( (currId)=> (currId !== course.id) ));
            toast.warning("Like removed");
        }
        else{
            setLiked((prev)=> [...prev , course.id] );
            toast.success("Liked Successfully");
        }
    }

    return (
        <div className="card">
            <img src={course.image.url}  alt="" className="image" />
            <div>
                <button key={course.id} className="like" onClick={clickHandler}>
                   {
                    liked.includes(course.id) ? ( <FcLike   />) : (<FcLikePlaceholder/>)
                   }
                </button> 
            </div>
            <div>
                <p className="title">{course.title}</p>
                <p className="description">{
                    course.description.length >100 ?
                       (course.description.substring(0,100)+"...") : (course.description)
                }</p>
            </div>
        </div>
    )
}

export default card;