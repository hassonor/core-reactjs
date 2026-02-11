# Core React.js – Concepts, Patterns & Hands-On Examples

![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)
![React >= 18](https://img.shields.io/badge/react-%3E%3D18.x-blue)
![Node.js >= 20](https://img.shields.io/badge/node-%3E%3D20.x-brightgreen)

A **comprehensive knowledge base** of React.js code & learning resources collected from courses, books, and production React applications. The repository is organized as a **mono-repo where each top-level folder is a self-contained mini-project** – clone the repo, `cd` into a folder, install, and run.

> **Tip ▸** Can't see a folder mentioned below? The repository is evolving – pull to get the latest or open an issue and we'll add it.

---

## 🗂 Directory Index (root-level)

| Folder | Quick Glance |
|--------|--------------|
| `react-fundamentals` | Components, JSX, props, state, lifecycle |
| `hooks-deep-dive` | useState, useEffect, useContext, custom hooks |
| `component-patterns` | Compound components, render props, HOCs |
| `state-management` | Context API, useReducer, Redux, Zustand |
| `performance-optimization` | useMemo, useCallback, React.memo, lazy loading |
| `routing` | React Router v6, protected routes, nested routes |
| `forms-validation` | Controlled forms, Formik, React Hook Form, Zod |
| `data-fetching` | Fetch API, Axios, React Query, SWR |
| `styling` | CSS Modules, Styled Components, Tailwind CSS, Emotion |
| `testing` | Jest, React Testing Library, E2E with Playwright |
| `typescript-react` | Component typing, hooks, props, generics |
| `react-with-nextjs` | Server Components, App Router, SSR, SSG |
| `animations` | Framer Motion, React Spring, CSS transitions |
| `advanced-patterns` | Portals, Error Boundaries, Suspense, Concurrent |
| `real-world-apps` | Full applications (todo, e-commerce, dashboard) |

_The easiest way to explore is `gh repo clone hassonor/core-reactjs && tree -L 2`_

---

## 🚀 Run an Example

```bash
# clone once
$ git clone https://github.com/hassonor/core-reactjs.git
$ cd core-reactjs

# pick a project
$ cd hooks-deep-dive/03-useEffect-patterns

# install deps & start
$ npm install
$ npm start
```

Each folder contains:
- `README.md` – explanation of concepts
- `src/` – React source files with examples
- `package.json` – dependencies and scripts
- Vite or Create React App configuration

---

## 📚 Core Concepts Covered

### 1. React Fundamentals

#### Components
```jsx
// Functional Component (Modern)
function Welcome({ name }) {
  return <h1>Hello, {name}!</h1>;
}

// Arrow Function Component
const Welcome = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
};
```

#### JSX
```jsx
// JSX combines HTML-like syntax with JavaScript
const element = (
  <div className="container">
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    {isLoggedIn && <button>Logout</button>}
  </div>
);
```

#### Props
```jsx
// Parent Component
function App() {
  return <UserCard name="Alice" age={25} isAdmin={true} />;
}

// Child Component
function UserCard({ name, age, isAdmin = false }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>Age: {age}</p>
      {isAdmin && <span className="badge">Admin</span>}
    </div>
  );
}
```

---

### 2. Hooks

#### useState
```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(prev => prev - 1)}>Decrement</button>
    </div>
  );
}
```

#### useEffect
```jsx
import { useEffect, useState } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Runs after component mounts and when userId changes
    async function fetchUser() {
      setLoading(true);
      const response = await fetch(`/api/users/${userId}`);
      const data = await response.json();
      setUser(data);
      setLoading(false);
    }

    fetchUser();

    // Cleanup function (runs before next effect or unmount)
    return () => {
      // Cancel any pending requests or subscriptions
    };
  }, [userId]); // Dependencies array

  if (loading) return <p>Loading...</p>;
  return <div>{user.name}</div>;
}
```

#### useContext
```jsx
import { createContext, useContext, useState } from 'react';

// Create context
const ThemeContext = createContext();

// Provider component
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Consumer component
function ThemedButton() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button
      style={{ background: theme === 'dark' ? '#333' : '#fff' }}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      Toggle Theme
    </button>
  );
}
```

#### Custom Hooks
```jsx
// Custom hook for data fetching
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [url]);

  return { data, loading, error };
}

// Usage
function Users() {
  const { data, loading, error } = useFetch('/api/users');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  );
}
```

---

### 3. State Management

#### useReducer
```jsx
import { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return initialState;
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </>
  );
}
```

#### Context + Reducer Pattern
```jsx
// Combined Context and Reducer for complex state
const CartContext = createContext();

function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialCartState);

  const addItem = (item) => dispatch({ type: 'ADD_ITEM', payload: item });
  const removeItem = (id) => dispatch({ type: 'REMOVE_ITEM', payload: id });
  const clearCart = () => dispatch({ type: 'CLEAR_CART' });

  const value = {
    items: state.items,
    total: state.total,
    addItem,
    removeItem,
    clearCart
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
}
```

---

### 4. Performance Optimization

#### React.memo
```jsx
import { memo } from 'react';

// Component only re-renders if props change
const ExpensiveComponent = memo(function ExpensiveComponent({ data }) {
  // Heavy computation
  const processedData = expensiveCalculation(data);

  return <div>{processedData}</div>;
});
```

#### useMemo
```jsx
import { useMemo } from 'react';

function ProductList({ products, filter }) {
  // Expensive filtering only runs when products or filter changes
  const filteredProducts = useMemo(() => {
    return products.filter(p => p.category === filter);
  }, [products, filter]);

  return (
    <ul>
      {filteredProducts.map(p => <li key={p.id}>{p.name}</li>)}
    </ul>
  );
}
```

#### useCallback
```jsx
import { useCallback, useState } from 'react';

function Parent() {
  const [count, setCount] = useState(0);

  // Function reference stays the same unless count changes
  const handleClick = useCallback(() => {
    setCount(c => c + 1);
  }, []);

  return <Child onClick={handleClick} />;
}

const Child = memo(function Child({ onClick }) {
  return <button onClick={onClick}>Click me</button>;
});
```

#### Lazy Loading
```jsx
import { lazy, Suspense } from 'react';

// Code-splitting: component loaded only when needed
const HeavyComponent = lazy(() => import('./HeavyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HeavyComponent />
    </Suspense>
  );
}
```

---

### 5. Forms and Validation

#### Controlled Components
```jsx
function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Login</button>
    </form>
  );
}
```

#### React Hook Form + Zod
```jsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  age: z.number().min(18)
});

function SignupForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema)
  });

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('email')} />
      {errors.email && <p>{errors.email.message}</p>}

      <input type="password" {...register('password')} />
      {errors.password && <p>{errors.password.message}</p>}

      <input type="number" {...register('age', { valueAsNumber: true })} />
      {errors.age && <p>{errors.age.message}</p>}

      <button type="submit">Sign Up</button>
    </form>
  );
}
```

---

### 6. Data Fetching

#### React Query
```jsx
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

function TodoList() {
  const queryClient = useQueryClient();

  // Fetch todos
  const { data, isLoading, error } = useQuery({
    queryKey: ['todos'],
    queryFn: () => fetch('/api/todos').then(res => res.json())
  });

  // Add todo mutation
  const mutation = useMutation({
    mutationFn: (newTodo) => fetch('/api/todos', {
      method: 'POST',
      body: JSON.stringify(newTodo)
    }),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    }
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {data.map(todo => <div key={todo.id}>{todo.title}</div>)}
      <button onClick={() => mutation.mutate({ title: 'New todo' })}>
        Add Todo
      </button>
    </div>
  );
}
```

---

### 7. Routing (React Router v6)

```jsx
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/users">Users</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />}>
          <Route path=":userId" element={<UserProfile />} />
        </Route>
        <Route path="/admin" element={
          <ProtectedRoute>
            <Admin />
          </ProtectedRoute>
        } />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

// Protected Route component
function ProtectedRoute({ children }) {
  const isAuthenticated = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
```

---

## 🎯 Best Practices

### ✅ DO:
- Use functional components with hooks (not class components)
- Keep components small and focused (Single Responsibility)
- Extract reusable logic into custom hooks
- Use TypeScript for type safety
- Memoize expensive calculations with `useMemo`
- Memoize callbacks passed to child components with `useCallback`
- Use React.memo for expensive child components
- Handle loading and error states
- Use proper key props in lists
- Validate forms with schema validation (Zod, Yup)
- Use React Query for server state
- Implement error boundaries for error handling
- Lazy load routes and heavy components
- Use absolute imports for better readability

### ❌ DON'T:
- Mutate state directly (use setter functions)
- Use index as key in dynamic lists
- Forget dependencies in useEffect
- Call hooks conditionally or in loops
- Prop drill more than 2-3 levels (use Context)
- Over-use useContext (causes unnecessary re-renders)
- Forget to cleanup in useEffect
- Mix server state and UI state
- Create massive components (split them up)
- Use inline functions in JSX (causes re-renders)

---

## 🧪 Testing

### React Testing Library

```jsx
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from './Counter';

describe('Counter', () => {
  it('renders initial count', () => {
    render(<Counter initialCount={5} />);
    expect(screen.getByText(/count: 5/i)).toBeInTheDocument();
  });

  it('increments count on button click', async () => {
    render(<Counter initialCount={0} />);
    const button = screen.getByRole('button', { name: /increment/i });

    await userEvent.click(button);

    expect(screen.getByText(/count: 1/i)).toBeInTheDocument();
  });
});
```

---

## 📖 Learning Path

### Beginner Track
1. `react-fundamentals/` - Start here!
2. `hooks-deep-dive/` - Master hooks
3. `forms-validation/` - Handle user input
4. `routing/` - Multi-page apps

### Intermediate Track
5. `state-management/` - Complex state patterns
6. `data-fetching/` - API integration
7. `styling/` - Style your components
8. `performance-optimization/` - Make it fast

### Advanced Track
9. `typescript-react/` - Type-safe React
10. `advanced-patterns/` - Advanced techniques
11. `testing/` - Test your apps
12. `real-world-apps/` - Build complete projects

---

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

---

<div align="center">

**Made with ❤️ by [Or Hasson](https://github.com/hassonor)**

⭐ Star this repo if you're learning React!

</div>
