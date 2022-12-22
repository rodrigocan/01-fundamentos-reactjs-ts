import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"

import styles from "./App.module.css"

import "./global.css"

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @ Rocketseat"
    },
    content: [
      {
        type: "paragraph",
        content:
          "Adipisicing est ad veniam enim exercitation officia duis amet sint anim labore sunt. Nisi nulla laboris amet reprehenderit consequat consequat ad. Commodo nostrud ut irure sint anim ea veniam dolore qui ex eiusmod sunt voluptate. Enim commodo magna id dolor enim ad mollit aliquip quis laboris ex cillum do. Velit occaecat est aliqua et. Lorem eiusmod et proident Lorem in officia."
      },
      {
        type: "paragraph",
        content:
          "Sint minim pariatur incididunt commodo sint deserunt labore officia labore dolor amet ullamco ut. Magna reprehenderit pariatur qui laboris velit sit non officia sunt velit amet pariatur. Labore consequat laborum reprehenderit ea officia. Est exercitation ullamco amet elit proident cupidatat velit laborum veniam incididunt. Id aliquip deserunt anim ipsum et culpa do dolor magna velit eu elit irure. Nisi consectetur ex tempor laborum. Deserunt commodo cillum Lorem sunt nostrud nostrud velit officia."
      },
      { type: "link", content: "https://github.com/diego3g" }
    ],
    publishedAt: new Date("2022-09-08 19:52:00")
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "Mayk Brito",
      role: "Educator @ Rocketseat"
    },
    content: [
      {
        type: "paragraph",
        content:
          "Adipisicing est ad veniam enim exercitation officia duis amet sint anim labore sunt. Nisi nulla laboris amet reprehenderit consequat consequat ad. Commodo nostrud ut irure sint anim ea veniam dolore qui ex eiusmod sunt voluptate. Enim commodo magna id dolor enim ad mollit aliquip quis laboris ex cillum do. Velit occaecat est aliqua et. Lorem eiusmod et proident Lorem in officia."
      },
      {
        type: "paragraph",
        content:
          "Sint minim pariatur incididunt commodo sint deserunt labore officia labore dolor amet ullamco ut. Magna reprehenderit pariatur qui laboris velit sit non officia sunt velit amet pariatur. Labore consequat laborum reprehenderit ea officia. Est exercitation ullamco amet elit proident cupidatat velit laborum veniam incididunt. Id aliquip deserunt anim ipsum et culpa do dolor magna velit eu elit irure. Nisi consectetur ex tempor laborum. Deserunt commodo cillum Lorem sunt nostrud nostrud velit officia."
      },
      { type: "link", content: "https://github.com/maykbrito" }
    ],
    publishedAt: new Date("2022-09-10 17:23:00")
  }
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
