import conf from "../conf/conf";

import { Client, Databases, ID, Permission, Query, Role, Storage} from 'appwrite';

export class Service{
    client = new Client();
    databases;
    bucket;


    constructor(){
         this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage (this.client);
    }

    getFileId(file) {
        if (!file) return "";
        if (typeof file === "string") return file;
        if (Array.isArray(file)) return this.getFileId(file[0]);

        return file.$id || file.fileId || file.id || file.href || file.url || "";
    }

    normalizePost(post) {
        if (!post) return post;

        const image = post.featuredImage ?? post.Image ?? post.image ?? post.images ?? post.file ?? post.fileId;

        return {
            ...post,
            title: post.title ?? post.Title,
            featuredImage: this.getFileId(image),
            userId: post.userId ?? post.user_id,
        };
    }

    async createPost({title, slug, content, featuredImage, status, userId}){
        try{
            const post = await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                  Title: title,
                  content,
                  Image: featuredImage,
                  status,
                  user_id: userId,  
                }
            )
            return this.normalizePost(post);
        } catch (error){
            console.log("Appwrite serive :: createPost :: error", error);
            throw error;
        }
    }

    async updatePost(slug, {title, content, featuredImage, status}){
        try{
            const post = await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    Title: title,
                    content,
                    Image: featuredImage,
                    status,
                }
            )
            return this.normalizePost(post);
        }catch (error){
            console.log("Appwrite serive :: createPost :: error", error);
            throw error;
        }
    }

    async deletePost(slug){
        try{
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true
        } catch (error) {
            console.log("Appwrite serive :: createPost :: error", error);
            return false
        }
    }

    async getPost(slug){
        try{
            const post = await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return this.normalizePost(post);
        }catch (error){
          console.log("Appwrite serive :: createPost :: error", error);  
          return false
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]){
        try{
            const posts = await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
                
            )
            return {
                ...posts,
                documents: posts.documents.map((post) => this.normalizePost(post)),
            };
        }catch(error) {
            console.log("Appwrite serive :: createPost :: error", error);
            return false
        }
    }

    //file upload service

    async uploadFile(file){
        try{
            return await this.bucket.createFile({
                bucketId: conf.appwriteBucketId,
                fileId: ID.unique(),
                file,
                permissions: [
                    Permission.read(Role.any()),
                    Permission.update(Role.users()),
                    Permission.delete(Role.users()),
                ],
            })
        }catch (error) {
            console.log("Appwrite serive :: createPost :: error", error);
            throw error;
        }
    }

    async deleteFile(fileId){
        try{
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
        }catch(error){
            console.log("Appwrite serive :: createPost :: error", error);
            return false
        }
    }

    getFilePreview(fileId){
        const resolvedFileId = this.getFileId(fileId);
        if (!resolvedFileId) return "";
        if (/^https?:\/\//.test(resolvedFileId)) return resolvedFileId;

        return this.bucket.getFileView({
            bucketId: conf.appwriteBucketId,
            fileId: resolvedFileId,
        })
    }
}

const service = new Service()
export default service
