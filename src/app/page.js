import {allBlogs} from "contentlayer/generated";
import HomeCoverSection from "../components/Home/HomeCoverSection";
import Featured from "../components/Home/Featured";
import RecentPosts from "../components/Home/RecentPosts";

export default function Home() {
  
  return (
    <main className="flex flex-col items-center justify-center">
      <HomeCoverSection blogs={allBlogs} />
      <Featured blogs={allBlogs} />
      <RecentPosts blogs={allBlogs} />


    </main>
  )
}
