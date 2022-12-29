import React, { useContext, useEffect, useState } from 'react';
import { BsPersonCircle } from 'react-icons/bs';
import { AiOutlineLike } from 'react-icons/ai';
import { AiFillLike } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
import { IoMdPaperPlane } from 'react-icons/io';
import { CiCircleMore } from 'react-icons/ci';
import { FiMoreHorizontal } from 'react-icons/fi';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';


const PostCard = ({ post }) => {
    const { _id, userEmail, userName, postText, postPhoto, totalReact, likeCount, loveCount } = post;


    const { user, userInfo, } = useContext(AuthContext)
    const [doFetch, setDoFetch] = useState(false);
    const [isLiked, setIsLiked] = useState(false);







    // fetch like information \/


    // const likeW = {
    //     userEmail: user?.email,
    //     postId:_id
    // }


    // useEffect(() => {
    //     fetch(`http://localhost:5000/likes/?email=${user?.email}&postId=${_id}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             toast('fetched like condition')
    //             setIsLiked(true)
    //             setDoFetch(false)
    //         })
    // },)


    // fetch like information /\






    // do like \/

    const handleLike = () => {

        const likeInfo = {
            userEmail: user?.email,
            postId: _id
        }

        console.log(likeInfo);


        fetch('http://localhost:5000/likes', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(likeInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast(' like ')
                    setDoFetch(true)
                    setIsLiked(true)
                }
            })
            .catch(er => console.error(er));





    }

    // do like /\















    return (
        <div className=''>
            <div className="card w-screen lg:w-full bg-base-100 shadow-xl m-2 mx-auto">
                <div className="card-body">

                    <div className='flex items-center'>
                        {
                            post?.userPhoto ?
                                <>
                                    <img src={post?.photoURL} className='w-8 rounded-full md:mx-3' alt=''></img>
                                </>
                                :
                                <>
                                    <BsPersonCircle className="text-2xl "></BsPersonCircle>
                                </>
                        }
                        <span className='mx-1 hidden lg:block text- font-semibold text-xs md:text-lg'>{userName}</span>
                    </div>
                    <p>{postText}</p>
                </div>

                {
                    postPhoto && <figure><img src={postPhoto} alt="Shoes" /></figure>
                }

                <div className="card-body">
                    <div className='grid grid-cols-3 text-center'>
                        <div>

                            {
                                 isLiked ?
                                  <button className='' > <AiFillHeart className='text-2xl text-secondary ml-2'></AiFillHeart> </button>
                                 :
                                 <button onClick={handleLike} className='' > <AiOutlineHeart className='text-2xl text-secondary ml-2'></AiOutlineHeart> </button>
                            }

                            
                        </div>
                        <div>
                            <button className='' > <IoMdPaperPlane className='text-2xl text-secondary ml-2'></IoMdPaperPlane> </button>
                        </div>
                        <div>
                            <button className='' > <FiMoreHorizontal className='text-2xl text-secondary font-bold ml-2'></FiMoreHorizontal> </button>
                        </div>

                    </div>
                    <form className='flex items-center'>
                        <input name="comment" type="text" className='border border-secondary rounded mr-2 px-2 w-full' placeholder='write comments ' ></input>
                        <button type='submit' className='btn btn-secondary btn-xs'>comment</button>
                    </form>
                </div>
            </div>


        </div>
    );
};

export default PostCard;