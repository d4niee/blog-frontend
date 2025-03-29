[![build](https://github.com/d4niee/blog-frontend/actions/workflows/build.yaml/badge.svg)](https://github.com/d4niee/blog-frontend/actions/workflows/build.yaml) [![Docker Publish](https://github.com/d4niee/blog-frontend/actions/workflows/docker-publish.yaml/badge.svg)](https://github.com/d4niee/blog-frontend/actions/workflows/docker-publish.yaml)

# 📝 blog-frontend

A simple Vite + React + TypeScript blog frontend that renders Markdown-based blog posts stored in the `src/blogs/` directory.

---

## 📁 Project Structure

```
src/
├── blogs/
│   ├── blogIndex.ts        # Maps slugs to markdown file paths
│   ├── demo/
│   │   └── demo.md         # Example blog post
│   └── another-post/
│       └── index.md        # Another blog post
├── pages/
│   ├── Home.tsx            # Main blog listing page
│   └── BlogEntry.tsx       # Dynamic blog page for each slug
├── App.tsx                 # Route definitions
```

---

## 🚀 Running the Project Locally

```bash
# Install dependencies
yarn install

# Start dev server
yarn dev

# Open in browser
http://localhost:5173
```

---

## 🆕 How to Add a New Blog Entry

To add a new blog post:

1. **Create a folder in `src/blogs/`**  
   The folder name will be the blog's slug (URL path).

2. **Add a Markdown file inside**  
   Name it however you like (e.g., `index.md` or `slug.md`).

3. **Register the new post in `blogIndex.ts`**  
   Map the slug to the file path relative to the `blogs` directory.

#### Example:

```bash
src/blogs/my-first-post/index.md
```

```ts
// blogIndex.ts
export const blogMap: Record<string, string> = {
  demo: 'demo/demo.md',
  'my-first-post': 'my-first-post/index.md',
};
```

4. **Access the post via browser:**

```
http://localhost:5173/blog/my-first-post
```

---

## 🛠 Dev Notes

- Blog posts are loaded dynamically using [`import.meta.glob`](https://vitejs.dev/guide/features.html#glob-import) with support for nested folders:
  ```ts
  import.meta.glob('../blogs/**/*.md')
  ```

- Markdown is rendered using `react-markdown`.
