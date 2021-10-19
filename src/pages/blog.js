import * as React from "react";
import Cursos from "../components/cursos";
import Layout from "../components/layout";
import Asesorias from "../components/asesorias";
// import HeroPost from "../components/blog/hero-post";
// import MoreStories from "../components/blog/more-stories";
// import { graphql } from "gatsby";
// import { Helmet } from "react-helmet";

// const heroPost = allPosts.nodes[0];
// const morePosts = allPosts.nodes.slice(1);

const BlogPage = () => {
  return (
    <>
      <Layout>
        hi
        {/* <Helmet favicon={site.favicon} /> */}
        <div className="section">
          <div className="container">
            <h1>hi i'm the blog</h1>
            {/* {heroPost && (
              <HeroPost
                title={heroPost.title}
                coverImage={heroPost.coverImage}
                date={heroPost.date}
                author={heroPost.author}
                slug={heroPost.slug}
                excerpt={heroPost.excerpt}
              />
            )}
            {morePosts.length > 0 && <MoreStories posts={morePosts} />} */}
          </div>
        </div>
        <div id="cursos">
          <Cursos />
        </div>
        <div id="asesorias">
          <Asesorias />
        </div>
      </Layout>
    </>
  );
};

export default BlogPage;

// export const query = graphql`
//   {
//     site: datoCmsSite {
//       favicon: faviconMetaTags {
//         ...GatsbyDatoCmsFaviconMetaTags
//       }
//     }
//     blog: datoCmsBlog {
//       seo: seoMetaTags {
//         ...GatsbyDatoCmsSeoMetaTags
//       }
//     }
//     allPosts: allDatoCmsPost(sort: { fields: date, order: DESC }, limit: 20) {
//       nodes {
//         title
//         slug
//         excerpt
//         date
//         coverImage {
//           large: fluid(imgixParams: { fm: "jpg" }, sizes: "(max-width: 1500px) 100vw, 1500px") {
//             ...GatsbyDatoCmsFluid
//           }
//           small: fluid(imgixParams: { fm: "jpg" }, sizes: "(max-width: 760px) 100vw, (max-width: 1500px) 50vw, 700px") {
//             ...GatsbyDatoCmsFluid
//           }
//         }
//         author {
//           name
//           picture {
//             fixed(
//               width: 48
//               height: 48
//               imgixParams: { fm: "jpg", fit: "crop", sat: -100 }
//             ) {
//               ...GatsbyDatoCmsFixed
//             }
//           }
//         }
//       }
//     }
//   }
// `;

