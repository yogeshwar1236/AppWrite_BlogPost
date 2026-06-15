import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components/index";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const [imageFailed, setImageFailed] = useState(false);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.userId === userData.$id : false;
    const imageUrl = post?.featuredImage ? appwriteService.getFilePreview(post.featuredImage) : "";
    const imageFallbackText = post?.featuredImage ? "Image failed to load" : "No image saved on this post";

    useEffect(() => {
        setImageFailed(false);
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.featuredImage);
                navigate("/");
            }
        });
    };

    return post ? (
        <div className="py-8">
            <Container>
                <div className="relative mb-4 flex w-full justify-center rounded-xl border p-2">
                    {imageUrl && !imageFailed ? (
                        <img
                            src={imageUrl}
                            alt={post.title}
                            className="max-h-[520px] w-full rounded-xl object-contain"
                            onError={() => setImageFailed(true)}
                        />
                    ) : (
                        <div className="flex aspect-video w-full items-center justify-center rounded-xl bg-gray-200 text-sm text-gray-600">
                            {imageFallbackText}
                        </div>
                    )}

                    {isAuthor && (
                        <div className="absolute right-6 top-6">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button bgColor="bg-green-500" className="mr-3">
                                    Edit
                                </Button>
                            </Link>
                            <Button bgColor="bg-red-500" onClick={deletePost}>
                                Delete
                            </Button>
                        </div>
                    )}
                </div>
                <div className="w-full mb-6">
                    <h1 className="text-2xl font-bold">{post.title}</h1>
                </div>
                <div className="tmx-auto max-w-3xl text-left leading-8 text-gray-800">
                    {parse(post.content)}
                    </div>
            </Container>
        </div>
    ) : null;
}
